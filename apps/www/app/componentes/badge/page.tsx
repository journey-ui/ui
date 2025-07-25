import { Typography } from "@/registry/ui"
import { CodeBlock } from "@/components/code-block"
import { InlineCode } from "@/components/code-block"
import { LIB_NAME } from "@/lib/constants"
import { Badge } from "@/registry/ui/badge"

export default function BadgePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Badge
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente Badge para exibir status ou informações em pequenas etiquetas com estilos customizados via classes CSS.
        </Typography>
      </div>

      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>
        <div className="space-y-4">
          <Typography variant="p1">
            Instale o componente Badge em seu projeto:
          </Typography>
          <CodeBlock language="bash" title="Terminal">
            {`npx ${LIB_NAME} add badge`}
          </CodeBlock>
          <Typography variant="p1">
            Ou copie e cole o código diretamente:
          </Typography>
          <CodeBlock language="tsx" filename="components/badge.tsx" showLineNumbers>
{`interface BadgeProps {
  label?: string;
  description?: string;
  className?: string;
  isLoading?: boolean;
  hidden?: boolean;
}

export function Badge({
  label,
  description,
  className = "",
  isLoading = false,
  hidden = false,
}: BadgeProps) {
  const baseClasses =
    "px-2 py-1 h-min text-white text-xs font-semibold leading-5 rounded-full capitalize text-center inline-block";

  const loadingClasses = "bg-gray-lighter text-gray-lighter animate-pulse";

  return (
    <span
      className={\`\${baseClasses} \${isLoading ? loadingClasses : className}\`}
      hidden={hidden}
      title={description}
    >
      {label}
    </span>
  );
}`}
          </CodeBlock>
        </div>
      </section>

      {/* Uso básico */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Uso básico
        </Typography>
        <Typography variant="p1" className="mb-4">
          Importe o componente e utilize passando classes CSS para controlar as cores e estilos:
        </Typography>
        <div className="flex gap-4 flex-wrap">
          <Badge label="Success" className="bg-green-600" />
          <Badge label="Warning" className="bg-yellow-400 text-black" />
          <Badge label="Error" className="bg-red-600" />
          <Badge label="Inactive" className="bg-gray-400" />
          <Badge label="Information" className="bg-blue-600" />
          <Badge label="Accent" className="bg-purple-300 text-black" />
          <Badge isLoading label="Loading" />
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
                <th className="border border-slate-200 px-4 py-3 text-left">Propriedade</th>
                <th className="border border-slate-200 px-4 py-3 text-left">Tipo</th>
                <th className="border border-slate-200 px-4 py-3 text-left">Padrão</th>
                <th className="border border-slate-200 px-4 py-3 text-left">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>label</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3"><code>string</code></td>
                <td className="border border-slate-200 px-4 py-3">-</td>
                <td className="border border-slate-200 px-4 py-3">Texto exibido dentro do badge.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>description</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3"><code>string</code></td>
                <td className="border border-slate-200 px-4 py-3">-</td>
                <td className="border border-slate-200 px-4 py-3">Descrição para acessibilidade (aparece no tooltip).</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>className</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3"><code>string</code></td>
                <td className="border border-slate-200 px-4 py-3">-</td>
                <td className="border border-slate-200 px-4 py-3">Classes CSS para personalizar cor e estilo.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>isLoading</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3"><code>boolean</code></td>
                <td className="border border-slate-200 px-4 py-3">false</td>
                <td className="border border-slate-200 px-4 py-3">Indica se está no estado de carregamento (estilo de loading).</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>hidden</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3"><code>boolean</code></td>
                <td className="border border-slate-200 px-4 py-3">false</td>
                <td className="border border-slate-200 px-4 py-3">Oculta o badge se verdadeiro.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}
