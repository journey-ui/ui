import { Typography } from "@/registry/ui/typography";
import { CodeBlock } from "@/components/code-block";
import { InlineCode } from "@/components/code-block";
import { LIB_NAME } from "@/lib/constants";
import { SourceCodeDisplay } from "@/components/source-code-display";
import { Input } from "@/registry/ui/input";

export default function InputPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Input
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente Input para exibir status ou informações em pequenas
          etiquetas com estilos customizados via classes CSS.
        </Typography>
      </div>

      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>
        <div className="space-y-4">
          <Typography variant="p1">
            Instale o componente Input em seu projeto:
          </Typography>
          <CodeBlock language="bash" title="Terminal">
            {`npx ${LIB_NAME} add input`}
          </CodeBlock>
          <Typography variant="p1">
            Ou copie e cole o código diretamente:
          </Typography>

          <SourceCodeDisplay
            filePath="registry/ui/input.tsx"
            title="input.tsx"
          />
        </div>
      </section>

      {/* Exemplos de uso */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Exemplos de uso
        </Typography>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Default Search */}
            <div>
              <Typography variant="h3" className="mb-2">
                Default Search
              </Typography>
              <div className="space-y-4">
                {/* Default */}
                <Input placeholder="Buscar" className="pl-8" />
              </div>
            </div>
            {/* Focused Search */}
            <div>
              <Typography variant="h3" className="mb-2">
                Focused Search
              </Typography>
              <div className="space-y-4">
                <Input
                  placeholder="Buscar"
                  className="pl-9 border-blue-400 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
            {/* With Close Button Search */}
            <div>
              <Typography variant="h3" className="mb-2">
                With Close Button Search
              </Typography>
              <div className="space-y-4">
                <Input value="Buscar" className="pl-11 border-blue-400" />
              </div>
            </div>
            {/* Disabled Search */}
            <div>
              <Typography variant="h3" className="mb-2">
                Disabled Search
              </Typography>
              <div className="space-y-4">
                <Input placeholder="Buscar" disabled className="pl-11" />
              </div>
            </div>
            {/* with Error Search */}
            <div>
              <Typography variant="h3" className="mb-2">
                With Error Search
              </Typography>
              <div className="space-y-4">
                <Input placeholder="Buscar" className="pl-11 border-red-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propriedades */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Propriedades
        </Typography>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left">
                  Propriedade
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left">
                  Tipo
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left">
                  Padrão
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>variant</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <code>string</code>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>info</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Cor do badge.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>size</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <code>string</code>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>medium</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Tamanho do badge.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
