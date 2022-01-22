import React from 'react'

const ContactInfo = () => (
    <section id="contact" className="contact">
        <div className="container">
            <div className="section-title">
                <span>CONTACTS</span>
            </div>
            <h1 className="section-heading">{''}</h1>
            <p></p>
            <div className="card-wrapper">
                <div className="card">
                    <h1>Phone</h1>
                    <span className="text-white">+8801763553147</span>
                </div>
                <div className="card">
                    <h1>Email</h1>
                    <span className="text-white">me.sakib20@gmail.com</span>
                </div>
                <div className="card">
                    <h1>Social</h1>
                    <span className="text-white">Twitter/Facebook-@SakibHasanCse</span>
                </div>
                <div className="card">
                    <h1>Location</h1>
                    <span className="text-white">Dhaka,Gazipur-1700,Bangladesh </span>
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
