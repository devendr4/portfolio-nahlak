import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3em;
  margin: 0;
  text-align: center;
  transition: ease-in;
  flex: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .pic {
    flex: 15%;
    img {
      border-radius: 50px;
    }
  }
  .text {
    padding: 2rem;
    flex: 50%;
  }
`;
