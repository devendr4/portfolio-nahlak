import { Title, FlexContainer } from "../styles/general";
//@ts-ignore
import { Image, Transformation } from "cloudinary-react";

const AboutComponent = () => {
  /* const spanishText = [
    "Soy Sheila S. Cruces (Nahlak), estudiante de psicología mención clínica dinámica, diseñador gráfico y artista. Actualmente me dedico al diseño y el arte utilizando diversos conocimientos en psicología para realizar proyectos artísticos personalizados",
    "Considero el diseño como una manera de expresión plástica que refleja cualidades y contextos particualres que al extrapolarlos a un nivel conductual en las personas, puedan reflejar el inconsciente u otras formas de actividad ",
 ];*/
  return (
    <FlexContainer>
      <Title>About Me</Title>
      <section className="pic">
        <Image
          src="https://res.cloudinary.com/chichaswan/image/upload/v1610074733/20190205_141720_zbtvxz.jpg"
          alt="profilepic"
        >
          <Transformation
            fetch_format="auto"
            resource-type="image"
            flags="lossy"
          />
        </Image>
      </section>
      <section className="text">
        <p>
          I'm Sheila S. Cruces (NAHLAK), psychology student, graphic designer
          and artist. I design and make art using of my psychology knowledge to
          make all kinds of personalized artistic projects.
        </p>
        <p>
          I think design is an expresion which reflects particular qualities and
          contexts, and when this qualities are extrapolated to a behavioral
          level on people, they can be reflected at a subconscious state.
        </p>
      </section>
    </FlexContainer>
  );
};
export default AboutComponent;
