import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">UNRAPPD</div>
      <div className="about">
        <a href="https://untappd.com">Inspired by UNTAPPD!</a>
      </div>
      <div className="links">
        <a
          className="repo"
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
          <img
            alt="gitlink"
            className="githublink"
            src="https://joshuapenalba.files.wordpress.com/2014/12/github-icon.png"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/danielpong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            alt="linkedlink"
            className="linkedinlink"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnabnti9oG9rBHosrWirRwdgeiSTzsnLkmZw&usqp=CAU"
          ></img>
        </a>
        <a
          href="https://angel.co/u/dannypong"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            alt="angellink"
            className="angellistlink"
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_ab2e1b537cf3eb902be59dba210c1f94/angellist.jpg"
          ></img>
        </a>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Footer;
