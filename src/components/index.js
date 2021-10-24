import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/App.css';

import hamberger from '../assets/images/hamberger.svg'
import MobileNavigation from './About'
import Navbar from './Navbar';
import About from './About';
import Skill from './Skill';
import Servicess from './Servicess';
import Protfolio from './Protfolio';
import Footer from './Footer';
import ContactInfo from './ContactInfo';
import NavBanner from './NavBanner';


const Index = () => {
    const [showMenu, setShowMenu] = useState(false)
    let menu;
    if (showMenu) {
        menu = <MobileNavigation />
    }
    return (
        <div className="site-main-wrapper" >
            <button className="hamberger" onClick={() => setShowMenu(!showMenu)} >
                <img src={hamberger} alt="" />
            </button>
            {menu}
            <header onClick={() => setShowMenu(false)} >
                <div className="container">
                    <Navbar />
                    <NavBanner />
                </div>
            </header>

            <About />
            <Skill />
            <Servicess />
            <Protfolio />
            <ContactInfo />
            <Footer />
        </div>
    );
}

export default Index;
