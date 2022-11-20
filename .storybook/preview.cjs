import "../src/styles/global.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  viewMode: "docs",
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#080808"
      },
      {
        name: "light",
        value: "#fff"
      }
    ]
  }
}
