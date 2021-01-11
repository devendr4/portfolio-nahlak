import React from "react";
import { Title } from "../styles/general";
import { FaInstagram, FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import styled from "styled-components";
import { colors, sizes } from "../styles/constants";

const ContactData = styled.div`
  font-size: 1.6em;
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
  .internal-container {
    align-items: center;
    display: flex;
    box-shadow: 6px 6px 6px black;
    background-color: ${colors.active};
    justify-content: space-around;
    padding: 2rem;
    width: 70vw;
    height: 60vh;
    flex-wrap: wrap;
    span {
      padding: 2rem;
    }
  }
  svg {
    flex: 100%;
  }
  span {
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      color: ${colors.blue};
      text-align: center;
      word-wrap: anywhere;
      overflow-wrap: anywhere;
    }
    p {
      margin: 0;
    }
  }
  @media (max-width: ${sizes.sm}) {
    font-size: 1em;
    .internal-container {
      flex-direction: column;
    }
  }
  @media (max-width: ${sizes.xs}) {
    font-size: 0.7em;
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
