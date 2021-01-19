import React, { useState } from "react";
import { Title } from "../styles/general";
import { PicList } from "./PictureListComponent";
import { TabGroup, Tab } from "../styles/tabs";
//import Particles from "react-tsparticles";
//import Particles from "react-particles-js";

const types = ["logos", "ilustraciones", "productos", "art"];
export const HomeComponent = () => {
  const [active, setActive] = useState("logos");
  return (
    <>
      <Title>ART</Title>
      <TabGroup>
        {types.map((data, i) => {
          return [
            <Tab
              isActive={active === data}
              onClick={() => setActive(data)}
              key={i}
            >
              {data === "art" ? "all" : ""}
              {data === "ilustraciones" ? "illustrations" : ""}
              {data === "productos" ? "products" : ""}
              {data === "logos" ? "logos" : ""}
            </Tab>,
          ];
        })}
      </TabGroup>
      <PicList category={active} />
    </>
  );
};
