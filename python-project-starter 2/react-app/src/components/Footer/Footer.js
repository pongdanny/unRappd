import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        UNRAPPD
        <div className="divider"></div>
      </div>
      <div className="about">
        <a href="https://untappd.com">Inspired by UNTAPPD!</a>
      </div>
      <div className="links">
        <a
          href="https://github.com/pongdanny/unRappd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
        <a
          href="https://github.com/pongdanny"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/danielpong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://angel.co/u/dannypong"
          target="_blank"
          rel="noopener noreferrer"
        >
          AngelList
        </a>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Footer;
