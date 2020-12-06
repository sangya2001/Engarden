import React from 'react';
import Navbar from '../../Components/Navbar';
import Landing from "../../Components/Landing"
import "./style.css"
import Intro from '../../Components/Intro';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>

            {/* homebody */}
            <div className="homeBody">
                <Landing/>
                <hr/>
                {/* short intro */}
                <Intro/>
            </div>
        </div>
    );
}

export default Home;
