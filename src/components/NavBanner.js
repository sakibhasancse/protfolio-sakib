import React from 'react'
import MyPhoto from '../assets/images/sakib.jpg';

const NavBanner = () => (
    <div className="hero flex items-center justify-between">
        <div className="right flex-1">
            <p>Hello, I'am</p>
            <h1>Sakib Hasan</h1>
            <h3>I'm a Full Stack Web Developer</h3>
            <ul>
                <li>Trying to do something new</li>
            </ul>
            <div className="header-button">
                <a href="#portfolio" className="btn btn-primary">Portfolio</a>
                <a href="#about" className="btn btn-secondary">About Me</a>
            </div>
        </div>
        <div className="left flex-1 flex justify-center">
            <img src={MyPhoto} alt="" />
        </div>
    </div>
)

export default NavBanner
