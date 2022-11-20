import { Card } from "@welcome/components/Card";

function Welcome() {
  return (
    <div className="h-screen flex items-center justify-center w-full flex-col gap-10">
      <div className="max-w-5xl w-full">
        <h1 className="text-lg font-semibold">Features</h1>
      </div>

      <div className="grid grid-cols-3 max-w-5xl gap-3">
        <Card title="Performance">
          React Router + Suspense + LazyLoading, garatem que o conteúdo de cada
          module só seja baixado quando o usuário acessar.
        </Card>

        <Card title="Unit Tests">
          Teste de páginas, componentes, hooks são feitos com Vitest que segue os
          padrões do Jest mas mais otimizado para aplicações com Vite.
        </Card>

        <Card title="Components Creation">
          Criar componentes em isolamento torna o processo mais rápido e testável
          visualmente em cada state, para isso é usado o Storybook.
        </Card>

        <Card title="No Custom CSS Classes">
          Não é mais necessário a criação de classes para personalizar elementos,
          com o TailwindCSS cada className recebe classes como: flex e text-white.
        </Card>

        <Card title="Code Pattern">
          Padronização é essencial para um código manutenível, o
          ESLint é usado para manter o padrão. Já conta com padrões airbnb,
          também customizável.
        </Card>

        <Card title="Ready to Mock">
          Seu backend não está pronto? No problem. Com MSW você consegue mockar
          todas as chamadas de API durante o desenvolvimento.
        </Card>
      </div>
    </div>
  );
}

export default Welcome;
