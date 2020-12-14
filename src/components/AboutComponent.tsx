import pic from "../profilepic.jpeg";
export const About = () => {
  return (
    <div>
      <img src={pic} className="pic" alt="profilepic" />
      <p>Age: 23</p>

      <h2>Education</h2>
      <h2>Work Experience</h2>
    </div>
  );
};
