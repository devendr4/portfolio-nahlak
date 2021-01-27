import { NavLink } from "react-router-dom";
import { FaEnvelope, FaHome, FaGraduationCap } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";
import { Subtitle } from "../../styles/general";
import { NavItems } from "../../styles/navbar";
export const NavContent = () => {
  return (
    <NavItems>
      <li className="title">
        <img src="/banner.png" />
      </li>
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
      <li>
        <a
          href="https://teespring.com/stores/nahlak"
          target="_blank"
          rel="noreferrer"
        >
          <FiShoppingCart />
          <Subtitle>store</Subtitle>
        </a>
      </li>
    </NavItems>
  );
};
