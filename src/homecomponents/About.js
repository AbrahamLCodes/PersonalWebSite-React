import React from 'react'
import logo from '../images/profileultimate.png'
//rafce
const About = () => {
    return (
        <div className = "container about" id = "about">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div className = "d-flex column flex-column">
                        <img className = "logo-about" src = {logo} alt = "Logo..."/> 
                        <p className = "name-about">Abraham Luna Cázares</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 about-description">
                    <h3>Acerca de mí</h3>
                    <p>Actual practicante de Ingeniería Informática del Instituto Tecnológico de Chihuahua II. <br/><br/>
                    Desarrollador Full-Stack JR con especialidad en desarrollo de aplicaciones para dispositivos móviles, poseo versatilidad
                    para desarrollar la mayoría de los módulos que un sistema pudiera necesitar según los requerimientos; autodidácta, adaptable a los cambios y a las tecnologías 
                    con las cuales se tenga que trabajar. Reconozco la evolución, la exigencia y la disciplina que requiere la industria global;
                    busco que mi conocimiento sea un activo para tu empresa.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
