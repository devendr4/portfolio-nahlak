import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
  transition: ease-in;
  flex: 100%;
`;

export const Subtitle = styled.span`
  font-size: 0.7em;
  margin-left: 0.5rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .pic {
    display: flex;
    flex-grow: 0;
    justify-content: center;
    padding: 2rem;
    img {
      border-radius: 50px;
      width: 100%;
    }
  }
  .text {
    padding: 1rem;
    flex: 50%;
  }
`;
