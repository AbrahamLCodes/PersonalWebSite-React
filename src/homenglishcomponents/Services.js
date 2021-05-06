import React from 'react'
import WebIcon from '../images/red-mundial.png'
import MobileIcon from '../images/gadget.png'
import SupportIcon from '../images/technical-support.png'
import DbIcon from '../images/database-storage.png'
import IsoLogo from '../images/iso.png'

import { Link } from "react-router-dom"

const Services = () => {
    return (
        <div className="services" id="services">
            <h2>Services</h2>
            <div className="container-fluid d-flex justify-content-around">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-5">
                    <div className="col mb-4 d-flex align-items-stretch">
                        <div className="card text-center border-dark">
                            <img src={MobileIcon} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Mobile & Desktop development</h5>
                                <p class="card-text">With Kotlin, Java, Swift, React Native and C # I can develop native and hybrid Apps
                                    for iOS and Android. Also, cross-platform Apps for Windows, MacOS and GNU.
                                </p>
                                <Link to={"/mobiledesktop-en"} class="btn mt-auto btn-info card-btn">More info</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4 d-flex align-items-stretch">
                        <div className="card text-center border-dark">
                            <img src={DbIcon} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Databases & Architecture</h5>
                                <p class="card-text">With MySql, PostgreSql and Mongo I can manage the information of existing or developing systems. In the cloud or on premises.
                                </p>
                                <Link to={"/basesarqui-en"} class="btn mt-auto btn-info card-btn">More info</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4 d-flex align-items-stretch">
                        <div className="card text-center border-dark">
                            <img src={WebIcon} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Web Development</h5>
                                <p class="card-text">With ReactJS and Bootstrap for the Front-End and NodeJs, C #, Java or Go for the Back-End
                                                        I can develop or manage Web solutions.</p>
                                <Link to={"/desarrolloweb-en"} class="btn mt-auto btn-info card-btn">More info</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4 d-flex align-items-stretch">
                        <div className="card text-center border-dark">
                            <img src={SupportIcon} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Technical Support & Networks</h5>
                                <p class="card-text">I have knowledge in networks and technical support to provide support, help and connectivity in the different departments
                                                        of your company.
                                </p>
                                <Link to={"/soporte-en"} class="btn mt-auto btn-info card-btn">More info</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4 d-flex align-items-stretch mx-auto">
                        <div className="card text-center border-dark">
                            <img src={IsoLogo} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Others </h5>
                                <p class="card-text">I have knowledge as a Quality Inspector in the industrial and robotics sector at the microcontroller level.</p>
                                <Link to={"/otros-en"} class="btn mt-auto btn-info card-btn">More info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

