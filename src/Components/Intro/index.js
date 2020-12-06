import React from "react";
import "./style.css";

import Product from "../../Assets/Featured.png";
import Product1 from "../../Assets/Featured1.png";
import { Button } from "@material-ui/core";

const Intro = () => {
  return (
    <div className="intro">
      <h1>
        <span style={{ borderBottom: "5px solid #FF7675" }}>Featured</span>{" "}
        Product
      </h1>
      <div className="featuredProduct">
        <div className="product product1">
          <img src={Product} alt="Featured Product" />
          <div className="productInfo">
            <h3 className="plantName">1. Tree in the bottle</h3>
            <div className="plantDesc">
              In an ideal world, this plant will want a spot that is well away
              from direct sunlight, with a good amount of water in summer – but
              much less in winter. Wash the leaves occasionally to keep them
              free of dust.
            </div>
            <div className="plantPrice">$ 20</div>
            <Button>Shop Now</Button>
          </div>
        </div>

        {/* product 2 */}
        <div className="product product2">
          <div className="productInfo">
            <h3 className="plantName">2. Cactus tree</h3>
            <div className="plantDesc">
              Incredibly popular with the Victorians, this aspidistra is an
              elegant and tolerant plant that will cope with some neglect –
              hence to common name of cast iron plant. It can withstand drought
              and pollution.
            </div>
            <div className="plantPrice">$ 10</div>
            <Button>Shop Now</Button>
          </div>
          <img src={Product1} alt="Featured Product" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
