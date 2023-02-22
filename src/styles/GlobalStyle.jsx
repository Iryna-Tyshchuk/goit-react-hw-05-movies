import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
     display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html{
    height: 100%;
}

header{
 
   flex: 0 0 auto;
}

main{
   flex: 1 0 auto;
}

footer{
   flex: 0 0 auto;
}
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul,ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  img {
  display: block;
  max-width: 30%;
  height: auto;
  width: 30%;
}

`;