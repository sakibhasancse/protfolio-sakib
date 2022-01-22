import React from 'react'
import articleph1 from "../assets/images/article-ph-1.png"

const Protfolio = () => (
    <section id="portfolio" className="blog">
        <div className="container">
            <div className="section-title">
                <span>PORTFOLIO</span>
            </div>
            <h1 className="section-heading">{''}</h1>
            <p className="content"></p>
            <div className="card-wrapper">
                <div className="card">
                    <div className="img-wrapper">
                        <img src={articleph1} alt="" />
                    </div>
                    <div className="card-content">
                        <a className="title" href="/">Excenge Mony</a>
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
                        <a className="title" href="/">Excenge Mony</a>
                        <p class="content"> A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte</p>
                        <i className="fa fa-github"></i><i class="fa fa-external-link" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="card">
                    <div className="img-wrapper">
                        <img src={articleph1} alt="" />

                    </div>
                    <div className="card-content">
                        <a className="title" href="/">Excenge Mony</a>
                        <p class="content">A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte
                            </p>
                        <i className="fa fa-github"></i><i class="fa fa-external-link" aria-hidden="true"></i>
                    </div>
                </div>   <div className="card">
                    <div className="img-wrapper">
                        <img src={articleph1} alt="" />
                    </div>
                    <div className="card-content">
                        <a className="title" href="/">Excenge Mony</a>
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
                        <a className="title" href="/">Excenge Mony</a>
                        <p class="content">A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte
                            </p>
                        <i className="fa fa-github"></i><i class="fa fa-external-link" aria-hidden="true"></i>
                    </div>
                </div>   <div className="card">
                    <div className="img-wrapper">
                        <img src={articleph1} alt="" />

                    </div>
                    <div className="card-content">
                        <a className="title" href="/">Excenge Mony</a>
                        <p class="content">A Application is Collection of Exchenge  Your Doller Or Tk Buye Card Or Bd Accounte
                            </p>
                        <i className="fa fa-github"></i><i class="fa fa-external-link" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <button className="btn btn-secondary">Load More</button>
        </div>
    </section>
)

export default Protfolio
