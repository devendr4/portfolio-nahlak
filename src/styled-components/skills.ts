import styled, { keyframes } from "styled-components";
import { inactive, active, blue, lightpink } from "./constants";

type TabProps = {
  isActive: boolean;
};

export const TabGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Tab = styled.div<TabProps>`
  cursor: pointer;
  transition: 800ms;
  background-color: ${(props) => (props.isActive ? active : inactive)};
  color: ${(props) => (props.isActive ? blue : lightpink)};
  margin-bottom: 2rem;
  font-size: 1.5em;
  min-width: 6rem;
  margin-left: 1rem;
  text-align: center;
  padding: 1rem;
  &:hover {
    background-color: ${active};
    color: ${inactive};
    filter: grayscale(0%);
  }
`;

export const SkillGroup = styled.div`
  display: grid;
  /*grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));*/
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  font-size: 1.2em;
  p {
    margin: 0;
  }
`;

export const Circle = styled.div`
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
`;

type ProgressBarProps = {
  width: string;
};

const ProgressAnimation = keyframes`
  0%{
    width: 0%
  }
  }
  100%{
    width:100%;
  }
`;

const PercentageAnimation = keyframes`
  0%,60%{
    opacity:0
  }
  100%{
    opacity:1
  }
`;
export const ProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  text-align: end;
  height: 0.5rem;
  border-radius: 10rem;
  justify-content: flex-end;
  align-items: center;
  width: ${(props) => props.width};
  animation: ${ProgressAnimation} 1.5s ease-out;
  &:before {
    p {
      display: none;
    }
  }
`;

export const FullBar = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 10rem;
`;

export const Knowledge = styled.p`
  margin-bottom: 1.5rem !important;
  padding-left: 1rem;
  font-size: 0.7em;
  animation: ${PercentageAnimation} 2s ease-in;
`;
