import styled from "styled-components";
import { primary } from "./constants";
/*export const Tall = styled.div`
  grid-row: span 2 / auto;
`;*/
type Props = {
  isActive: boolean;
};
export const Grid = styled.div<Props>`
  display: ${(props) => (props.isActive ? "grid" : "none")};
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: minmax(min-content, max-content);
  margin: auto;
  gap: 1rem;
  img {
    object-fit: cover;
    background-color: ${primary};
    height: 100%;
  }
`;

export const Tall = styled.div`
  grid-row: span 2 / auto;
  .lazyload-wrapper {
    height: 100%;
    box-shadow: 10px 10px white;
  }
`;
