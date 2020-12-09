import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faAngular } from "@fortawesome/free-brands-svg-icons";
export const Skills = () => {
  return (
    <div className="skills">
      <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faAngular}></FontAwesomeIcon>
    </div>
  );
};
