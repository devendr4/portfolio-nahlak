import styled, { keyframes } from "styled-components";

const Anime = keyframes`
   0%,
   80%,
   100% {
     box-shadow: 0 0;
     height: 4em;
   }
   40% {
     box-shadow: 0 -2em;
     height: 5em;
   }
`;

export const Spinner = styled.div`
  &,
  &:before,
  &:after {
    background: #ffffff;
    animation: ${Anime} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  & {
    color: #ffffff;
    text-indent: -9999em;
    margin: 88px auto;
    font-size: 11px;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: "";
  }
  &:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 1.5em;
  }
`;
