import { useState } from "react";
import { colors } from "../styles/constants";
//@ts-ignore
import { Image, Transformation, Placeholder } from "cloudinary-react";

type Props = {
  publicId: string;
  onClick?: () => void;
};

const LazyImage = ({ publicId, onClick }: Props) => {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <>
      <Image
        publicId={publicId}
        id="img"
        width="100%"
        height="100%"
        loading="lazy"
        alt={"img_" + publicId}
        style={isLoaded ? {} : { opacity: 0 }}
        onLoad={() => setLoaded(true)}
        onClick={onClick}
      >
        <Transformation fetch_format="auto" quality="auto" flags="lossy" />
        <Transformation
          width="600"
          crop="limit"
          dpr="auto"
          background={colors.primary}
        />
        <Placeholder type="pixelate" />
      </Image>
    </>
  );
};

export default LazyImage;
