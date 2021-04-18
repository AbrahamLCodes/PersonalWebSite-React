import React from 'react'

import Navbar from '../generalcomponents/Navbar'
import Footer from '../generalcomponents/Footer'

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
            <MobileDesktop />
        </div>
    )
}

const MobileDesktop = () => {
    return (
        <div>
            <Navbar />
            <div className="mobile-desktop">
                <div className="container-fluid">
                    <div className="container">
                        <h2>Desarrollo para móviles y desktop</h2>
                        <p>
                            La eficiencia y rendimiento que las aplicaciones nativas poseen
                            es grandísima. Se pueden realizar tareas más complejas en menor tiempo y con equipos menos
                            costosos. El desarrollo específico para una plataforma dentro de una empresa garantizará
                            un sistema eficiente, óptimo y durable. Te invito a que veas qué áreas y qué tecnologías domino en cada
                            una de estas.
                        </p>
                        <h3>Desarrollo móvil</h3>
                        <p>Tengo una especialidad en Desarrollo para Apps Móviles, es el campo en donde tengo más experiencia. Puedo desarrollar, mejorar y optimizar
                        Apps de todo tipo para Android, iOS y también de manera híbrida. Desliza en las diapositivas de abajo para que veas qué tecnologías uso en cada
                        una de las plataformas.
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
                                    <h4>Desarrollo nativo Android</h4>
                                    <p>Aunque Java es el más popular, la tecnología oficial para desarrollo en Android es Kotlin. De hecho, Google
                                    se está esforzando en que los desarrolladores Android se cambien a Kotlin. Domino ambas tecnologías, Java es el
                                    lenguaje que tengo más dominado mientras que Kotlin es la versión mejorada de Java. Con estas tecnologías
                                    puedo desarrollar, optimizar y mejorar Aplicaciones nativas Android.
                                    </p>
                                </div>

                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={AppleIcon} alt="Android" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-secondaryimg" src={SwiftSVG} />
                                </div>
                                <div className="container">
                                    <h4>Desarrollo nativo iOS</h4>
                                    <p>Swift es ahora la tecnología oficial para el desarrollo de Apps para iOS, manejo este lenguaje con total fluidez, de hecho es muy parecido a Kotlin en Android.
                                    Para desarrollar en iOS se necesita estar dentro del ecosistema de desarrollo de Apple, poseo todo el equipo y conocimiento  necesario
                                    para desarrollar en esta plataforma.
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
                                    <h4>Desarrollo Híbrido</h4>
                                    <p>Híbrido en desarrollo móvil significa que un mismo código sirve para varias plataformas. En este caso,
                                    con React Native puedo desarrollar Apps tanto para Android como para iOS en un solo proyecto. Aunque las Apps híbridas
                                    no suelen sar tan complejas y óptimas como las nativas, son ideales para el desarrollo rápido y económico de sistemas móviles multiplataforma.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Siguiente</span>
                        </a>
                    </div>
                    <div className="container">
                        <h3>Desarrollo Desktop</h3>
                        <p>
                            Puedo desarrollar, optimizar y mejorar sistemas Desktop para las 3 principales plataformas del mercado: Windows, MacOS y GNU/Linux.
                        <br/><br/>
                            A pesar de que la tendencia actual es desarrollar sistemas basados en tecnologías web, los sistemas locales
                            siguen teniendo varias ventajas que hacen pensarse más de una vez si en verdad conviene desarrollar todo con tecnologías web.
                            Reducción de costos de infraestructura, mejor experiencia de usuario, mayor seguridad, sistemas más óptimos, comunicación directa con Office, son algunas de las ventajas
                            que este tipo de sistemas ofrecen sobre los que están basados en la web. Desliza en las diapositivas de abajo para que veas qué tecnologías uso en cada
                            una de las plataformas.
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
                                    <h4>Sistemas Windows</h4>
                                    <p>
                                        Con un 88.70% de cuota de mercado global, Windows definitivamente se posiciona dentro del
                                        primer puesto de sistemas operativos más populares en el mundo. Kotlin, Java y C# son 3 de las tecnologías más usadas
                                        para el desarrollo de sistemas en Windows, me manejo bien en estas 3 tecnologías y puedo adaptarme a cualquier Framework que tu
                                        empresa necesite.
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
                                    <h4>Sistemas MacOS</h4>
                                    <p>
                                        A pesar de que Swift es el lenguaje oficial de desarrollo para MacOS (Al igual que en iOS) las cosas en el Desktop son un tanto distintas. si bien Swift
                                        es el lenguaje oficial y el más óptimo para esta plataforma, eso no impide que puedas hacer lo mismo con otras tecnologías que no precisamente son
                                        exclusivas de Apple. Puedo desarrollar sistemas en MacOS con Swift, pero también puedo usar Java y C# puesto que estas tecnologías son multiplataforma.
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
                                    <h4>Sistemas GNU</h4>
                                    <p>
                                        Erróneamente llamado Linux (Sería como llamarle Darwin a MacOS), GNU cuenta con proyectos como Ubuntu o Mint que permiten a los usuarios
                                        comunes utilizar este sistema operativo. Puedo desarrollar sistemas complejos para esta plataforma con Java y Kotlin ya que son tecnologías multiplataforma.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselControls2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselControls2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Siguiente</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default mobiledesktop