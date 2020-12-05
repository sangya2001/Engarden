import React from 'react';
import"./style.css"

// images
import LandingCard from "../../Assets/Landing.jpg"
import LandingCard1 from "../../Assets/Landing1.jpg"
import LandingCard2 from "../../Assets/Landing2.jpg"

const Landing = () => {
    return (
        <div className="landing">
            <div className="landingMiniGallery">
                <img className="landingMiniGalleryCard" src={LandingCard} alt="Landing Card"/>
                <img className="landingMiniGalleryCard" src={LandingCard1} alt="Landing1 Card"/>
                <img className="landingMiniGalleryCard" src={LandingCard2} alt="Landing2 Card"/>
            </div>
            <div className="landingContent">
                For the <span style={{color: "#ff7675", fontWeight: "500"}}>True Plant Lovers</span> out there.
            </div>
        </div>
    );
}

export default Landing;
