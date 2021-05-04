import React from 'react'

import Navbar from '../generalenglishcomponents/NavbarEN'
import Footer from '../generalenglishcomponents/FooterEN'

import HardwareSVG from '../images/hardware.svg'
import SoftwareSVG from '../images/software.svg'
import ServerSVG from '../images/server.svg'

const soporte = () => {
    return (
        <div >
            <Navbar />
            <div className = "soporte">
                <div className="container">
                    <h2>Technical Support</h2>
                    <p>
                    I am a computer support and maintenance technician. I have technical knowledge ranging from personal computers to network servers. I can provide my services 
                    in your company giving support and help to the different departments or areas that have computer equipment, network equipment or cabling.
                     In the slides below you can see what areas I dominate and what knowledge I have in each of them.
                    </p>
                    <br/>
                    <br/>
                </div>
                <div className="container-fluid">
                    <div id="carouselExampleControls" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner carousel-soporte">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={HardwareSVG} />
                                </div>
                                <div className="container">
                                    <h4>Hardware</h4>
                                    <ul className = "">
                                        <li className = "">Preventive and corrective maintenance to computer equipment.</li>
                                        <li className = "">Configuration of rooms and rooms for optimal use of equipment.</li>
                                        <li className = "">Peripheral cleaning.</li>
                                        <li className = "">Maintenance to printers.</li>
                                        <li className = "">Computational assembly.</li>
                                        <li className = "">Constant update of emerging technologies (Intel, AMD, Radeon, NVIDIA, ARM).</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={SoftwareSVG} />
                                </div>
                                <div className="container">
                                    <h4>Software</h4>
                                    <ul>
                                        <li>Information backups.</li>
                                        <li>Installation and configuration of Windows and GNU / Linux operating systems.</li>
                                        <li>Installation and configuration of office packages (Office 2007-2019).</li>
                                        <li>Installation and configuration of preventive software (Antivirus, Firewalls, Adblocks).</li>
                                        <li>Remote support through remote software.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={ServerSVG} />
                                </div>
                                <div className="container">
                                    <h4>Networks</h4>
                                    <ul>
                                        <li>Preventive and corrective maintenance to network equipment (Servers, Switches, Racks).</li>
                                        <li>Network cabling (Ethernet and its categories).</li>
                                        <li>Installation and configuration of server software.</li>
                                        <li>LAN network management.</li>
                                        <li>Maintenance to local networks.</li>
                                    </ul>
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
                    <h2>Networks and Devices</h2>
                    <p>
                    I have knowledge in configuration, design and administration of networks of different types. 
                    In addition, I configure the security and basic operation in CISCO devices to implement them in the networks with which they are working. 
                    In the slides below there is more information about what kind of networks and devices I manage.
                    </p>
                    <br/><br/>
                </div>
                <div className="container-fluid">
                    <div id="carouselExampleControls2" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls2" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls2" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner carousel-red">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={HardwareSVG} />
                                </div>
                                <div className="container">
                                    <h4>Networks</h4>
                                    <p>I have knowledge in the design of mainly LAN networks, 
                                        I know how to identify topologies and analyze what type of network solution is the most optimal as the case may be. 
                                        This is a list of types of networks that I design and configure:
                                    </p>
                                    <ul>
                                        <li> Subnetting.</li>
                                        <li> LANs. </li>
                                        <li> PANs (With printer type devices, scanners, etc.).</li>
                                        <li> MANs.</li>     
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={SoftwareSVG} />
                                </div>
                                <div className="container">
                                    <h4>CISCO devices</h4>
                                    <p>
                                    The main devices I have worked with are: Switch, Router and Server, 
                                    combined with modems from the internet provider. I can create basic configurations, security and also, configuration of CISCO network protocols, such as:
                                    </p>
                                    <ul>
                                        <li>VLANs.</li>
                                        <li>VTPs.</li>
                                        <li>STPs.</li>
                                        <li>Remote support through remote software.</li>
                                        <li>Static routing.</li>
                                        <li>Dynamic routing (Distance-Vector, RipV2, EIGRP and OSPF).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>

    )
}

export default soporte
