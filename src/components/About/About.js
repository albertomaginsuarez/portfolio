import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                <img className="profile-pic" src="images/yo.png" alt />
                </div>
                <div className="nine columns main-col">
                <h2>Sobre mí</h2>
                <p>
                    <ul>   
                    <li>- Me llamo Magin Suarez</li>    
                    <li>- Tengo 31 años</li>
                    <li>- Soy de Bahía Blanca, Pcia. Buenos Aires, Argentina</li>        
                    <li>- Ingeniero en sistemas de computación 💻</li>
                    <li>- Graduado en la Universidad Nacional del Sur</li>
                    <li>- Actualmente soy un programador Freelance</li> 
                    <li>- Amante de las tecnologías</li> 
                    <li>- Constantemente estoy adquiriendo nuevos conocimientos sobre nuevos lenguajes de programación</li>                    
                    </ul>                 
                </p>
                <div className="row">
                    <div className="columns contact-details">
                    <h2>Contacto detalles</h2>
                    <p className="address">
                        <span>Magin Suarez</span>
                        <br />
                        <span>
                        Bahía Blanca, Buenos Aires
                        <br />
                        Argentina
                        </span>
                        <br />
                        <span>+5492915741785</span>
                        <br />
                        <span>albertomaginsuarez@gmail.com</span>
                    </p>
                    </div>
                    <div className="columns download">
                    <p>
                        <a href="#" className="button">
                        <i className="fa fa-download" />
                        Descargar CV
                        </a>
                    </p>
                    </div>
                </div>{" "}
                {/* end row */}
                </div>{" "}
                {/* end .main-col */}
            </div>
        </section>
    )
}

export default About;