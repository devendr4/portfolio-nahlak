import React from "react";
import {
  FaEnvelope,
  FaHome,
  FaMoon,
  FaRegLightbulb,
  FaGraduationCap,
} from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

import "../styles.scss";

export const Navbar = () => {
  return (
    <>
      <TiThMenu className="burger" />

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">
              <span className="link-text">Home</span>
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span className="link-text">About Me</span>
              <BsPersonLinesFill />
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills">
              <span className="link-text">Skills</span>
              <FaRegLightbulb />
            </NavLink>
          </li>
          <li>
            <NavLink to="/certifications">
              <span className="link-text">Certifications</span>
              <FaGraduationCap />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span className="link-text">Contact</span>
              <FaEnvelope />
            </NavLink>
          </li>
          <li>
            <a>
              <span>
                <FaMoon />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
