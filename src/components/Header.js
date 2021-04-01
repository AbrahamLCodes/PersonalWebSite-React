import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className = "header-wraper">
            <div className = "main-info">
                <h1>Ingeniería Informática</h1>
                <Typed
                className = "typed-text"
                strings = {["Android, iOS e Híbrido", "Front-End y Back-End web" ,"Linux, Windows y MacOS", "Bases de datos SQL y NoSQL"]}
                typeSpeed = {40}
                backSpeed = {60}
                loop = {true}/>

            <a href = "#" className = "btn-main-offer">Contáctame</a>

            </div>
        </div>
    )
}

export default Header
