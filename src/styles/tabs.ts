import styled from "styled-components";
import { colors } from "./constants";

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
  background-color: ${(props) =>
    props.isActive ? colors.active : colors.inactive};
  color: ${(props) => (props.isActive ? colors.blue : colors.lightpink)};
  margin-bottom: 2rem;
  font-size: 1.5em;
  min-width: 6rem;
  margin-left: 1rem;
  text-align: center;
  padding: 1rem;
  &:hover {
    background-color: ${colors.active};
    color: ${colors.inactive};
    filter: grayscale(0%);
  }
`;
