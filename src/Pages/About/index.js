import React from 'react';
import loadable from '@loadable/component'
import './style.css'

const Navbar = loadable(() => import('../../Components/Navbar'))
const Footer = loadable(() => import('../../Components/Footer'))

const About = () => {
    return (
        <div className="about">
            <Navbar/>

            <Footer/>
        </div>
    );
}

export default About;
