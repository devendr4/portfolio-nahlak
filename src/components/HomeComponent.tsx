import React, { useState } from "react";
import { Title } from "../styles/general";
import { PicList } from "./PictureListComponent";
import { TabGroup, Tab } from "../styles/tabs";
import Particles from "react-tsparticles";
//import Particles from "react-particles-js";

const types = ["logos", "ilustraciones", "productos", "art"];
const englishTypes = ["logos", "illustrations", "products", "art"];
export const HomeComponent = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Title>ART</Title>
      <TabGroup>
        {englishTypes.map((data, i) => {
          return [
            <Tab isActive={active === i} onClick={() => setActive(i)} key={i}>
              {data === "art" ? "all" : data}
            </Tab>,
          ];
        })}
      </TabGroup>
      {types.map((data, i) => {
        return [<PicList category={data} isActive={active === i} key={i} />];
      })}
    </>
  );
};
