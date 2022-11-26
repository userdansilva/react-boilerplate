import { rest } from "msw";
import { v4 as uuid } from "uuid";

const handlers = [
  rest.get("https://fakeapi.dev/features", (req, res, ctx) => res(
    ctx.status(200),
    ctx.delay(2000),
    ctx.json([
      {
        id: uuid(),
        title: "Performance",
        description: "React Router + Suspense + LazyLoading, garatem que o conteúdo de cada module só seja baixado quando o usuário acessar.",
      },
      {
        id: uuid(),
        title: "Unit Tests",
        description: "Teste de páginas, componentes, hooks são feitos com Vitest que segue os padrões do Jest mas mais otimizado para aplicações com Vite.",
      },
      {
        id: uuid(),
        title: "Components Creation",
        description: "Criar componentes em isolamento torna o processo mais rápido e testável visualmente em cada state, para isso é usado o Storybook.",
      },
      {
        id: uuid(),
        title: "No Custom CSS Classes",
        description: "Não é mais necessário a criação de classes para personalizar elementos, com o TailwindCSS cada className recebe classes como: flex e text-white.",
      },
      {
        id: uuid(),
        title: "Code Pattern",
        description: "Padronização é essencial para um código manutenível, o ESLint é usado para manter o padrão. Já conta com padrões airbnb, também customizável.",
      },
      {
        id: uuid(),
        title: "Ready to Mock",
        description: "Seu backend não está pronto? No problem. Com MSW você consegue mockar todas as chamadas de API durante o desenvolvimento.",
      },
      {
        id: uuid(),
        title: "Architecture",
        description: "Arquitetura de modules para organizar funcionalidades, facilitanto a manutenabilidade e trabalho em equipe com Git.",
      },
    ]),
  )),
];

export { handlers };
