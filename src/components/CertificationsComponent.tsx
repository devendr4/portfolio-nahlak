import React, { useState, useEffect } from "react";
import { Certificate } from "../interfaces/interfaces";
import useCollection from "../hooks/useCollection";
import { Spinner } from "./SpinnerComponent";
import { Title, FlexContainer } from "../styled-components/styled-components";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(min-content, max-content);
  gap: 1.5rem;
  img {
    object-fit: cover;
  }
`;

export const Certifications = () => {
  const { isLoading, collection, error } = useCollection({
    name: "automatic",
  });
  return (
    <FlexContainer>
      <Title>Certifications</Title>
      {isLoading && <Spinner />}

      {!isLoading && (
        <Grid>
          {collection.map((item, i) => {
            return (
              <a key={i} href={item.url}>
                <img src={item.image} />
              </a>
            );
          })}
        </Grid>
      )}
    </FlexContainer>
  );
};
