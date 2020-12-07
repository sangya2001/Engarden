import React from 'react';
import loadable from '@loadable/component'

const Navbar = loadable(() => import('../../Components/Navbar'))
const Footer = loadable(() => import('../../Components/Footer'))

const Shop = () => {
    return (
        <div className="shop">
            <Navbar />

            <Footer />
        </div>
    );
}

export default Shop;
