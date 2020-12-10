import React from "react";
import "./style.css";

// imsges
import GalleryImg from "../../../Assets/Gallery.webp";
import GalleryImg1 from "../../../Assets/Gallery1.webp";
import GalleryImg2 from "../../../Assets/Gallery2.webp";
import GalleryImg3 from "../../../Assets/Gallery3.webp";
import GalleryImg4 from "../../../Assets/Gallery4.webp";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>
        <span style={{ borderBottom: "5px solid #FF7675" }}>Gallery</span>
      </h1>

      <div className="galleryImages">
        {/* left */}
        <div className="galleryLeft">
          <div className="top">
            <img src={GalleryImg} alt="Gallery One" />
          </div>
          <div className="bottom">
            <img src={GalleryImg1} alt="Gallery Two" />
            <img src={GalleryImg2} alt="Gallery Three" />
          </div>
        </div>

        {/* right */}
        <div className="galleryRight">
          <div className="top">
            <h1><span style={{color: "#FF7675", fontWeight: "500"}}>Moments</span> Captured with <span style={{color: "#FF7675", fontWeight: "500"}}>Love</span>.</h1>
          </div>
          <div className="bottom">
              <img src={GalleryImg3} alt="Gallery Four"/>
              <img src={GalleryImg4} alt="Gallery Four"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
