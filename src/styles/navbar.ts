import styled from "styled-components";
import { colors, sizes } from "./constants";
export const Nav = styled.nav<Props>`
  .title {
    flex: 25%;
    text-align: center;
  }
  width: 100vw;
  height: 4rem;
  background-color: ${colors.primary};
  font-size: 1.5em;
  transition: 400ms ease;
  position: fixed;
  z-index: 999;

  @media (max-width: ${sizes.md}) {
    height: 100%;
    width: 8rem;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    .title {
      flex: 0;
    }
  }
`;

type Props = {
  isOpen: boolean;
};
export const NavItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  li {
    position: relative;
    img {
      max-width: 100%;
      max-height: 4rem;
    }
    a {
      color: ${colors.font};
      padding: 1.5rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      flex-wrap: wrap;
      transition: 300ms;
      svg {
        transition: opacity 0.5s ease-in-out;
      }
      &:hover {
        svg {
        }

        .link-text {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: ${sizes.md}) {
    flex-flow: column nowrap;
    justify-content: space-evenly;
    li {
      a {
        svg {
          width: 100%;
        }
      }
    }
  }
`;
