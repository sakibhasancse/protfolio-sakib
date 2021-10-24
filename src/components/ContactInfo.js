import React from 'react'

const ContactInfo = () => (
    <section id="contact" className="contact">
        <div className="container">
            <div className="section-title">
                <span>CONTACTS</span>
            </div>
            <h1 className="section-heading"></h1>
            <p>In this section, my contact information .</p>
            <div className="card-wrapper">
                <div className="card">
                    <h1>Phone</h1>
                    <h6>+8801763553147</h6>
                </div>
                <div className="card">
                    <h1>Email</h1>
                    <h6>me.sakib20@gmail.com</h6>
                </div>
                <div className="card">
                    <h1>Social</h1>
                    <h6>Twitter/Facebook-@SakibHasanCse</h6>
                </div>
                <div className="card">
                    <h1>Location</h1>
                    <h6>Dhaka,Gazipur-1700,Bangladesh </h6>
                </div>
            </div>
            <form>
                <div className="input-wrap">
                    <input type="text" placeholder="Your Name *" />
                    <input type="email" placeholder="Your Email *" />
                </div>
                <div className="input-wrap-2">
                    <input type="text" placeholder="Your Subject...." />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message...."></textarea>
                </div>
                <div className="btn-wrappeer">
                    <button className="btn btn-primary">Submit Message</button>
                </div>
            </form>
        </div>
    </section>
)

export default ContactInfo
