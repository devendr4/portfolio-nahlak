import { NavLink } from "react-router-dom";
import { FaEnvelope, FaHome, FaGraduationCap } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { Subtitle } from "../../styles/general";
import { NavItems } from "../../styles/navbar";
export const NavContent = () => {
  return (
    <NavItems>
      <li className="title">NAHLAK</li>
      <li>
        <NavLink to="/" exact>
          <FaHome />
          <Subtitle>home</Subtitle>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <BsPersonLinesFill />
          <Subtitle>about me</Subtitle>
        </NavLink>
      </li>
      <li>
        <NavLink to="/certifications">
          <FaGraduationCap />
          <Subtitle>certifications</Subtitle>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          <FaEnvelope />
          <Subtitle>contact</Subtitle>
        </NavLink>
      </li>
    </NavItems>
  );
};
