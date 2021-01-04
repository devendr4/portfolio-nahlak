import React, { useState, useEffect } from "react";
import { fetchPhotos, openUploadWidget } from "../CloudinaryService";
// @ts-expect-error
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components";

const url = "http://res.cloudinary.com/chichaswan/image/upload/";
export const UploadButton = () => {
  const beginUpload = (tag: string) => {
    const uploadOptions = {
      cloudName: "chichaswan",
      tags: [tag],
      uploadPreset: "upload",
    };
    openUploadWidget(uploadOptions, (err: any, pic: any) => {
      console.log(pic);
    });
  };
  return <button onClick={() => beginUpload("test")}>upload</button>;
};

const Tall = styled.div`
  grid-row: span 2 / auto;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  gap: 1.5rem;
  img {
    object-fit: cover;
  }
`;

type ImgProps = {
  url: string;
};

export const Pics = () => {
  console.log(`  ${url} + ${url}`);
  const [images, setImages] = useState<any[]>([]);
  useEffect(() => {
    fetchPhotos("test", setImages);
  }, []);
  return (
    <Grid>
      {images.map((i, j) => {
        console.log(i);
        if (j == 3) {
          return (
            <Tall>
              <Image key={i} publicId={i} width="100%" height="100%" />
            </Tall>
          );
        } else {
          return <Image key={i} publicId={i} width="100%" height="100%" />;
        }
      })}
    </Grid>
  );
};
