import styled from "styled-components";
import { primary, blue } from "./constants";

export const Title = styled.li`
  flex: 25%;
  text-align: center;
`;

export const Nav = styled.nav`
  width: 100vw;
  height: 3rem;
  position: fixed;
  background-color: ${primary};
  font-size: 1.7em;
  transition: width 600ms ease;
  color: ${blue};
  z-index: 1;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    li {
      position: relative;

      a {
        color: ${blue};
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
  }
`;

export const Subtitle = styled.span`
  font-size: 0.7em;
  margin-left: 0.5rem;
`;
