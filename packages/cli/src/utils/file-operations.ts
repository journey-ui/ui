import fs from 'fs-extra'
import path from 'path'
import { logger } from '../utils/logger'
import { spinner } from '../utils/spinner'
import type { RegistryItem } from '../registry/schema'
import { fetchRegistryItem } from '../registry/api'


export async function copyRegistryFiles(
  items: RegistryItem[],
  targetCwd: string,
  options: {
    force?: boolean
    silent?: boolean
  } = {}
): Promise<void> {
  const copySpinner = spinner('Copying component files...', {
    silent: options.silent,
  }).start()

  try {
    for (const item of items) {
      if (!item.files || item.files.length === 0) continue

      for (const file of item.files) {
        if (!file.content) {
          // Buscar conteúdo do arquivo se não estiver incluído
          const fullItem = await fetchItemContent(item.name, item.type)
          if (!fullItem) continue
          
          const fullFile = fullItem.files.find(f => f.path === file.path)
          if (!fullFile?.content) continue
          
          file.content = fullFile.content
        }

        const targetPath = path.join(targetCwd, file.target || `src${file.type === 'registry:ui' ? '/components' : ''}/${file.path}`)
        
        // Verificar se arquivo já existe
        if (await fs.pathExists(targetPath) && !options.force) {
          logger.warn(`File ${file.target || file.path} already exists, skipping...`)
          continue
        }

        // Criar diretório se não existir
        await fs.ensureDir(path.dirname(targetPath))
        
        // Escrever arquivo
        await fs.writeFile(targetPath, JSON.parse(file.content))
      }
    }

    copySpinner.succeed('Component files copied successfully')
  } catch (error) {
    copySpinner.fail('Failed to copy component files')
    throw error
  }
}

async function fetchItemContent(name: string, type: string): Promise<RegistryItem | null> {
  try {
    const result = await fetchRegistryItem(name, type)
    return result
  } catch (error) {
    return null
  }
}

export async function validateTargetDirectory(cwd: string): Promise<boolean> {
  // Verificar se é um projeto válido
  const packageJsonPath = path.join(cwd, 'package.json')
  
  if (!await fs.pathExists(packageJsonPath)) {
    logger.error('No package.json found. Please run this command in a valid project.')
    return false
  }

  return true
}

export function resolveFilePath(file: { path: string; type: string; target?: string }, basePath: string): string {
  if (file.target) {
    return path.join(basePath, file.target)
  }

  // Mapear tipos para diretórios padrão
  const typeMapping: Record<string, string> = {
    'registry:ui': 'src/components/ui',
    'registry:lib': 'src/lib',
    'registry:hook': 'src/hooks',
    'registry:init': 'src'
  }

  const typeDir = typeMapping[file.type] || 'src'
  return path.join(basePath, typeDir, file.path)
}