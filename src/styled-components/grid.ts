import styled from "styled-components";
import LazyLoad from "react-lazyload";

/*export const Tall = styled.div`
  grid-row: span 2 / auto;
`;*/
type Props = {
  isActive: boolean;
};
export const Grid = styled.div<Props>`
  display: ${(props) => (props.isActive ? "grid" : "none")};
  grid-template-columns: repeat(auto-fill, minmax(400px, 3fr));
  grid-auto-rows: minmax(min-content, max-content);
  gap: 5rem;
  img {
    object-fit: scale-down;
    box-shadow: 20px 20px white;
  }
`;

export const Tall = styled.div`
  grid-row: span 2 / auto;
  .lazyload-wrapper {
    height: 100%;
    box-shadow: 10px 10px white;
  }
`;
