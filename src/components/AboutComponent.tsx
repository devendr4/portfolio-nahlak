import pic from "../profilepic.jpeg";
import { Title, FlexContainer } from "../styled-components/styled-components";

export const About = () => {
  return (
    <FlexContainer>
      <Title>About Me</Title>
      <section>
        <img src={pic} className="pic" alt="profilepic" />
        <p>Age: 23</p>
      </section>

      <section>
        <h2>Education</h2>
        <h3>Software Engineering</h3>
        <h4>Universidad Católica Andrés Bello</h4>
      </section>
      <section>
        <h2>Work Experience</h2>
        <div>
          <h3>Full Stack Developer </h3>
          <h4>Telefónica Venezolana, C.A.</h4>
        </div>
        <div>
          <h3>Front-end Developer</h3>
          <h4>Asociación Guao de Venezuela</h4>
        </div>
        <div>
          <h3>Translator</h3>
          <h4>Traducciones TEP, C.A.</h4>
        </div>
      </section>
    </FlexContainer>
  );
};
