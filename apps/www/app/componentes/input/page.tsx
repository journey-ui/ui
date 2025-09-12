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

      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Exemplos de uso
        </Typography>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Typography variant="h3" className="mb-2">
                Campo de busca padrão
              </Typography>
              <div className="space-y-4">
                <Input placeholder="Buscar" className="pl-8" />
              </div>
            </div>
            <div>
              <Typography variant="h3" className="mb-2">
                Campo de busca com foco
              </Typography>
              <div className="space-y-4">
                <Input
                  placeholder="Buscar"
                  className="pl-9 border-blue-400 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
            <div>
              <Typography variant="h3" className="mb-2">
                Campo de busca com botão de fechar
              </Typography>
              <div className="space-y-4">
                <Input value="Buscar" className="pl-11 border-blue-400" />
              </div>
            </div>
            <div>
              <Typography variant="h3" className="mb-2">
                Campo de busca desabilitado
              </Typography>
              <div className="space-y-4">
                <Input placeholder="Buscar" disabled className="pl-11" />
              </div>
            </div>
            <div>
              <Typography variant="h3" className="mb-2">
                Campo de busca com erro
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
                  <InlineCode>icon</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <code>React.JSX.Element</code>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  -
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Ícone exibido à esquerda do campo de input.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>inputClassName</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <code>string</code>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  -
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Classe CSS adicional aplicada diretamente ao
                  <InlineCode>input</InlineCode>.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>placeholder</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <code>string</code>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>"Pesquise por Documento, TOTVS Code, Nome do Cliente"</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Texto exibido quando o campo está vazio.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>showClearButton</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <code>boolean</code>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>true</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Exibe o botão de limpar quando há valor no campo.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>onClickClearButton</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <code>() =&gt; void</code>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  -
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Função chamada ao clicar no botão de limpar.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
