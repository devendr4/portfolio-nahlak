import styled from "styled-components";

export const Title = styled.li`
  flex: 25%;
  text-align: center;
`;

export const Nav = styled.nav`
  width: 100vw;
  height: 3rem;
  position: fixed;
  background-color: #014468;
  font-size: 1.7em;
  transition: width 600ms ease;
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
        padding: 1.5rem;
        color: #fed7da;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        filter: grayscale(100%);
        transition: 300ms;
        svg {
          transition: opacity 0.5s ease-in-out;
        }
        &:hover {
          svg {
            opacity: 0.2;
          }

          .link-text {
            opacity: 1;
          }
          filter: grayscale(0%);
        }
      }
    }
  }
`;

export const Subtitle = styled.span`
  font-size: 0.7em;
  margin-left: 0.5rem;
`;
