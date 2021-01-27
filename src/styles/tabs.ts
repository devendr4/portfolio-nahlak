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
  overflow-wrap: break-word;
  background-color: ${(props) =>
    props.isActive ? colors.secondary : colors.darkprimary};
  margin-bottom: 2rem;
  font-size: 1.5em;
  min-width: 6rem;
  margin-left: 1rem;
  text-align: center;
  padding: 1rem;
  &:hover {
    background-color: ${colors.secondary};
    filter: grayscale(0%);
  }
`;
