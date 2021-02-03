import { createGlobalStyle } from "styled-components";
import { colors, sizes } from "./constants";

const GlobalStyle = createGlobalStyle`
 :root {
    font-size: 22px;
    color: ${colors.font} ;
    font-family: 'Montserrat';
  }

  body {
    * {
      box-sizing: border-box;
    }
    background-color: ${colors.bg};
  }


  main {
    padding: 5rem 4rem 4rem 4rem;
    min-height: 100vh;
  }


  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: ${colors.secondary};
  }

  body::-webkit-scrollbar-thumb {
    background: ${colors.darkprimary};
  }
  @media (max-width:${sizes.md}){
  main {
    padding: 1rem 1rem 1rem 1rem;
  }

  }

  canvas{
    position:fixed;
  }

  @media (min-width:${sizes.lg}){

  }
  .xblock{
    padding:8px;
  }

  .lazyload-wrapper{
    transition:all .5s ease;
    img{

    }
  }
`;

export default GlobalStyle;
