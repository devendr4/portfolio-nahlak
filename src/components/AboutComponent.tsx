import pic from "../profilepic.jpeg";
import { Title } from "../styled-components/styled-components";

export const About = () => {
  return (
    <div>
      <Title>About Me</Title>
      <img src={pic} className="pic" alt="profilepic" />
      <p>Age: 23</p>

      <h2>Education</h2>
      <section>
        <h3>Software Engineering</h3>
        <h4>Universidad Católica Andrés Bello</h4>
      </section>
      <h2>Work Experience</h2>
      <section>
        <h3>Full Stack Developer </h3>
        <h4>Telefónica Venezolana, C.A.</h4>
      </section>
      <section>
        <h3>Front-end Developer</h3>
        <h4>Asociación Guao de Venezuela</h4>
      </section>
      <section>
        <h3>Translator</h3>
        <h4>Traducciones TEP, C.A.</h4>
      </section>
    </div>
  );
};
