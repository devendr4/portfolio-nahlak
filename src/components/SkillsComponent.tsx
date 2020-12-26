import React, { useState } from "react";
import "firebase/firestore";
import { SkillList } from "./SkillListComponent";
import "../component-styles/skills.scss";
import { TabGroup, Tab } from "../styled-components/skills";
import { Title } from "../styled-components/styled-components";

export const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Title>Skills</Title>
      <TabGroup>
        <Tab isActive={active === 0} onClick={() => setActive(0)}>
          Languages
        </Tab>
        <Tab isActive={active === 1} onClick={() => setActive(1)}>
          Frontend
        </Tab>
        <Tab isActive={active === 2} onClick={() => setActive(2)}>
          Backend
        </Tab>
        <Tab isActive={active === 3} onClick={() => setActive(3)}>
          Databases
        </Tab>
        <Tab isActive={active === 4} onClick={() => setActive(4)}>
          BI
        </Tab>
      </TabGroup>

      <SkillList category="lang" isActive={active === 0} />
      <SkillList category="frontend" isActive={active === 1} />
      <SkillList category="backend" isActive={active === 2} />
      <SkillList category="database" isActive={active === 3} />
      <SkillList category="bi" isActive={active === 4} />
    </div>
  );
};
