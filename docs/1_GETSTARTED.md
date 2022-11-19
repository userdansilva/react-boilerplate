# Bem vindo ao React Boilerplate

**Aviso:** Se quiser ir direto para o uso desse boilerplate acesse o easystart.md mas é recomendado ler essa documentação para entender melhor a lógica por trás do código e da arquitetura.

Esse repositório busca explicar como funciona todo o processo de instalação, e utilização do Reactjs para projetos escaláveis seguindo boas práticas do desenvolvimento, baseada em pesquisas, documentações, conteúdos online no geral e também inspirado em conceitos do livro Clean Code.

```
yarn create vite
```

Na instalação escolha o nome da pasta e opções de `react` e `typescript`.

Referência: https://vitejs.dev/guide/

---

## ESLint

O eslint contribui não só para uma boa padronização de código para times ou até mesmo em projetos individuais, além disso ele auxilia em manter boas práticas, um exemplo disso é o `eslint-plugin-react-hooks` que ajuda a usar e criar hooks de forma mais performática, sugerindo até mesmo situaçòes que pode usar hooks de performance como `useCallback` e `useMemo`.

Normalmente eu prefiro em todo projeto iniciar uma nova instalação pra garantir que estou usando a versão mais recente do eslint e o grupo de pacotes que vem junto com ele, mas tem a opção só copiar o `.eslintrc`, `.eslintignore`, e as dependências do `package.json` e rodar a instalação com `yarn` ou `npm install`.

Eu não uso nenhum code style que aparece na instalação, mas posteriormente instalo o do `airbnb`.

```js
npm init @eslint/config //(mesmo se estiver usando yarn)
```

> To check syntax, find problems, and enforce code style

> JavaScript modules (import/export)

> React 

> Does your project use TypeScript? Yes

> Browser (se seu projeto é Nextjs então aperte espaço e selecione Node também)

> Answer questions about your style (mas sinta livre para usar, ou testar, um popular style)

> JSON

> Spaces

> Double

> Unix

> Do you require semicolons? Yes

> Would you like to install now? Yes

> yarn (ou npm)

Perfeito, nesse ponto sua instalação está concluída, mas ainda não está no padrão desse projeto. Mesmo que o padrão Airbnb seja muito bom ele não serve para todo projeto, então algumas regras eu modifico. É importante entender os avisos que o eslint vai gerar antes de desligar ou alterar uma regra.

_Lembre-se, se há uma regra existe uma motivação, mas cabe a você, e/ou seu time, decidir se a motivação da regra é compatível com o projeto._

Por exemplo, a regra `"import/prefer-default-export"`, ela obriga você a usar `export default` em seus componentes, eu discordo dessa regra permite a utilização de componentes com nome que o dev quiser e não com o nome real do componente.

```tsx
function MyComponent() {
  return (
    <div>This is fine<div>
  )
}

export default MyComponent
```


```javascript
// permite ele ser importado como
import SelectButtonExtreme from "./MyComponent"
```

```tsx
// Porém com named export
export { MyComponent }

// Ele precisa ser importado como
import { MyComponent } from "./MyComponent"
```

Bem, foi só um exemplo. Você pode iniciar seguindo meu padrão e ir modificando ao seu gosto. É importante avisar que esse `.eslintrc.json` NÀO é escrito em pedra, significa que é comum haver mudanças em fase inicial de projeto.

Para seguir meu padrão você pode copiar e substituir o `.eslintrc.json` e `.eslintignore` para seu repositório. E então rodar o seguinte comando.

```
yarn add -D eslint-config-airbnb eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

**Aviso:** É preciso ter a extensão ESLint instalada no seu VSCode, e as seguintes opções no seu `settings.json` do seu vscode:

```
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": [
  "javascript",
  "typescript",
  "html",
  "css",
  "react"
],
```

Se tudo deu certo você pode navegar até o `src/App.tsx` e ver um monte de erros (pode ser necessário reiniciar o vscode) que passando o mouse encima você vai o motivo do erro (sendo que vários pode ser consertado automáticamente pelo eslint ao salvar o arquivo).