import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/App.css';

import hamberger from './assets/images/hamberger.svg'
import MobileNavigation from './components/About'
import Navbar from './components/Navbar';
import About from './components/About';
import Skill from './components/Skill';
import Servicess from './components/Servicess';
import Protfolio from './components/Protfolio';
import Footer from './components/Footer';
import ContactInfo from './components/ContactInfo';
import NavBanner from './components/NavBanner';

const App = () => {
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

export default App;
