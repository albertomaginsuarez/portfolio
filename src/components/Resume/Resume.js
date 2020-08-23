import React from 'react'

const Resume = () => {
    return (
        <section id="resume">
        {/* Education
        ----------------------------------------------- */}
        <div className="row education">
            <div className="three columns header-col">
            <h1>
                <span>Educación</span>
            </h1>
            </div>
            <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                <h3>Universidad Nacional del Sur</h3>
                <p className="info">
                    Ingeniero en sistemas de computación <span>•</span>{" "}
                    <em className="date">17 de Abril del 2015</em>
                </p>
                <p>
                    La Universidad Nacional del Sur, usualmente referida por sus siglas, «UNS», es una universidad pública argentina con sede central en Bahía Blanca, al sur de la Provincia de Buenos Aires.
                    Comence mis estudios en el año 2007, me gradue de la carrera de Ingeniería en Sistemas de Computación y
                    a principios del 2015 adquiri mi título.
                </p>
                </div>
            </div>{" "}
            {/*
            <div className="row item">
                <div className="twelve columns">
                <h3>School of Cool Designers</h3>
                <p className="info">
                    B.A. Degree in Graphic Design <span>•</span>{" "}
                    <em className="date">March 2003</em>
                </p>
                <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
                    velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                    Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                    ornare odio. Sed non mauris vitae erat
                </p>
                </div>
            </div>{" "}
            */}
            {/* item end */}
            </div>{" "}
            {/* main-col end */}
        </div>

        <div className="row work">
            <div className="three columns header-col">
            <h1>
                <span>Trabajo</span>
            </h1>
            </div>
            <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                <h3>Qualydat - Profertil S.A.</h3>
                <p className="info">
                    Sysadmin <span>•</span>{" "}
                    <em className="date">Mayo de 2015 - Agosto de 2016</em>
                </p>
                <p>
                    Me desempeñe como administrador de sistemas, manejo de servidores como Windows server,
                    Linux.
                </p>
                </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
                <div className="twelve columns">
                <h3>Super Cool Studio</h3>
                <p className="info">
                    UX Designer <span>•</span>{" "}
                    <em className="date">March 2007 - February 2010</em>
                </p>
                <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
                    velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                    Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                    ornare odio. Sed non mauris vitae erat
                </p>
                </div>
            </div>{" "}
            {/* item end */}
            </div>{" "}
            {/* main-col end */}
        </div>{" "}
        {/* End Work */}
        {/* Skills
        ----------------------------------------------- */}
        <div className="row skill">
            <div className="three columns header-col">
            <h1>
                <span>Skills</span>
            </h1>
            </div>
            <div className="nine columns main-col">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
            </p>
            <div className="bars">
                <ul className="skills">
                <li>
                    <span className="bar-expand photoshop" />
                    <em>Photoshop</em>
                </li>
                <li>
                    <span className="bar-expand illustrator" />
                    <em>Illustrator</em>
                </li>
                <li>
                    <span className="bar-expand wordpress" />
                    <em>Wordpress</em>
                </li>
                <li>
                    <span className="bar-expand css" />
                    <em>CSS</em>
                </li>
                <li>
                    <span className="bar-expand html5" />
                    <em>HTML5</em>
                </li>
                <li>
                    <span className="bar-expand jquery" />
                    <em>jQuery</em>
                </li>
                </ul>
            </div>
            {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
        </div>

        </section>
    )
}

export default Resume;
