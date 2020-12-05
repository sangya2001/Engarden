import React from 'react';
import Navbar from '../../Components/Navbar';
import Landing from "../../Components/Landing"
import "./style.css"

const Home = () => {
    return (
        <div className="home">
            <Navbar/>

            {/* homebody */}
            <div className="homeBody">
                <Landing/>
            </div>
        </div>
    );
}

export default Home;
