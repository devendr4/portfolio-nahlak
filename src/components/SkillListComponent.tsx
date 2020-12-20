import React from "react";
import { skillData } from "../data";
import styled from "styled-components";

type ProgressBarProps = {
  width: string;
};

const ProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  text-align: end;
  height: 0.5rem;
  border-radius: 10rem;
  justify-content: flex-end;
  align-items: center;
  background-color: orange;
  width: ${(props) => props.width};
  transition: 200ms;
`;

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
              <div className="full-bar">
                <ProgressBar width={skill.knowledge + "%"}>
                  <div className="circle"></div>
                </ProgressBar>
              </div>
            </span>
          );
        }
      })}
    </div>
  );
};
