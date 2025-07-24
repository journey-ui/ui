import { Typography } from "@/registry/ui";
import { CodeBlock } from "@/components/code-block";
import Header from "@/registry/ui/header";

export default function HeaderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Introdução */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Header
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente de cabeçalho para páginas do sistema, com suporte a título,
          descrição, breadcrumb, imagem decorativa e botão de retorno.
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>

        <Typography variant="p1">
          Para instalar o componente:
        </Typography>

        <CodeBlock language="bash" title="Terminal">
          npx journey-ui add header
        </CodeBlock>
      </section>

      {/* Props */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Propriedades
        </Typography>

        <CodeBlock language="tsx" filename="components/ui/typography.tsx">
          {`
          Title: Título da página *
          Description: Subtítulo ou descrição da página
          Breadcrumbs: Caminho de navegação até a página
          Image: Caminho da imagem decorativa (opcional)
          ReturnButtonLabel: Label do botão de voltar, se necessário
          IsLoading: boolean Mostra placeholders ao carregar (skeletons)
          `}
        </CodeBlock>

      </section>

      {/* Exemplos de uso */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Exemplos de uso
        </Typography>

        {/* Exemplo 1 */}
        <Typography variant="h3" className="mb-4">Header simples com título e descrição</Typography>
        <CodeBlock language="tsx" filename="exemplo1.tsx">
{`<Header
  title="Bem vindo(a) ao Portal de Parceiros"
  description="Gerencie suas ofertas, produtos, clientes e muito mais em um só lugar."
/>`}
        </CodeBlock>
        <div className="my-6">
          <Header
            title="Bem vindo(a) ao Portal de Parceiros"
            description="Gerencie suas ofertas, produtos, clientes e muito mais em um só lugar."
          />
        </div>

        {/* Exemplo 2 */}
        <Typography variant="h3" className="mb-4">Com título e breadcrumbs</Typography>
        <CodeBlock language="tsx" filename="exemplo2.tsx">
{`<Header
  title="Bem vindo(a) ao Portal de Parceiros"
  breadcrumbs={[
    { label: "Home", path: "/" },
    { label: "Página 1", path: "/" },
  ]}
/>`}
        </CodeBlock>
        <div className="my-6">
          <Header
            title="Bem vindo(a) ao Portal de Parceiros"
            breadcrumbs={[
              { label: "Home", path: "/" },
              { label: "Página 1", path: "/" },
            ]}
          />
        </div>

        {/* Exemplo 3 */}
        <Typography variant="h3" className="mb-4">Com título, descrição e breadcrumbs</Typography>
        <CodeBlock language="tsx" filename="exemplo3.tsx">
{`<Header
  title="Configuração de Usuários"
  description="Gerencie e visualize os perfis de acesso dos usuários cadastrados em sua empresa para acesso ao portal."
  breadcrumbs={[
    { label: "Home", path: "/" },
    { label: "Configurações" },
    { label: "Configuração de Usuários" },
  ]}
/>`}
        </CodeBlock>
        <div className="my-6">
          <Header
            title="Configuração de Usuários"
            description="Gerencie e visualize os perfis de acesso dos usuários cadastrados em sua empresa para acesso ao portal."
            breadcrumbs={[
              { label: "Home", path: "/" },
              { label: "Configurações" },
              { label: "Configuração de Usuários" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
