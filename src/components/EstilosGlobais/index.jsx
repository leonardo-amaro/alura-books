import { createGlobalStyle } from "styled-components"

const EstilosGlobais = createGlobalStyle`
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
`

export default EstilosGlobais