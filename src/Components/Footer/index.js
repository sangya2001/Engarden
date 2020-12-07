import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// material icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="message">
          Let's{" "}
          <span style={{ borderBottom: "5px solid #FF7675" }}>empower</span>{" "}
          more people to plant and share the{" "}
          <span style={{ color: "#FF7675", fontWeight: "400" }}>LOVE.</span>
        </div>
        <div className="socialMedia">
          <Link to="/">
            <FacebookIcon />
          </Link>
          <Link to="/">
            <InstagramIcon />
          </Link>
          <Link to="/">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <hr />
      <div className="bottom">
        Copyright &copy; Engarden. All Rights Reserved. 2020-2022
      </div>
    </div>
  );
};

export default Footer;
