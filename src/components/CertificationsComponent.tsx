import React from "react";
import useCollection from "../hooks/useCollection";
import { Spinner } from "./SpinnerComponent";
import { Title } from "../styles/general";
import styled from "styled-components";
//@ts-ignore
import { Image, Transformation } from "cloudinary-react";
import { sizes } from "../styles/constants";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: ${sizes.md}) {
    grid-template-columns: 1fr;
  }
  gap: 1.5rem;
  img {
    object-fit: cover;
  }
`;

export const Certifications = () => {
  const { isLoading, collection } = useCollection({
    name: "automatic",
  });
  return (
    <>
      <Title>Certifications</Title>
      {isLoading && <Spinner />}

      {!isLoading && (
        <Grid>
          {collection.map((item, i) => {
            return (
              <a key={i} href={item.url}>
                <Image src={item.image} alt={`certificate${i}`} width="100%">
                  <Transformation
                    fetch_format="auto"
                    resource-type="image"
                    flags="lossy"
                  />
                </Image>
              </a>
            );
          })}
        </Grid>
      )}
    </>
  );
};
