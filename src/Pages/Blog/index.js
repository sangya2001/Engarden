import React from 'react';
import loadable from '@loadable/component'

const Navbar = loadable(() => import('../../Components/Navbar'))
const Footer = loadable(() => import('../../Components/Footer'))

const Blog = () => {
    return (
        <div className="blog">
            <Navbar/>
            <Footer/>
        </div>
    );
}

export default Blog;
