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
      <div>
        <h3>Frontend Frameworks</h3>
        <section>
          <FaAngular />
          <FaReact />
          <FaBootstrap />
        </section>
      </div>
      <div>
        <h3>Languages</h3>
        <section>
          <FaPython />
          <DiRuby />
          <SiTypescript />
          <SiJavascript />
          <FaHtml5 />
          <FaCss3Alt />
          <FaSass />
        </section>
      </div>
      <div>
        <h3>Databases</h3>
        <section>
          <SiPostgresql />
          <DiMysql />
          <DiMongodb />
          <SiOracle />
        </section>
      </div>
      <div>
        <h3>Backend Frameworks</h3>
        <section>
          <SiRails />
          <SiFlask />
          <FaNode />
          <DiDjango />
        </section>
      </div>
      <div>
        <h3>Business Intelligence</h3>
        <section>
          <SiTableau />
          <SiPowerbi />
        </section>
      </div>
    </div>
  );
};
