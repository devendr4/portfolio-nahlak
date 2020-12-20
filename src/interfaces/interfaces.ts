import { IconType } from "react-icons";
export interface Skill {
  name: string;
  icon: IconType;
  knowledge: number;
  category: string;
}
export interface Certificate {
  name?: string;
  category?: string;
  url?: string;
  credential?: string;
  organization?: string;
}
