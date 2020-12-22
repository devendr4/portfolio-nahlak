import styled from "styled-components";
import { brightOrange, orange, gray } from "./constants";

export const Title = styled.h1`
  font-size: 3em;
  margin: 0;
  text-align: center;
  transition: ease-in;
  flex: 100%;
`;

export const Circle = styled.div`
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background-color: ${brightOrange};
`;

type ProgressBarProps = {
  width: string;
};

export const ProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  text-align: end;
  height: 0.5rem;
  border-radius: 10rem;
  justify-content: flex-end;
  align-items: center;
  background-color: ${orange};
  width: ${(props) => props.width};
  transition: 200ms;
`;

export const FullBar = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${gray};
  border-radius: 10rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
