import React from 'react'

import Navbar from '../generalenglishcomponents/NavbarEN'
import Footer from '../generalenglishcomponents/FooterEN'

import MySqlSVG from '../images/mysql.svg'
import PostgreSVG from '../images/postgresql.svg'
import DerbySVG from '../images/derby.svg'
import SQLiteSVG from '../images/sqlite.svg'

import MongoSVG from '../images/mongodb.svg'

const basesarqui = () => {
    return (
        <div>
            <Navbar />
            <div className="bases-arqui">
                <div className="container-fluid">
                    <div className="container">
                        <h2>Database and Architecture</h2>
                        <p>
                            Part of being full-stack involves having knowledge about information management
                            using computer tools and how to structure a system with which we can access
                            to that information according to protocols (Architectures) preferably already established. I invite you to see what type of Databases
                            and I manage architectures.
                        </p>
                        <h3>Databases</h3>
                        <p>My strong point in databases is the SQL type (Relational), 2 of the Apps that I have in the Playstore
                        they have implemented a database made in SQLite; I also handle the NoSQL type
                        (Non-relational). I have implemented both types within Web, Mobile and Desktop projects; I know how to recognize
                        occasions where using one might be more convenient than using the other. in the
                        slides below there is more information about how I work with these 2 databases, I invite you to
                        take a look at it.
                        </p>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner carousel-bd">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className=" row">
                                        <div className="d-flex justify-content-center col col-3">
                                            <img className="carousel-item-secondaryimgs" src={MySqlSVG} />
                                        </div>
                                        <div className="d-flex justify-content-center col col-3">
                                            <img className="carousel-item-secondaryimgs white-background" src={PostgreSVG} />
                                        </div>
                                        <div className="d-flex justify-content-center col col-3">
                                            <img className="carousel-item-secondaryimgs white-background" src={SQLiteSVG} />
                                        </div>
                                        <div className="d-flex justify-content-center col col-3">
                                            <img className="carousel-item-secondaryimgs white-background" src={DerbySVG} />
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <h4>SQL databases</h4>
                                    <p>
                                        I use the language and the SQL database environment for the structured and orderly management of the
                                        information. I model and generate a SQL database according to the modeling requirements that
                                        the information I need, I can also manage the same information in existing databases.
                                        I know how to implement this type of database in the Desktop, Mobile and Web area, in an embedded or distributed way.
                                        MySQL, PostgreSQL, SQLite and Apache Derby are the SQL database management systems that I handle.
                                    </p>
                                </div>

                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-secondaryimg white-background" src={MongoSVG} alt="Android" />
                                </div>
                                <div className="container">
                                    <h4>NoSQL Databases</h4>
                                    <p>
                                        I can use the essential operations to create a database and execute all
                                        the operations necessary to manage the information within a NoSQL database.
                                        I have implemented this type of database in web projects, they are easier to work with than the
                                        relational with projects in JS. With the MongoDB database system I can work with databases of this type.
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
                        <h2>Architecture & models</h2>
                        <p>
                            When developing a Software for both the client and the server side
                            It is advisable to follow protocols for its construction.
                            I master very popular architectures and design patterns used in the global industry. Check in the
                            slides below which architectures and models I dominate in both areas of the Software.
                    </p>
                    </div>

                    <div className="container-fluid">
                        <div id="carouselExampleControls2" className="carousel slide carousel-container" data-interval="false">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner carousel-arqui">
                                <div className="carousel-item active">

                                    <div className="container">
                                        <h3>MVC y MVVC</h3>
                                        <h4>Software architecture patterns</h4>
                                        <p>
                                            I adapt to systems that already have this type of architecture pattern implemented,
                                            a good percentage of projects already have them implemented or are being developed that way.
                                            If the system I was going to work with does not have some kind of order or architecture, I can
                                            restructure it so that the code is readable, neat, and easy to maintain.
                                        </p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="container">
                                        <h3>REST</h3>
                                        <h4>Architecture for APIs</h4>
                                        <p>
                                            I use REST architecture with various Back-End technologies such as NodeJS, Go or Java.
                                            I adapt and develop within the area of ​​APIs or Middlewares that have this type of architecture to manipulate
                                            information and perform operations to a local or remote database, as the case may be.
                                    </p>
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
            </div>
            <Footer />
        </div>
    )
}

export default basesarqui
