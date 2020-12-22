import React from "react";
import "firebase/firestore";
import { SkillList } from "./SkillListComponent";
import "../component-styles/skills.scss";
import { Title } from "../styled-components/styled-components";
export const Skills = () => {
  return (
    <div className="skills">
      <Title>Skills</Title>
      <div>
        <h3>Languages</h3>
        <SkillList category="lang" />
      </div>
      <div>
        <h3>Frontend Frameworks</h3>
        <SkillList category="frontend" />
      </div>
      <div>
        <h3>Databases</h3>
        <SkillList category="database" />
      </div>
      <div>
        <h3>Backend Frameworks</h3>
        <SkillList category="backend" />
      </div>
      <div>
        <h3>Business Intelligence</h3>
        <SkillList category="bi" />
      </div>
    </div>
  );
};
