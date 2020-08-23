import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className="row">
            <div className="twelve columns">
            <ul className="social-links">
                <li>
                <a href="">
                    <i className="fa fa-facebook" />
                </a>
                </li>
                <li>
                <a href="">
                    <i className="fa fa-twitter" />
                </a>
                </li>
                <li>
                <a href="">
                    <i className="fa fa-google-plus" />
                </a>
                </li>
                <li>
                <a href="">
                    <i className="fa fa-linkedin" />
                </a>
                </li>
                <li>
                <a href="">
                    <i className="fa fa-instagram" />
                </a>
                </li>
                <li>
                <a href="">
                    <i className="fa fa-dribbble" />
                </a>
                </li>
                <li>
                <a href="">
                    <i className="fa fa-skype" />
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
