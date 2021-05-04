import React from 'react'

import Navbar from '../generalenglishcomponents/NavbarEN'
import Footer from '../generalenglishcomponents/FooterEN'

import AppleIcon from '../images/apple.png'
import AndroidIcon from '../images/android.png'

import RNIcon from '../images/react.svg'
import KotlinSVG from '../images/kotlin.svg'
import JavaSVG from '../images/java.svg'
import SwiftSVG from '../images/swift.svg'
import CsSVG from '../images/cs.svg'

import WindowsSVG from '../images/windows.svg'
import MacOsIcon from '../images/macosiconhd.png'
import GnuIcon from '../images/gnu.png'

const mobiledesktop = () => {
    return (
        <div>
            <Navbar />
            <div className="mobile-desktop">
                <div className="container-fluid">
                    <div className="container">
                        <h2>Mobile & Desktop development</h2>
                        <p>
                            The efficiency and performance of native applications
                            is huge; More complex tasks can be accomplished in less time and with less and expensive equipment
                            The specific development of the platform within a company will ensure
                            an efficient, optimal and durable system. I invite you to know the areas and technologies of my domain.
                        </p>
                        <h3>Mobile Development</h3>
                        <p>I have a specialty in Development for Mobile Apps, it is the field where I have more experience; I develop, improve and optimize
                        Apps of all kinds for Android, iOS and also in a hybrid way. Slide on the slides below to see what technologies I use in each
                        one of the platforms.
                        </p>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner carousel-mobile">
                            <div className="carousel-item active">
                                    <div className="d-flex justify-content-center">
                                        <img className="carousel-item-mainimg" src={AndroidIcon} alt="Android" />
                                    </div>
                                    <div className=" row">
                                        <div className="d-flex justify-content-end col col-6">
                                            <img className="carousel-item-secondaryimgs" src={KotlinSVG} />
                                        </div>
                                        <div className="col col-6">
                                            <img className="carousel-item-secondaryimgs" src={JavaSVG} />
                                        </div>
                                    </div>
                                    <div className="container">
                                        <h4>Native Android Development</h4>
                                        <p>Although Java is the most popular, the official technology for Android development is Kotlin. Google
                                        is working hard for Android developers to switch to Kotlin. I domain both technologies; Java is the
                                        language that I have more mastered, Kotlin also mastered it since it is just an improved version of Java. With these technologies
                                        I can develop, optimize and improve native Android Applications.
                                        </p>
                                    </div>
                                
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={AppleIcon} alt="Apple" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-secondaryimg" src={SwiftSVG} />
                                </div>
                                <div className="container">
                                    <h4>iOS Native Development</h4>
                                    <p>Swift is now the official technology for the development of Apps for iOS, I handle this language with total fluency, very similar to Kotlin on Android.
                                    To develop on iOS you need to be within the Apple development ecosystem, I have all the necessary equipment and knowledge
                                    to develop on this platform.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className=" row">
                                    <div className="d-flex justify-content-end col col-6">
                                        <img className="carousel-item-mainimgs" src={AndroidIcon} />
                                    </div>
                                    <div className="col col-6">
                                        <img className="carousel-item-mainimgs" src={AppleIcon} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-secondaryimg" src={RNIcon} alt="Android" />
                                </div>
                                <div className="container">
                                    <h4>Hybrid Development</h4>
                                    <p>Hybrid in mobile development means that the same code works for several platforms; in this case,
                                    with React Native I can develop Apps for both Android and iOS in a single project. Although hybrid apps
                                    are not usually as complex and optimal as the native ones, they are ideal for the rapid and economic development of multiplatform mobile systems.
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
                    <div className="container">
                        <h3>Desktop Development</h3>
                        <p>
                        I develop, optimize and improve Desktop systems for the 3 main platforms on the market: Windows, MacOS and GNU / Linux.
                        <br /><br />
                            Although the current trend is to develop systems based on web technologies, local systems
                            still have several advantages that make us think more than once if it really is convenient to develop everything with web technologies.
                            Infrastructure cost reduction, better user experience, greater security, more optimal systems, direct communication with Office, are some of the advantages
                            that these types of systems offer over those that are based on the web. Slide on the slides below to see what technologies I use in each
                            one of the platforms.
                        </p>
                    </div>

                    <div id="carouselControls2" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselControls2" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselControls2" data-slide-to="1"></li>
                            <li data-target="#carouselControls2" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner carousel-so">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={WindowsSVG} alt="Android" />
                                </div>
                                <div className=" row">
                                    <div className="d-flex justify-content-end col col-4">
                                        <img className="carousel-item-secondaryimgs" src={KotlinSVG} />
                                    </div>
                                    <div className="d-flex justify-content-center col col-4">
                                        <img className="carousel-item-secondaryimgs" src={JavaSVG} />
                                    </div>
                                    <div className="col col-4">
                                        <img className="carousel-item-secondaryimgs" src={CsSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>Windows Systems</h4>
                                    <p>
                                        With 88.70% global market share, Windows definitely ranks within the
                                        # 1 most popular operating systems in the world. Kotlin, Java and C # are 3 of the most used technologies
                                        for the development of systems in Windows, I use these 3 technologies and I can adapt to any Framework that you
                                        company needs.
                                    </p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={MacOsIcon} alt="Android" />
                                </div>
                                <div className=" row">
                                    <div className="d-flex justify-content-end col col-4">
                                        <img className="carousel-item-secondaryimgs" src={SwiftSVG} />
                                    </div>
                                    <div className="d-flex justify-content-center col col-4">
                                        <img className="carousel-item-secondaryimgs" src={CsSVG} />
                                    </div>
                                    <div className="col col-4">
                                        <img className="carousel-item-secondaryimgs" src={JavaSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>MacOS Systems</h4>
                                    <p>
                                        Despite the fact that Swift is the official development language for MacOS (as in iOS) in the Desktop area development is different. while swift
                                        is the official language and the most optimal for this platform, that does not prevent you from doing the same with other technologies that are not exactly
                                        exclusive to Apple. I develop systems for MacOS with Swift, also with Java and C # since these technologies are cross-platform.
                                    </p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={GnuIcon} alt="Android" />
                                </div>
                                <div className=" row">
                                    <div className="d-flex justify-content-end col col-6">
                                        <img className="carousel-gnu-imgs" src={KotlinSVG} />
                                    </div>
                                    <div className="col col-6">
                                        <img className="carousel-gnu-imgs" src={JavaSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>GNU Systems</h4>
                                    <p>
                                    GNU (mistakenly called Linux), has projects such as Ubuntu or Mint that allow to
                                        common users to use this operating system. I develop systems for this platform with Java and Kotlin since they are multiplatform technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselControls2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselControls2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default mobiledesktop