import React from 'react'
import logo from '../images/profilepage.jpg'
//rafce
const About = () => {
    return (
        <div className = "container about">
            <div class="row">
                <div class="col-12 col-md-6">
                    <img className = "logo-about" src = {logo} alt = "Logo..."/> 
                </div>
                <div class="col-12 col-md-6 about-description">
                    <h3>Acerca de mí</h3>
                    <p>¡Hola! Soy Abraham, Actual pasante de Ingeniería Informática del Instituto Tecnológico de Chihuahua II. Soy un 
                desarrollador Full-Stack Jr. Mi especialidad son las Apps Móviles, sin embargo, también tengo la versatilidad
                de poder desarrollar Software para Desktop y para Web, con su respectiva Base de Datos y su Back-End según los requerimientos. Soy muy adaptable a los cambios y a las tecnologías 
                con las cuales se tenga que trabajar y sobre todo, autodidácta. Me he dado la tarea de comprender todas estas áreas antes de salir de la Ingeniería
                porque reconozco la evolución, la exigencia y la disciplina que requiere la industria global, especialmente la de México.</p>
                </div>
            </div>
        </div>
    )
}

export default About
