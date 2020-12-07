import React from 'react';
import loadable from '@loadable/component'
import "./style.css"

const Navbar = loadable(() => import('../../Components/Navbar'))
const Landing = loadable(() => import('../../Components/Landing'))
const Intro = loadable(() => import('../../Components/Intro'))
const LatestProduct = loadable(() => import('../../Components/LatestProduct'))
const Gallery = loadable(() => import('../../Components/Gallery'))
const Footer = loadable(() => import('../../Components/Footer'))

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
