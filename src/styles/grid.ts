import styled from "styled-components";
import { colors, sizes } from "./constants";
/*export const Tall = styled.div`
  grid-row: span 2 / auto;
`;*/
type Props = {
  isActive: boolean;
};
export const Grid = styled.div<Props>`
  display: ${(props) => (props.isActive ? "grid" : "none")};
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-content: flex-start;
  grid-auto-flow: dense;
  gap: 0.5rem;
  img {
    display: block;
    max-width: 100%;
    cursor: pointer;
    background-color: ${colors.primary};
    /*&:hover {
      position: relative;
      transition: 200ms;
      top: -25px;
      height: auto;
      width: 500px;
      z-index: 999;
    }*/
  }

  figure {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
    img {
      grid-row: 1/-1;
      grid-column: 1;
    }
  }
  @media screen and (min-width: ${sizes.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: ${sizes.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Tall = styled.div`
  grid-row: span 2 / auto;
  .lazyload-wrapper {
    height: 100%;
    box-shadow: 10px 10px white;
  }
`;
