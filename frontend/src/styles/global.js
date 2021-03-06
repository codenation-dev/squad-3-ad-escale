import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Pathway+Gothic+One&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  .router-container {
    height: calc(100% - 60px);
    overflow: auto;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #fff;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      text-decoration: none;
    }
  }
`
