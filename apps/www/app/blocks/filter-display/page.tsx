"use client";
import { CodeBlock, InlineCode } from "@/components/code-block";
import { SourceCodeDisplay } from "@/components/source-code-display";
import { LIB_NAME } from "@/lib/constants";
import { Filter, FilterDisplay } from "@/registry/blocks/filter-display";
import { Typography } from "@/registry/ui/typography";

export default function FilterDisplayPage() {
  const appliedFiltersExample = ["active", "inactive"];

  const handleFilter = (filter: Filter, keepPage?: boolean) => {
    console.log("Filtro aplicado:", filter, "Keep page:", keepPage);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Introdução */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Filter Display
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente de filtros aplicados que exibe os filtros selecionados pelo
          usuário, permitindo a remoção individual de cada filtro.
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12 space-y-4">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>
        <Typography variant="p1">Para instalar o componente:</Typography>

        <CodeBlock language="bash" title="Terminal">
          {`npx ${LIB_NAME} add filter-display`}
        </CodeBlock>

        <Typography variant="p1">
          Ou copie e cole o código do componente diretamente:
        </Typography>

        <SourceCodeDisplay
          filePath="registry/blocks/filter-display.tsx"
          language="tsx"
        />
      </section>

      {/* Exemplos de uso */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Exemplos de uso
        </Typography>

        {/* Exemplo 1 */}
        <Typography variant="h3" className="mb-4">
          Filtragem aplicada
        </Typography>
        <Typography variant="s3" className="mb-4">
          Quando há filtros aplicados, o componente aparece com a marcação da filtragem, quando não há, ele não é exibido.
        </Typography>

        <div className="my-6">
          <FilterDisplay
            handleFilter={handleFilter}
            appliedFilters={appliedFiltersExample}
            filterKey="status"
            filters={[
              { label: "Ativo", value: "active" },
              { label: "Inativo", value: "inactive" },
            ]}
          />
        </div>
      </section>

      {/* Props */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Propriedades
        </Typography>

        <table className="w-full border-collapse border border-slate-200">
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-slate-200 px-4 py-3 text-left">
                <Typography variant="p2b">Propriedade</Typography>
              </th>
              <th className="border border-slate-200 px-4 py-3 text-left">
                <Typography variant="p2b">Tipo</Typography>
              </th>
              <th className="border border-slate-200 px-4 py-3 text-left">
                <Typography variant="p2b">Padrão</Typography>
              </th>
              <th className="border border-slate-200 px-4 py-3 text-left">
                <Typography variant="p2b">Descrição</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3">
                <InlineCode>title</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">string</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Obrigatório</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Título principal da página</Typography>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">
                <InlineCode>description</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">string</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Opcional</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  Subtítulo ou descrição da página
                </Typography>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">
                <InlineCode>breadcrumbs</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  Array&lt;{`{ label: string; path?: string }`}&gt; ou []
                </Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Opcional</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  Caminho de navegação até a página
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
