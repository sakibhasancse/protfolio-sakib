import React from 'react'
import 'font-awesome/css/font-awesome.min.css';



function MobileNavigation() {
   



    return (
   
     
      <div className="mobile-nav open">
           
        <div className="information">

                <i class="fa fa-superpowers supericon" aria-hidden="true"></i>
                
                <a href="/">Sakib</a> <br/>
                

          <p>WEB DEVELOPER</p>
        </div>
        <ul>

          <li><a href="#about">About</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#servicess">Servicess</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
          
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="mob-footer">
          <div className="social">
                    <a href="https://www.facebook.com/SakibHasanCse/" target="_blank"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/SakibHasanCse" target="_blank"> <i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google" target="_blank"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/Sakib-Hasan12" target="_blank"> <i className="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    )
}
export default MobileNavigation