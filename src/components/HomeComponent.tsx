import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 3em;
  margin: 0;
  margin-bottom: 5rem;
  transition: ease-in;
`;

export const HomeComponent = () => {
  return (
    <>
      <Title>Angel G. Altuve Rodríguez</Title>
      <h2>Software Engineer </h2>
    </>
  );
};
