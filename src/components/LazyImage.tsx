import { colors } from "../styles/constants";
//@ts-ignore
import { Image, Transformation, Placeholder } from "cloudinary-react";

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
    <Image publicId={publicId} width="100%" height="100%" loading="lazy">
      <Transformation fetch_format="auto" quality="auto" flags="lossy" />
      <Transformation
        width="600"
        crop="scale"
        dpr="auto"
        background={colors.primary}
      />
      <Placeholder type="pixelate" />
    </Image>
  );
};

export default LazyImage;
