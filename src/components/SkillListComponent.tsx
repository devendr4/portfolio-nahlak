import React from "react";
import { skillData } from "../data";

import {
  ProgressBar,
  Circle,
  FullBar,
  SkillGroup,
} from "../styled-components/skills";

type Props = {
  category: string;
  isActive: boolean;
};

export const SkillList = ({ category, isActive }: Props) => {
  if (isActive) {
    return (
      <SkillGroup>
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
      </SkillGroup>
    );
  } else return <></>;
};
