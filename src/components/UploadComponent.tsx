import React, { useState, useEffect } from "react";
import { fetchPhotos, openUploadWidget } from "../CloudinaryService";
// @ts-expect-error
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components";

const url = "http://res.cloudinary.com/chichaswan/image/upload/";
export const UploadButton = () => {
  const beginUpload = (tag: string[]) => {
    const uploadOptions = {
      cloudName: "chichaswan",
      tags: [tag],
      uploadPreset: "upload",
    };
    openUploadWidget(uploadOptions, (err: any, pic: any) => {
      console.log(pic);
    });
  };
  return (
    <div>
      <button onClick={() => beginUpload(["art", "logos"])}>logos</button>
      <button onClick={() => beginUpload(["art", "ilustraciones"])}>
        ilustraciones
      </button>
      <button onClick={() => beginUpload(["art", "productos"])}>
        productos
      </button>
    </div>
  );
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
  const [images, setImages] = useState<any[]>([]);
  useEffect(() => {
    fetchPhotos("art", setImages);
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
