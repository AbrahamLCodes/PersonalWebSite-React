import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className = "header-wraper" id = "header">
            <div className = "main-info">
                <h1>Make the computers work for you</h1>
                <Typed
                className = "typed-text"
                strings = {["Android, iOS & Hybrid", "Front-End & Back-End web" ,"Bases de datos SQL y NoSQL", "Linux, Windows & MacOS"]}
                typeSpeed = {40}
                backSpeed = {60}
                loop = {true}/>
            <a href = "#footer" className = "btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
