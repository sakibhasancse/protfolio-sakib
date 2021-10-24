import React from 'react'

const navbar = () => {
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

                <button className="btn btn-secondary">
                    RESUME
              </button>
            </div>
        </nav>
    )
}

export default navbar
