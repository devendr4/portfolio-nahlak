import { createGlobalStyle } from "styled-components";
import { pink, lightpink, blue, bg } from "./constants";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap');
 :root {
    font-size: 22px;
    color: ${lightpink} ;
    font-family: 'Montserrat';
  }


  body {
    * {
      box-sizing: border-box;
    }
    background-color: ${bg};
  }


  main {
    padding: 4rem 2rem 4rem 2rem;

    min-height: 100vh;
  }


  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: ${blue};
  }

  body::-webkit-scrollbar-thumb {
    background: ${lightpink};
  }
`;

export default GlobalStyle;
