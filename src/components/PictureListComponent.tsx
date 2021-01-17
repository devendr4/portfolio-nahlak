import React, { useState, useEffect } from "react";
import { fetchPhotos } from "../CloudinaryService";
import LazyImage from "./LazyImage";
import { XMasonry, XBlock } from "react-xmasonry";
import styled, { keyframes } from "styled-components";

type Props = {
  category: string;
  isActive: boolean;
};

const comeIn = keyframes`
0% {transform: scale(0)}
75% {transform: scale(1.03)}
100% {transform: scale(1)}
`;

const PicDiv = styled.div`
  .xmasonry .xblock {
    animation: ${comeIn} ease 0.5s;
    transition: left 0.3s ease, top 0.3s ease;
  }
`;

export const PicList = ({ category, isActive }: Props) => {
  const [images, setImages] = useState<any[]>([]);
  useEffect(() => {
    fetchPhotos(category, setImages);
  }, [category]);
  if (isActive) {
    return (
      <PicDiv>
        <XMasonry maxColumns={3} targetBlockWidth={450}>
          {images.map((i) => {
            return (
              <XBlock key={i}>
                <LazyImage publicId={i} />
              </XBlock>
            );
          })}
        </XMasonry>
      </PicDiv>
    );
  } else {
    return <></>;
  }
};
