import React from 'react';
import Resume from '../assets/Resume of Sakib Hasan.pdf'

const Navbar = () => {
    return (
        <nav id="main-nav" className="flex items-center justify-between">
            <div className="left flex items-center">
                <div className="branding">
                    <i class="fa fa-superpowers supericon" aria-hidden="true"></i>
                </div>
                <div>
                    <a href="#about">About</a>
                    <a href="#skill">Skill</a>
                    <a href="#servicess">Servicess</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

            <div className="right">
                <a href={Resume} target="_blank" className="btn btn-primary underline">Download CV</a>
            </div>
        </nav>
    )
}

export default Navbar
