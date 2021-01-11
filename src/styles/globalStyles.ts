import { createGlobalStyle } from "styled-components";
import { colors } from "./constants";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap');
 :root {
    font-size: 22px;
    color: ${colors.lightpink} ;
    font-family: 'Montserrat';
  }


  body {
    * {
      box-sizing: border-box;
    }
    background-color: ${colors.bg};
  }


  main {
    padding: 4rem 2rem 4rem 2rem;

    min-height: 100vh;
  }


  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: ${colors.blue};
  }

  body::-webkit-scrollbar-thumb {
    background: ${colors.lightpink};
  }
`;

export default GlobalStyle;
