import React from "react";
import { Footer } from "./FooterComponent";
import { Header } from "./HeaderComponent";
import { Skills } from "./SkillsComponent";
export const HomeComponent = () => {
  return (
    <div className="">
      <Header></Header>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
};
