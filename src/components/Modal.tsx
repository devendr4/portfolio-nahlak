import { AnimatePresence, motion } from "framer-motion";
//@ts-ignore
import { Image, Transformation, Placeholder } from "cloudinary-react";
import styled from "styled-components";
import { colors } from "../styles/constants";

const Modal = styled(motion.div)`
  max-width: 100%;
  max-height: 80vh;
  position: fixed;
  z-index: 9999;
  overflow:hidden;
  img {
    margin: 0 auto;
    max-width: 100%;
    max-height: 80vh;
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;
    height: 2rem;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    
    border: 0;
    transition:2ms all ease;
    &:active,
    &:focus {
      outline: 0;
      border: 0;
      opacity:0.5;
    }
    &:hover{
      opacity:0.5;
    }
`;
const Flex = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 3;
`;

type Props = {
  isOpen: boolean;
  imageId: string;
  toggle: () => void;
};

const ModalComponent: React.FC<Props> = (props) => {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <Flex>
          <Backdrop onClick={props.toggle}></Backdrop>
          <Modal
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <button onClick={props.toggle}>X</button>
            <Image
              publicId={props.imageId}
              id="img"
              loading="lazy"
              alt={"img_" + props.imageId}
            >
              <Transformation
                fetch_format="auto"
                quality="auto"
                flags="lossy"
              />
              <Transformation
                crop="limit"
                dpr="auto"
                background={colors.imgbg}
              />

              <Transformation
                overlay="marca-de-agua_ch3khv"
                opacity="60"
                width="1.0"
                height="1.0"
                flags="relative"
              />
              <Placeholder type="pixelate" />
            </Image>
          </Modal>
        </Flex>
      )}
    </AnimatePresence>
  );
};
export default ModalComponent;
