import React from 'react'

const Footer = () => {
    return (
        <footer>
            <img className="footer-logo" src="./images/logo-2.svg" alt="" />
            <h3>Follow Me On</h3>
            <div className="footer-socials">
                <a href="https://www.facebook.com/SakibHasanCse/" target="_blank"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/SakibHasanCse" target="_blank"> <i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google" target="_blank"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/sakibhasancse" target="_blank"> <i className="fa fa-github"></i></a>

            </div>
            <div className="copy-right">
                <i class="fa fa-code" aria-hidden="true"> Happy Coding </i>
            </div>
        </footer>
    )
}

export default Footer
