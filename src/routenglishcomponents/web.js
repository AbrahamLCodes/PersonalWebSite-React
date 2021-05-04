import React from 'react'

import Navbar from '../generalenglishcomponents/NavbarEN'
import Footer from '../generalenglishcomponents/FooterEN'

import ReactSVG from '../images/react.svg'
import HtmlSVG from '../images/html.svg'
import BootstrapSVG from '../images/bootstrap.svg'
import CssSVG from '../images/css.svg'

import NodejsSVG from '../images/nodejs.svg'
import GoSVG from '../images/go.svg'

const web = () => {
    return (
        <div>
            <Navbar />
            <div className="desarrolloweb">
                <div className="container">
                    <h2>Web development</h2>
                    <p>
                    Web development is possibly the future of Software in general. 
                    Cloud computing has taken on great importance in the global digital market, 
                    its popularity and preference far above local systems or mobile applications. 
                    I am a full-stack Jr web developer, capable of building a distributed web system with the technologies that I master. 
                    I invite you to see how I work in the Web area.
                    </p>
                    <h3>Front-End</h3>
                    <p>
                    Front-End is everything that the user can see. The graphical interface, the user experience, buttons, colors, transitions, styles, fonts, forms, 
                    tables, lists, all kinds of visual components and their behavior. In the slides below you can see what technologies I use to create web solutions 
                    in the Front-End area.
                    </p>
                </div>
                <div className="container-fluid">
                    <div id="carouselExampleControls" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner carousel-front">
                            <div className="carousel-item active">
                                <div className=" row">
                                    <div className="d-flex justify-content-end col col-6">
                                        <img className="carousel-item-mainimgs" src={HtmlSVG} />
                                    </div>
                                    <div className="d-flex justify-content-start col col-6">
                                        <img className="carousel-item-mainimgs" src={ReactSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>Programming framework</h4>
                                    <p>
                                    ReactJs is the Javascript Framework that I use to develop and build graphical interfaces for the web. With this Framework 
                                    I manipulate the HTML content of a page in a programmatic and segmented way for easier maintenance. 
                                    If the project requires it, I can adapt to other frameworks such as Angular or Vue. This website is made with ReactJS.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className=" row ">
                                    <div className="d-flex justify-content-end col col-6">
                                        <img className="carousel-item-mainimgs" src={CssSVG} />
                                    </div>
                                    <div className="d-flex justify-content-start col col-6">
                                        <img className="carousel-item-mainimgs" src={BootstrapSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>Style framework</h4>
                                    <p>
                                    With Bootstrap I design web pages with excellent presentation and responsive, that is, adaptable to computer screens, 
                                    laptops, tablets or phones. Also, I use CSS properties to meet needs that Bootstrap couldn't or would conflict with. 
                                    I adapt to other css style Frameworks such as Materialize or Foundation. This website is made with Bootstrap, you can verify that it actually works for computer, tablet and cell phone screens.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <h3>Back-End</h3>
                    <p>
                    Back-End is everything that the user does not see, everything that happens behind 
                    the user interface such as: Operations to the database, the management of information 
                    through data structures, consumption of web services, the architecture of the API with its functions, among others. I
                    n the section below you can see what technologies I master for the development of this area.
                    </p>
                </div>
                <div className="container-fluid">
                    <div id="carouselExampleControls" className="carousel slide carousel-container" data-interval="false">
                        <div className="carousel-inner carousel-back">
                            <div className="carousel-item active">
                                <div className=" row">
                                    <div className="d-flex justify-content-end col col-6">
                                        <img className="carousel-item-mainimgs" src={NodejsSVG} />
                                    </div>
                                    <div className="d-flex justify-content-start col col-6">
                                        <img className="carousel-item-mainimgs white-background" src={GoSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>Back-End Languages</h4>
                                    <p>
                                    With NodeJs or Golang I develop modules and functions for server-side operations such as: 
                                    Responses, Requests, Routing, Operations to the database, APIs, Middlewares, among others. 
                                    With NodeJS I master the express framework while with GoLang I master the Echo framework.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default web
