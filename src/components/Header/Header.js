import React from 'react'
const Header = () => {  
    return (

        <header id="home">
            <nav id="nav-wrap" className="animate__animated animate__fadeInDownBig">
                <a className="mobile-btn" href="#nav-wrap" title="Mostrar">
                    Mostrar
                </a>
                <a className="mobile-btn" href="" title="Ocultar">
                    Ocultar
                </a>
                <ul id="nav" className="nav">
                <li className="current">
                    <a className="smoothscroll" href="#home">
                    Inicio
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#about">
                    Sobre mí
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#resume">
                    Resumen
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#portfolio">
                    Trabajos
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#testimonials">
                    Testimonios
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#contact">
                    Contacto
                    </a>
                </li>
                </ul>{" "}
                {/* end #nav */}
            </nav>{" "}
            {/* end #nav-wrap */}
            <div className="bg">

            </div>
            <div className="row banner">
                <div className="banner-text">
                <h1 className="responsive-headline animate__animated animate__bounce ing">Soy Magin Suarez.</h1>
                <h3 className="animate__animated animate__fadeInLeft">
                    Soy un <span className="ing">ingeniero en sistemas</span>,{" "}
                    <span className="ing">programador</span> web, actualmente trabajo de forma independiente, de forma <span className="ing">freelance</span>,{" "}
                    amante de las tecnologías, para ver más detallado mi portfolio{" "} 
                    <a className="smoothscroll" href="#about">
                    comienza ahora
                    </a>
                    {" "}y para leer más{" "}
                    <a className="smoothscroll" href="#about">
                    acerca de mí
                    </a>
                    .
                </h3>
                <hr />
                <ul className="social animate__animated animate__jackInTheBox">
                    <li>
                    <a href="https://www.facebook.com/amaginsuarez" target="_blank">
                        <i className="fa fa-facebook" />
                    </a>
                    </li>                                       
                    <li>
                    <a href="https://linkedin.com/in/alberto-magin-suarez-3a8247b4/" target="_blank">
                        <i className="fa fa-linkedin" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/maginsuarez/" target="_blank">
                        <i className="fa fa-instagram" />
                    </a>
                    </li>                    
                </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                <i className="icon-down-circle" />
                </a>
            </p>
        </header>

    )  
}

export default Header;