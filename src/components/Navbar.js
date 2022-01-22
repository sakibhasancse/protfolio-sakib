import React from 'react';
import Resume from '../assets/Resume of Sakib Hasan.pdf'
import { Link } from 'react-router-dom'

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
                <Link to={Resume} className="btn btn-primary underline">Download CV</Link>
            </div>
        </nav>
    )
}

export default Navbar
