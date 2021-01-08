import React, { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaHome, FaGraduationCap } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import "../component-styles/navbar-styles.scss";
import { Title, Subtitle, Nav } from "../styled-components/navbar";

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
      <Nav>
        <ul>
          <Title>NAHLAK</Title>
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
        </ul>
      </Nav>
    </div>
  );
};
