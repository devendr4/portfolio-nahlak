import { createGlobalStyle } from "styled-components";
import { pink, lightpink, blue } from "./constants";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 25px;
    color: ${lightpink} ;
    font-family: Rokkitt;
  }


  body {
    * {
      box-sizing: border-box;
    }
    background-color: ${pink};
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
