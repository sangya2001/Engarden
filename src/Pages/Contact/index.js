import React from 'react';
import loadable from '@loadable/component'

const Navbar = loadable(() => import('../../Components/Navbar'))
const Footer = loadable(() => import('../../Components/Footer'))

const Contact = () => {
    return (
        <div className="contact">
            <Navbar/>
            <Footer/>
        </div>
    );
}

export default Contact;
