import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className = "header-wraper" id = "header">
            <div className = "main-info">
                <h1>Make the computers work for you</h1>
                <Typed
                className = "typed-text"
                strings = {["Android, iOS and Hybrid", "Front-End and Back-End web" ,"SQL and NoSQL databases", "Linux, MacOS and Windows"]}
                typeSpeed = {60}
                backSpeed = {70}
                loop = {true}/>
            <a href = "#footer" className = "btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
