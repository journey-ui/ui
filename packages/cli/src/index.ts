#!/usr/bin/env node

import { Command } from 'commander'
import { init, initOptionsSchema } from './commands/init.js'
import { add } from './commands/add.js'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function main() {
  const program = new Command()
    .name('journey-ui')
    .description('Add Journey UI components to your project')

  // Init command
  program
    .command('init')
    .description('Initialize your project and install dependencies')
    .option('-c, --cwd <cwd>', 'The working directory. Defaults to the current directory.', process.cwd())
    .option('-y, --yes', 'Skip confirmation prompt', false)
    .option('--defaults', 'Use default configuration', false)
    .option('-f, --force', 'Force overwrite existing files', false)
    .option('-s, --silent', 'Silent mode', false)
    .option('--src-dir', 'Use src directory', false)
    .option('--components <components>', 'Components to install during init', (value) => value.split(','))
    .action(async (opts) => {
      try {
        const options = initOptionsSchema.parse({
          cwd: opts.cwd,
          yes: opts.yes,
          defaults: opts.defaults,
          force: opts.force,
          silent: opts.silent,
          isNewProject: true,
          srcDir: opts.srcDir,
          components: opts.components || ['postcss-config', 'global-css', 'utils']
        })

        await init(options)
      } catch (error) {
        console.error('Error during initialization:', error)
        process.exit(1)
      }
    })

  // Add command - agora usando o comando refatorado
  program.addCommand(add)

  // Future: List command
  // program
  //   .command('list')
  //   .description('List all available components')
  //   .option('-t, --type <type>', 'Filter components by type (ui, lib, hook, etc.)')
  //   .action(async (opts) => {
  //     // Implementation for list command
  //   })

  program.parse()
}

main().catch((error) => {
  console.error('Unexpected error:', error)
  process.exit(1)
})