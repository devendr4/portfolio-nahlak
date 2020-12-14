import { Skill } from "./interfaces/interfaces";
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

export const skillData: Skill[] = [
  {
    name: "Angular",
    icon: FaAngular,
    knowledge: 80,
    category: "frontend",
  },
  {
    name: "ReactJS",
    icon: FaReact,
    knowledge: 70,
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    knowledge: 90,
    category: "frontend",
  },
  {
    name: "Python",
    icon: FaPython,
    knowledge: 80,
    category: "lang",
  },

  {
    name: "Ruby",
    icon: DiRuby,
    knowledge: 70,
    category: "lang",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    knowledge: 90,
    category: "lang",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    knowledge: 80,
    category: "lang",
  },
  {
    name: "SASS",
    icon: FaSass,
    knowledge: 70,
    category: "lang",
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    knowledge: 70,
    category: "lang",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    knowledge: 70,
    category: "lang",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    knowledge: 80,
    category: "database",
  },
  {
    name: "MySQL",
    icon: DiMysql,
    knowledge: 80,
    category: "database",
  },

  {
    name: "OracleDB",
    icon: SiOracle,
    knowledge: 60,
    category: "database",
  },

  {
    name: "MongoDB",
    icon: DiMongodb,
    knowledge: 60,
    category: "database",
  },
  {
    name: "Django",
    icon: DiDjango,
    knowledge: 80,
    category: "backend",
  },
  {
    name: "Ruby on Rails",
    icon: SiRails,
    knowledge: 70,
    category: "backend",
  },
  {
    name: "NodeJS",
    icon: FaNode,
    knowledge: 60,
    category: "backend",
  },
  {
    name: "Flask",
    icon: SiFlask,
    knowledge: 80,
    category: "backend",
  },
  {
    name: "Tableau",
    icon: SiTableau,
    knowledge: 60,
    category: "bi",
  },
  {
    name: "PowerBI",
    icon: SiPowerbi,
    knowledge: 60,
    category: "bi",
  },
];
