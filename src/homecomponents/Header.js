import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className = "header-wraper" id = "header">
            <div className = "main-info">
                <h1>Que la tecnología trabaje para ti</h1>
                <Typed
                className = "typed-text"
                strings = {["Android, iOS e Híbrido", "Front-End y Back-End web" ,"Bases de datos SQL y NoSQL", "Sistemas Windows, MacOS y GNU"]}
                typeSpeed = {40}
                backSpeed = {60}
                loop = {true}/>
            <a href = "#footer" className = "btn-main-offer">Contáctame</a>
            </div>
        </div>
    )
}

export default Header
