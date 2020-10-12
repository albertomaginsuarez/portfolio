import React from 'react';

const About = () => {    
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-esp" src="images/yo.png" alt="" />
                </div>
                <div className="nine columns main-col">
                    <h2>Sobre mí</h2>
                    
                    <ul>   
                        <li>- Me llamo Magin Suarez</li>    
                        <li>- Tengo 31 años</li>
                        <li>- Soy de Bahía Blanca, Pcia. Buenos Aires, Argentina</li>        
                        <li>- Ingeniero en sistemas de computación</li>
                        <li>- Graduado en la Universidad Nacional del Sur</li>
                        <li>- Actualmente soy un programador Freelance</li> 
                        <li>- Amante de las tecnologías</li>                     
                    </ul>                 
                    
                    <div className="row">
                        <div className="columns contact-details">
                        <h2>Detalles</h2>
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
                            <a href="/portfolio/pdf/cv.pdf" className="button" download="cv_maginsuarez.pdf">
                            <i className="fa fa-download" />
                            Descargar CV
                            </a>
                        </p>
                        </div>
                    </div>
                
                </div>
                
            </div>
        </section>
    )
}

export default About;