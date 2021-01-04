import React from "react";
import { Title } from "../styled-components/styled-components";
import { UploadButton, Pics } from "./UploadComponent";
export const HomeComponent = () => {
  return (
    <>
      <Title>Category</Title>
      <UploadButton />
      <Pics />
    </>
  );
};
