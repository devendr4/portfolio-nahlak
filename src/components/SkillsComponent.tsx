import React from "react";
import {
  FaPython,
  FaAngular,
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
        <h3>Frontend Frameworks</h3>
        <FaAngular />
        <FaReact />
        <FaBootstrap />
      </section>
      <section>
        <h3>Languages</h3>
        <FaPython />
        <DiRuby />
        <SiTypescript />
        <SiJavascript />
        <FaHtml5 />
        <FaCss3Alt />
        <FaSass />
      </section>
      <section>
        <h3>Databases</h3>
        <SiPostgresql />
        <DiMysql />
        <DiMongodb />
        <SiOracle />
      </section>
      <section>
        <h3>Backend Frameworks</h3>
        <SiRails />
        <SiFlask />
        <FaNode />
        <DiDjango />
      </section>
      <section>
        <h3>Business Intelligence</h3>
        <SiTableau />
        <SiPowerbi />
      </section>
    </div>
  );
};
