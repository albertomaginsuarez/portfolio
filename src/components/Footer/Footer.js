import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className="row">
            <div className="twelve columns">
            <ul className="social-links">
                <li>
                <a href="https://www.facebook.com/amaginsuarez">
                    <i className="fa fa-facebook" />
                </a>
                </li>                              
                <li>
                <a href="https://linkedin.com/in/alberto-magin-suarez-3a8247b4/">
                    <i className="fa fa-linkedin" />
                </a>
                </li>
                <li>
                <a href="https://www.instagram.com/maginsuarez/">
                    <i className="fa fa-instagram" />
                </a>
                </li>                               
            </ul>
            <ul className="copyright">
                <li>© Copyright 2020 Magin Suarez</li>
                <li>
                Diseñado por{" "}
                <a title="Styleshout" href="#">
                    Magin Suarez
                </a>
                </li>
            </ul>
            </div>
            <div id="go-top">
            <a className="smoothscroll" title="Volver arriba" href="#home">
                <i className="icon-up-open" />
            </a>
            </div>
        </div>
        </footer>

    )
}

export default Footer;
