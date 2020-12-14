import React from "react";
import { skillData } from "../data";

import "../component-styles/skills.scss";

const SkillList = ({ category }: { category: string }) => {
  let skills = skillData.map((skill, i) => {
    if (category === skill.category) {
      return (
        <span key={i}>
          <skill.icon />
          <p>{skill.name}</p>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </span>
      );
    }
  });

  return <div className="skill-group">{skills}</div>;
};

export const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h3>Languages</h3>
        <SkillList category="lang" />
      </div>
      <div>
        <h3>Frontend Frameworks</h3>
        <SkillList category="frontend" />
      </div>
      <div className="skill-group">
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
