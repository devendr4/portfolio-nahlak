import React, { useState, Suspense, lazy } from "react";
import { Title } from "../styles/general";
import { TabGroup, Tab } from "../styles/tabs";
import SpinnerComponent from "./SpinnerComponent";
//import Particles from "react-particles-js";
const PicList = lazy(() => import("./PictureListComponent"));
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

      <Suspense fallback={SpinnerComponent}>
        <PicList category={active} />
      </Suspense>
    </>
  );
};
