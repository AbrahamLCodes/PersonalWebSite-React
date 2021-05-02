import React from 'react'

import Navbar from '../generalcomponents/Navbar'
import Footer from '../generalcomponents/Footer'

import HardwareSVG from '../images/hardware.svg'
import SoftwareSVG from '../images/software.svg'
import ServerSVG from '../images/server.svg'

const soporte = () => {
    return (
        <div >
            <Navbar />
            <div className = "soporte">
                <div className="container">
                    <h2>Soporte Técnico</h2>
                    <p>
                        Soy técnico en soporte y mantenimiento a equipo de cómputo. Tengo conocimiento técnico que abarca 
                        desde las computadoras personales hasta los servidores de red. Puedo brindar mis servicios en tu empresa
                        dando soporte y ayuda a los diferentes departamentos o áreas que cuenten con equipos de cómputo, equipos de red 
                        o cableado. En las diapositivas de abajo puedes ver que áreas domino y que conocimiento tengo en cada una de ellas.
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
                                        <li className = "">Mantenimiento preventivo y correctivo a equipo de cómputo.</li>
                                        <li className = "">Configuración de salas y cuartos para el uso óptimo de los equipos.</li>
                                        <li className = "">Limpieza de periféricos.</li>
                                        <li className = "">Mantenimiento a impresoras.</li>
                                        <li className = "">Ensamble de cómputo.</li>
                                        <li className = "">Actualización constante de las tecnologías emergentes (Intel, AMD, Radeon, NVIDIA, ARM).</li>
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
                                        <li>Respaldos de información.</li>
                                        <li>Instalación y configuración de sistemas operativos Windows y GNU/Linux.</li>
                                        <li>Instalación y configuración de paquetería de oficina (Office 2007-2019).</li>
                                        <li>Instalación y configuración de Software preventivo (Antivirus, Firewalls, Adblocks).</li>
                                        <li>Soporte a distancia mediante Software remoto.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={ServerSVG} />
                                </div>
                                <div className="container">
                                    <h4>Redes</h4>
                                    <ul>
                                        <li>Mantenimiento preventivo y correctivo a equipo de red (Servidores, Switches, Racks).</li>
                                        <li>Cableado de red (Ethernet y sus categorías).</li>
                                        <li>Instalación y configuración de software para servidor.</li>
                                        <li>Administración de redes LAN</li>
                                        <li>Mantenimiento a redes locales.</li>
                                    </ul>
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
                </div>
                <div className="container">
                    <h2>Redes y dispositivos</h2>
                    <p>
                        Tengo conocimiento en configuración, diseño y administración de redes de distintos tipos. Además configuro la seguridad y el funcionamiento básico 
                        en dispositivos CISCO para implementarlos en las redes con las que 
                        se esté trabajando. En las diapositivas de abajo hay más información acerca de que tipo de redes y dispositivos gestiono. 
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
                                    <h4>Redes</h4>
                                    <p>Tengo conocimiento en el diseño de redes principalmente LAN, sé identificar topologías y analizar 
                                        que tipo de solución de red es la más óptima según sea el caso. Esta es una lista de tipo de redes
                                        que diseño y configuro:
                                    </p>
                                    <ul>
                                        <li> Subneteo. </li>
                                        <li> LANs. </li>
                                        <li> PANs (Con dispositivos tipo impresora, scanners, etc).</li>
                                        <li> MANs.</li>     
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-mainimg" src={SoftwareSVG} />
                                </div>
                                <div className="container">
                                    <h4>Dispositivos CISCO</h4>
                                    <p>
                                        Los principales dispositivos con los que he trabajado son: Switch, Router y Servidor, combinado 
                                        con Modems del proveedor de internet. Puedo crear configuraciones básicas, de seguridad y además, configuración 
                                        de protocolos de red CISCO, tales como:
                                    </p>
                                    <ul>
                                        <li>VLANs.</li>
                                        <li>VTPs.</li>
                                        <li>STPs.</li>
                                        <li>Soporte a distancia mediante Software remoto.</li>
                                        <li>Enrutamiento estático.</li>
                                        <li>Enrutamiento dinámico (Vector-Distancia, RipV2, EIGRP y OSPF).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Siguiente</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Se le pone la clase desarrollo web al footer para que elimine el margen de arriba sin
            necesidad de hacer un desorden con los li de la clase soporte */}
            <Footer/>
        </div>

    )
}

export default soporte
