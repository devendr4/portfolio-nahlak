import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a>
            <span>Link1</span>
          </a>
        </li>
        <li>
          <a>
            <span>Link1</span>
          </a>
        </li>
        <li>
          <a>
            <span>
              <FaEnvelope />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
