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
                    <p></p>
                    <div className="card-wrapper">
                        <div className="card">
                            <img src={brush} alt="" />
                            <h2>API Development</h2>
                            <p>An application programming interface is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software.</p>
                        </div>

                        <div className="card">
                            <img src={brush2} alt="" />
                            <h2>Database Schema</h2>
                            <p>The database schema is its structure described in a formal language supported by the database management system.</p>
                        </div>
                        <div className="card">
                            <img src={brush3} alt="" />
                            <h2>Authentication</h2>
                            <p>Authentication is knowing the identity of the user. For example, Alice logs in with her username and password, and the server uses the password to authenticate Alice. </p>
                        </div>
                        <div className="card">
                            <img src={brush4} alt="" />
                            <h2>Error handling </h2>
                            <p>Error handling refers to the anticipation, detection, and resolution of programming, application, and communications errors.</p>
                        </div>
                        <div className="card">
                            <img src={brush5} alt="" />
                            <h2>Code Tasting</h2>
                            <p> Testing also helps you to reduce the amount of code you are writing for a particular feature. After testing. </p>
                        </div>

                        <div className="card">
                            <img src={brush1} alt="" />
                            <h2>Debug code</h2>
                            <p>Debug code is computer code introduced to a computer program to test for errors or to help determine the cause of an error.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Servicess
