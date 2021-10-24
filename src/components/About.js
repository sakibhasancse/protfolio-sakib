import React from 'react';
import myphoto2 from '../assets/images/sakib.jpg'

const About = () => (
  <>
    <div className="section-title">
      <span >About Me</span>
    </div>

    <section id="about" className="about">
      <div className="container flex mobile-aboute items-center">
        <div className="flex-1">
          <img className="about-me-img" src={myphoto2} alt="" />
        </div>
        <div className="flex-1 mobile-aboute-center">
          <h3>Hello ! i'm Sakib Hasan</h3>
          <p>
            Over 3 years of IT industry experience with 2+ years of experience as a Web application developer. Experience in developing front & back-end applications. To work in a friendly, learning, and innovative environment to utilize my analytical and technical skills to make a glorious contribution to human development.
           </p>
          <div className="social">
            <a href="https://www.facebook.com/SakibHasanCse/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/SakibHasanCse" target="_blank" rel="noopener noreferrer"> <i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-google" target="_blank" rel="noopener noreferrer"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/Sakib-Hasan12" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  </>
)
export default About