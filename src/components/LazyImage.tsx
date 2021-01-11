import { useState } from "react";
import LazyLoad from "react-lazyload";
//@ts-ignore
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components";

/*const loadingAnimation = keyframes`
  0%{
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff; }
`;
*/
type Props = {
  publicId: string;
};

const Test = styled.div`
  img {
    object-fit: scale-down;
  }
`;

const LazyImage = ({ publicId }: Props) => {
  const [openModal, setModal] = useState(false);
  return (
    <LazyLoad>
      <Image publicId={publicId} width="100%" height="100%" onClick={setModal}>
        <Transformation fetch_format="auto" flags="lossy" />
        <Transformation aspectRatio="4:3" crop="fill" />
        <Transformation width="auto" dpr="auto" crop="scale" />
      </Image>

      <Modal isOpen={openModal}>
        <Test>
          <Image
            publicId={publicId}
            width="100%"
            height="100%"
            onClick={setModal}
          >
            <Transformation fetch_format="auto" flags="lossy" />
            <Transformation dpr="auto" crop="scale" />
          </Image>
        </Test>
      </Modal>
    </LazyLoad>
  );
};

export default LazyImage;
