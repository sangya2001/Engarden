import React from "react";
import "./style.css";

import {Link} from "react-router-dom"

const LatestProduct = () => {
  return (
    <div className="latestProduct">
      <h1>
        <span style={{ borderBottom: "5px solid #FF7675" }}>Hot</span> Products
      </h1>

      <div className="latestProductTypes">
        {/* succulents */}
        <Link to="/">
          <div className="succulents">Succulents</div>
        </Link>

        {/* seasonal */}
        <div className="nonSucculents">
          <div className="nonSucculentsTop">
            <Link to="/">
            <div className="outdoorPlants">Outdoor</div>
            </Link>

            <Link to="/">
            <div className="plantPots">Pots</div>
            </Link>
          </div>
          <Link to="/">
          <div className="substrates">Substrates</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
