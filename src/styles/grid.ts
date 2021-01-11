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
  @media screen and (min-width: ${sizes.lg}) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
  @media screen and (max-width: ${sizes.sm}) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: minmax(min-content, max-content);
  gap: 1rem;
  img {
    object-fit: cover;

    cursor: pointer;
    background-color: ${colors.primary};
    height: 100%;
    /*&:hover {
      position: relative;
      transition: 200ms;
      top: -25px;
      height: auto;
      width: 500px;
      z-index: 999;
    }*/
  }
`;

export const Tall = styled.div`
  grid-row: span 2 / auto;
  .lazyload-wrapper {
    height: 100%;
    box-shadow: 10px 10px white;
  }
`;
