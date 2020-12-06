import React from 'react';
import Navbar from '../../Components/Navbar';
import Landing from "../../Components/Landing"
import "./style.css"
import Intro from '../../Components/Intro';
import LatestProduct from '../../Components/LatestProduct';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>

            {/* homebody */}
            <div className="homeBody">
                <Landing/>
                <hr/>
                {/* This is featured product */}
                <Intro/>

                {/* latest Product */}
                <LatestProduct/>
            </div>
        </div>
    );
}

export default Home;
