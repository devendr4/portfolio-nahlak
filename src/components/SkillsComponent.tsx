import React from "react";
import {
  FaPython,
  FaAngular,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaNode,
} from "react-icons/fa";
import { DiDjango, DiRuby, DiMysql, DiMongodb } from "react-icons/di";
import {
  SiRails,
  SiFlask,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiOracle,
  SiTableau,
  SiPowerbi,
} from "react-icons/si";
export const Skills = () => {
  return (
    <div className="skills">
      <section>
        <FaAngular />
        <FaReact />
        <FaBootstrap />
      </section>
      <section>
        <FaPython />
        <DiRuby />
        <SiTypescript />
        <SiJavascript />
        <FaHtml5 />
        <FaCss3Alt />

        <FaSass />
      </section>
      <section>
        <SiPostgresql />
        <DiMysql />
        <DiMongodb />
        <SiOracle />
      </section>
      <section>
        <SiRails />
        <SiFlask />
        <FaNode />
        <DiDjango />
      </section>
      <section>
        <SiTableau />
        <SiPowerbi />
      </section>
    </div>
  );
};
