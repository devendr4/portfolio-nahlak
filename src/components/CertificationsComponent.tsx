import React, { useState, useEffect } from "react";
import { Certificate } from "../interfaces/interfaces";
import useCollection from "../hooks/useCollection";
import { Spinner } from "./SpinnerComponent";

export const Certifications = () => {
  const { isLoading, collection, error } = useCollection({
    name: "certificates",
  });

  return (
    <div>
      <h2>Machine Learning</h2>
      <h2>Front-end</h2>
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}
      {collection.map((item, i) => (
        <div key={i}>
          <div> {item.name} </div>
          <div> {item.category} </div>
        </div>
      ))}
    </div>
  );
};
