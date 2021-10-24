import React from 'react'
import brush from '../assets/images/api.svg'
import brush1 from '../assets/images/shopping-online.svg'
import brush2 from '../assets/images/vagueness.svg'
import brush3 from '../assets/images/programing.svg'
import brush4 from '../assets/images/404-error.svg'
import brush5 from '../assets/images/coding.svg'


const Servicess = () => {
    return (
        <>
            <section id="servicess" className="services">
                <div className="container">
                    <div className="section-heading">
                        <div className="section-title">
                            <span>Experience</span>
                        </div>
                    </div>
                    <p>In this section, I have experience in  the work .</p>
                    <div className="card-wrapper">
                        <div className="card">
                            <img src={brush} alt="" />
                            <h2>API Development</h2>
                            <p>i have a good experience in Rest api Development.</p>
                        </div>

                        <div className="card">
                            <img src={brush2} alt="" />
                            <h2>Database Schema</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, autem.</p>
                        </div>
                        <div className="card">
                            <img src={brush3} alt="" />
                            <h2>Authentication</h2>
                            <p>I use Passport.js and JWT  with Node.js because it simplifies the authorization stage </p>
                        </div>
                        <div className="card">
                            <img src={brush4} alt="" />
                            <h2>Error handling </h2>
                            <p>the error we can inform the user with a message, or we can halt the execution altogether.</p>
                        </div>
                        <div className="card">
                            <img src={brush5} alt="" />
                            <h2>Code Tasting</h2>
                            <p> I use Mocha and Chai to test the Node JS application. </p>
                        </div>

                        <div className="card">
                            <img src={brush1} alt="" />
                            <h2>Debug code</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, autem.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Servicess
