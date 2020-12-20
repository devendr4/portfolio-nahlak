import React, { useState, useRef, useEffect } from "react";
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
import "../component-styles/navbar-styles.scss";

export const useOutsideAlert = (
  ref: React.RefObject<HTMLDivElement>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setOpen]);
};

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlert(wrapperRef, setOpen);
  return (
    <div ref={wrapperRef}>
      <TiThMenu
        className={"burger " + (!isOpen ? "burger" : "burger-closed")}
        onClick={() => {
          setOpen(!isOpen);
          console.log(isOpen);
        }}
      />
      <nav className={"navbar " + (isOpen ? "open" : "closed")}>
        <ul>
          <li>
            <NavLink to="/" exact>
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
            <span>
              <FaMoon />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
