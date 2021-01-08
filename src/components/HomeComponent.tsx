import React, { useState } from "react";
import { Title } from "../styled-components/styled-components";
import { UploadButton } from "./UploadComponent";
import { PicList } from "./PictureListComponent";
import { TabGroup, Tab } from "../styled-components/skills";

interface categoryType {
  name: string;
  index: number;
}
const types = ["logos", "ilustraciones", "productos", "art"];
export const HomeComponent = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <TabGroup>
        {types.map((data, i) => {
          return [
            <Tab isActive={active === i} onClick={() => setActive(i)} key={i}>
              {data}
            </Tab>,
          ];
        })}
      </TabGroup>
      <UploadButton />
      {types.map((data, i) => {
        return [<PicList category={data} isActive={active === i} key={i} />];
      })}
    </>
  );
};
