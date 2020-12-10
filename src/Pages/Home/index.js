import React from 'react';
import loadable from '@loadable/component'
import "./style.css"
import Fade from 'react-reveal/Fade';

const Navbar = loadable(() => import('../../Components/Navbar'))
const Landing = loadable(() => import('../../Components/Home/Landing'))
const Intro = loadable(() => import('../../Components/Home/Intro'))
const LatestProduct = loadable(() => import('../../Components/Home/LatestProduct'))
const Gallery = loadable(() => import('../../Components/Home/Gallery'))
const Footer = loadable(() => import('../../Components/Footer'))

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            {/* homebody */}
            <div className="homeBody">
                <Fade>
                    <Landing />
                </Fade>
                <hr />
                {/* This is featured product */}
                <Fade><Intro /></Fade>

                {/* latest Product */}
                <Fade><LatestProduct /></Fade>

                {/* gallery */}
                <Fade><Gallery /></Fade>

                {/* footer */}
                <Fade><Footer /></Fade>
            </div>
        </div>
    );
}

export default Home;
