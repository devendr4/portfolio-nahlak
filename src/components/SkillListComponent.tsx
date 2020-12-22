import React from "react";
import { skillData } from "../data";

import {
  ProgressBar,
  Circle,
  FullBar,
} from "../styled-components/styled-components";

type Props = {
  category: string;
};

export const SkillList = ({ category }: Props) => {
  return (
    <div className="skill-group">
      {skillData.map((skill, i) => {
        if (category === skill.category) {
          return (
            <span key={i}>
              <skill.icon />
              <p>{skill.name}</p>
              <FullBar>
                <ProgressBar width={skill.knowledge + "%"}>
                  <Circle />
                </ProgressBar>
              </FullBar>
            </span>
          );
        }
      })}
    </div>
  );
};
