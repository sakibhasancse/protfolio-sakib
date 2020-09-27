import React, { useState } from 'react';

import './App.css';

import './SliderApp.js';


import 'font-awesome/css/font-awesome.min.css';



import hamberger from './images/hamberger.svg'

import myphoto from './images/undraw_coding_6mjf.svg'
import myphoto2 from './images/sakib.jpg'
import MobileNavigation from './components/navbar.component'

import brush from './images/api.svg'
import brush1 from './images/shopping-online.svg'
import brush2 from './images/vagueness.svg'
import brush3 from './images/programing.svg'
import brush4 from './images/404-error.svg'
import brush5 from './images/coding.svg'



import articleph1 from "./images/article-ph-1.png"



function App() {
  const [showMenu, setShowMenu] = useState(false)
  
    let  menu 

  if (showMenu) {
    menu = <MobileNavigation />
 
}
  
  
  return (
    
    <div className="site-main-wrapper" >
      <button className="hamberger" onClick={() =>setShowMenu(!showMenu)} >
        <img src={hamberger} alt="" />
      </button>
      {menu}
      
   


      <header onClick={() => setShowMenu(false)} >
        <div className="container">
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
              <img src={myphoto} alt="" />
            </div>

          </div>
        </div>
      </header>


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
              I am a full stack backend developer ,
             First I started working with JavaScript , now I work with nodejs, I love designing schema, error handling and problem solving, I always love learning new technology.
              I have Completed My Diploma in Computer Science Engineering from Model Institute of Science & Technology(MIST), Gazipur in  2020 </p>
            <div className="social">
              <a href="https://www.facebook.com/SakibHasanCse/" target="_blank"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com/SakibHasanCse" target="_blank"> <i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-google" target="_blank"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="https://github.com/Sakib-Hasan12" target="_blank"> <i className="fa fa-github"></i></a>
            </div>

          </div>
        </div>
      </section>

      <section id="skill" className="skills">
        <div className="container">
          <div className="section-heading">
            <div className="section-title">
              <span>My Skills</span>
            </div>
          </div>
          <p>In this section, my skills are being.</p>


          <div className="card-wrapper">
            <div className="card">
              <div className="graphic">
                <h4>Node JS</h4>
                <p>90%</p>
              </div>


            </div>
            <div className="card">

              <div className="graphic_2">
                <h4>Express JS</h4>
                <p>90%</p>
              </div>

            </div>
            <div className="card">


              <div className="graphic_3">
                <h4>MongoDB</h4>
                <p>90%</p>
              </div>

            </div>
            <div className="card">

              <div className="graphic_4">
                <h4>MySQL</h4>
                <p>75%</p>

              </div>

            </div>
            <div className="card">

              <div className="graphic_5">
                <h4>JavaScript</h4>
                <p>85%</p>
              </div>

            </div>
            <div className="card">

              <div className="graphic_6">
                <h4>Python</h4>
                <p>50%</p>
              </div>

            </div>
            <div className="card">

              <div className="graphic_7">
                <h4>Git</h4>
                <p>90%</p>
              </div>

            </div>
            <div className="card">

              <div className="graphic_8">
                <h4>Jest</h4>
                <p>70%</p>

              </div>

            </div>
            <div className="card">

              <div className="graphic_9">
                <h4>React</h4>
                <p>80%</p>

              </div>

            </div>
          </div>
        </div>
      </section>

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
              <h2>Graphic Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, autem.</p>
            </div>
          </div>
        </div>
      </section>




      <section id="portfolio" className="blog">
        <div className="container">
          <div className="section-title">
            <span>PORTFOLIO</span>
          </div>
          <h1 className="section-heading"></h1>
          <p className="content">In this section, some samples of my work are given </p>
          <div className="card-wrapper">
            <div className="card">
              <div className="img-wrapper">
                <img src={articleph1} alt="" />

              </div>
              <div className="card-content">
                <a className="title" href="">Excenge Mony</a>

                <p class="content">A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte</p>
                <i className="fa fa-github"> </i>
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </div>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src={articleph1} alt="" />

              </div>
              <div className="card-content">
                <a className="title" href="">Excenge Mony</a>

                <p class="content"> A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte</p>
                <i className="fa fa-github"></i><i class="fa fa-external-link" aria-hidden="true"></i>
              </div>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src={articleph1} alt="" />

              </div>
              <div className="card-content">
                <a className="title" href="">Excenge Mony</a>

                <p class="content">A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte

                            </p>
                <i className="fa fa-github"></i><i class="fa fa-external-link" aria-hidden="true"></i>
              </div>
            </div>   <div className="card">
              <div className="img-wrapper">
                <img src={articleph1} alt="" />

              </div>
              <div className="card-content">
                <a className="title" href="">Excenge Mony</a>

                <p class="content">A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte

                            </p>

                <i className="fa fa-github"></i>
                <i className="fa fa-github"></i>

              </div>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src={articleph1} alt="" />

              </div>
              <div className="card-content">
                <a className="title" href="">Excenge Mony</a>

                <p class="content">A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte

                            </p>
                <i className="fa fa-github"></i><i class="fa fa-external-link" aria-hidden="true"></i>
              </div>
            </div>   <div className="card">
              <div className="img-wrapper">
                <img src={articleph1} alt="" />

              </div>
              <div className="card-content">
                <a className="title" href="">Excenge Mony</a>

                <p class="content">A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte

                            </p>
                <i className="fa fa-github"></i><i class="fa fa-external-link" aria-hidden="true"></i>
              </div>
            </div>


          </div>

          <button className="btn btn-secondary">Load More</button>
        </div>
      </section>

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
              <h6>sakibhasan9641@gmail.com</h6>
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

      <footer>
        <img className="footer-logo" src="./images/logo-2.svg" alt="" />
        <h3>Follow Me On</h3>
        <div className="footer-socials">
          <a href="https://www.facebook.com/SakibHasanCse/" target="_blank"><i className="fa fa-facebook"></i></a>
          <a href="https://twitter.com/SakibHasanCse" target="_blank"> <i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-google" target="_blank"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="https://github.com/Sakib-Hasan12" target="_blank"> <i className="fa fa-github"></i></a>

        </div>
        <div className="copy-right">
          
          <i class="fa fa-code" aria-hidden="true"> Happy Coding </i> 
          
          
           </div>

      </footer>
    </div>



  );
}

export default App;
