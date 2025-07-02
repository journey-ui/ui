import { Typography } from "@/registry/ui"
import { TerminalBlock } from "@/components/terminal-block"

export default function InicioRapidoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Typography variant="h1" className="mb-6">
        Início rápido
      </Typography>
      
      <div className="max-w-none space-y-6">
        <Typography variant="p1" className="text-lg text-muted-foreground mb-8">
          Bem-vindo ao Journey UI! Esta é sua primeira página de documentação.
        </Typography>

        <section className="space-y-4">
          <Typography variant="h2">Instalação</Typography>
          <Typography variant="p1">
            Configure o projeto para usar o Journey UI.
          </Typography>
          
          <TerminalBlock title="Terminal">
            npx journey-ui init
          </TerminalBlock>
        </section>

        <section className="space-y-4">
          <Typography variant="h2">Primeiro componente</Typography>
          <Typography variant="p1">
            Para importar os componentes ao projeto, basta rodar o comando add + o nome do componente:
          </Typography>
          
          <TerminalBlock title="Terminal">
            npx journey-ui add button
          </TerminalBlock>
        </section>
      </div>
    </div>
  )
}