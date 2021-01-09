import React from "react";
import { Title } from "../styled-components/styled-components";
import { FaInstagram, FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import styled from "styled-components";
import { active, blue } from "../styled-components/constants";

const ContactData = styled.div`
  font-size: 1.6em;
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
  .internal-container {
    align-items: center;
    display: flex;
    box-shadow: 6px 6px 6px black;
    background-color: ${active};
    justify-content: space-around;
    width: 70vw;
    height: 60vh;

    flex-wrap: wrap;
  }
  svg {
    flex: 100%;
  }
  span {
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      color: ${blue};
    }
    p {
      margin: 0;
    }
  }
`;

export const Contact = () => {
  return (
    <>
      <Title>Contact Me</Title>
      <ContactData>
        <div className="internal-container">
          <span>
            <a
              href="https://www.instagram.com/nahlakkk"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.instagram.com/nahlakkk"
              target="_blank"
              rel="noreferrer"
            >
              @nahlakkk
            </a>
          </span>
          <span>
            <a
              href="mailto:sheilaswanni93@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="mailto:sheilaswanni93@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              sheilaswanni93@gmail.com
            </a>
          </span>
          <span>
            <a
              href="https://www.facebook.com/nahlakkk-106957844571975/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.facebook.com/nahlakkk-106957844571975/"
              target="_blank"
              rel="noreferrer"
            >
              nahlakkk
            </a>
          </span>
        </div>
      </ContactData>
    </>
  );
};
