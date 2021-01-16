import LazyLoad from "react-lazyload";
import { colors } from "../styles/constants";
//@ts-ignore
import { Image, Transformation } from "cloudinary-react";

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

const LazyImage = ({ publicId }: Props) => {
  //<Transformation overlay="marca-de-agua_ch3khv" opacity="60" />
  return (
    <LazyLoad>
      <Image publicId={publicId} width="100%" height="100%">
        <Transformation fetch_format="auto" flags="lossy" />
        <Transformation
          width="auto"
          dpr="auto"
          crop="scale"
          background={colors.primary}
        />
      </Image>
    </LazyLoad>
  );
};

export default LazyImage;
