import React from "react";
import "firebase/firestore";
import { skillData } from "../data";
import styled from "styled-components";
import { useFirebaseApp, useFirestoreCollection } from "reactfire";

import "../component-styles/skills.scss";

const ProgressBar = styled.div<{ width: string }>`
  display: flex;
  text-align: end;
  height: 0.5rem;
  border-radius: 10rem;
  justify-content: flex-end;
  align-items: center;
  background-color: orange;
  width: ${(props) => props.width};
  transition: 200ms;
  &:before {
    background-color: red;
  }
  &:after {
    background-color: green;
  }
`;
const SkillList = ({ category }: { category: string }) => {
  let skills = skillData.map((skill, i) => {
    if (category === skill.category) {
      return (
        <span key={i}>
          <skill.icon />
          <p>{skill.name}</p>
          <div className="full-bar">
            <ProgressBar width={skill.knowledge + "%"}>
              <div className="circle"></div>
            </ProgressBar>
          </div>
        </span>
      );
    }
  });

  return <div className="skill-group">{skills}</div>;
};

export const Skills = () => {
  const firebase = useFirebaseApp();
  const skillRef = firebase.firestore().collection("skills");
  const skill_list = useFirestoreCollection(skillRef).docs.map((data) => {});
  return (
    <div className="skills">
      <h1>Skill List</h1>
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
