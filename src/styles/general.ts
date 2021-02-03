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
    justify-content: center;
    img {
      border-radius: 20px;
    }
  }
  .text {
    padding: 1rem;
    flex: 50%;
  }
`;
