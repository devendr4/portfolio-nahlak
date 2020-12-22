import React, { useState, useEffect } from "react";
import { Certificate } from "../interfaces/interfaces";
import useCollection from "../hooks/useCollection";
import { Spinner } from "./SpinnerComponent";
import { Title, FlexContainer } from "../styled-components/styled-components";

export const Certifications = () => {
  const { isLoading, collection, error } = useCollection({
    name: "certificates",
  });

  return (
    <FlexContainer>
      <Title>Certifications</Title>
      {isLoading && <Spinner />}

      {!isLoading && (
        <div>
          <h2>Machine Learning</h2>
          {collection.map((item, i) => {
            if (item.category == "ml")
              return (
                <div key={i}>
                  <div> {item.name} </div>
                  <div> Credential ID: {item.credential} </div>
                  <a href={item.url}>See credential</a>
                </div>
              );
          })}
        </div>
      )}
      {!isLoading && (
        <div>
          <h2>Front-end</h2>
          {collection.map((item, i) => {
            if (item.category == "frontend")
              return (
                <div key={i}>
                  <div> {item.name} </div>
                  <div> Credential ID: {item.credential} </div>
                  <a href={item.url}>See credential</a>
                </div>
              );
          })}
        </div>
      )}
    </FlexContainer>
  );
};
