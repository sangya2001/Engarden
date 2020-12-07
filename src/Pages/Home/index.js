import React from 'react';
import Navbar from '../../Components/Navbar';
import Landing from "../../Components/Landing"
import "./style.css"
import Intro from '../../Components/Intro';
import LatestProduct from '../../Components/LatestProduct';
import Gallery from "../../Components/Gallery";
import Footer from '../../Components/Footer';

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

                {/* gallery */}
                <Gallery/>

                {/* footer */}
                <Footer/>
            </div>
        </div>
    );
}

export default Home;
