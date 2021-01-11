import React, { useState } from "react";
import { Nav } from "../../styles/navbar";
import { StyledBurger } from "./Burger";
import { NavContent } from "./NavContent";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger isOpen={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Nav isOpen={open}>
        <NavContent />
      </Nav>
    </>
  );
};
