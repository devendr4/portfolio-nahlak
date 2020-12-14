import React from "react";
import { skillData } from "../data";

import "../component-styles/skills.scss";

export const SkillList = (category: string) => {
  let skills = skillData.map((skill, i) => {
    return (
      <div key={i}>
        <skill.icon />
        <p>{skill.name}</p>
      </div>
    );
  });

  return <>{skills}</>;
};

export const Skills = () => {
  return (
    <div className="skills">
      <h3>Frontend Frameworks</h3>
      <SkillList {..."s"} />

      <div>
        <h3>Databases</h3>
      </div>
      <div>
        <h3>Backend Frameworks</h3>
      </div>
      <div>
        <h3>Business Intelligence</h3>
      </div>
    </div>
  );
};
