import React from "react";
import styled from "styled-components";
import { sizes } from "../../styles/constants";

type Props = {
  isOpen: boolean;
};
export const StyledBurger = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: ${sizes.md}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: green;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.isOpen ? "rotate(100%)" : "translateX(0)"};
      opacity: ${(props) => (props.isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Burger = ({ isOpen }: Props) => {
  return (
    <StyledBurger isOpen={isOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
