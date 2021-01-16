import React, { useState, useEffect } from "react";
import { fetchPhotos } from "../CloudinaryService";
import LazyImage from "./LazyImage";
//@ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
      <ResponsiveMasonry columnsCountBreakPoints={{ 450: 1, 650: 2, 1024: 3 }}>
        <Masonry gutter={10}>
          {images.map((i) => {
            return <LazyImage publicId={i} key={i} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    );
  } else {
    return <></>;
  }
};
