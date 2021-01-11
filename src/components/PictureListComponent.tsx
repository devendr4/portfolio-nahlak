import React, { useState, useEffect } from "react";
import { fetchPhotos } from "../CloudinaryService";
import { Grid } from "../styles/grid";
import LazyImage from "./LazyImage";

type Props = {
  category: string;
  isActive: boolean;
};
export const PicList = ({ category, isActive }: Props) => {
  const [images, setImages] = useState<any[]>([]);
  useEffect(() => {
    fetchPhotos(category, setImages);
  }, [category]);
  if (isActive) {
    return (
      <>
        <Grid isActive={isActive}>
          {images.map((i) => {
            return <LazyImage publicId={i} key={i} />;
          })}
        </Grid>
      </>
    );
  } else {
    return <></>;
  }
};
