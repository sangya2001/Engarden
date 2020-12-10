import React from "react";
import "./style.css";

// images
import LandingCard from "../../../Assets/Landing.webp";
import LandingCard1 from "../../../Assets/Landing1.webp";
import LandingCard2 from "../../../Assets/Landing2.webp";
import LandingCard3 from "../../../Assets/Landing3.webp";

// material components
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landingMiniGallery">
        <div className="left">
            <img src={LandingCard} alt="Landing Card Succulents"/>
        </div>
        <div className="right">
        <img src={LandingCard2} alt="Landing Card"/>
        <img src={LandingCard1} alt="Landing Card"/>
        </div>
      </div>
      <div className="landingContent">
        For the{" "}
        <span style={{ color: "#ff7675", fontWeight: "500" }}>
          True Plant Lovers&nbsp;
        </span>
        out there.
        <p>
          <Link to="/shop">
            Shop now <ArrowForwardIcon />
          </Link>
        </p>
        <img src={LandingCard3} alt="Landig Content " />
      </div>
    </div>
  );
};

export default Landing;
