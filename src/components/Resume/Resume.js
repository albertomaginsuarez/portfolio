import React from 'react';
import RowItem from './RowItem';
import Certification from './Certification';

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
                    Comence mis estudios en el año 2007, 
                    me gradue de la carrera de Ingeniería en Sistemas de Computación y
                    a principios del 2015 adquiri mi título como ingeniero.
                </p>
                </div>
            </div>
            </div>
        </div>

        <div className="row work">
            <div className="three columns header-col">
            <h1>
                <span>Trabajo</span>
            </h1>
            </div>
            <div className="nine columns main-col">   
            <RowItem
                title="Programador Freelance"
                position="Fullstack developer"
                fecha="Julio de 2020 - Actualidad"
                secciones={[
                    "- ReactJS",
                    "- VueJS",
                    "- NodeJS",
                    "- MongoDB",
                    "- PHP",
                    "- Python",
                    "- Laravel"                    
                ]}
            /> 
            <RowItem
                title="Cooperativa Obrera Ltda. de Consumo y Vivienda"
                position="Fullstack Developer"
                fecha="Agosto de 2017 - Junio de 2020"
                secciones={[
                    "- PHP",
                    "- Python",
                    "- Codeigniter",
                    "- Web2Py",
                    "- Bootstrap",
                    "- Manejo de bases de datos MySQL",
                    "- Trabajo en equipo"                    
                ]}
            />  
            <RowItem
                title="Casa Humberto Lucaioli S.A."
                position="Fullstack Developer Web"
                fecha="Enero de 2017 - Octubre de 2017"
                secciones={[
                    "- Programador Web Ecommerce",
                    "- PHP",
                    "- Codeigniter",
                    "- Javascript",
                    "- Bootstrap",
                    "- Administrador de MySQL"                    
                ]}
            /> 
            <RowItem
                title="Jotafí S.A."
                position="Oracle SQL Developer"
                fecha="Septiembre de 2016 - Enero de 2017"
                secciones={[
                    "- SQL Developer"
                ]}
            />
            <RowItem
                title="Qualydat - Profertil S.A."
                position="Sysadmin"
                fecha="Mayo de 2015 - Agosto de 2016"
                secciones={[
                    "- Administración de servidores Linux",
                    "- Administración de servidores Windows Server",
                    "- MySQL",                                        
                    "- Apache",
                ]}
            />                                                                                 
            </div>
        </div>

        <div className="row certificaciones">
            <div className="three columns header-col">
                <h1>
                    <span>Certificaciones</span>
                </h1>
            </div>
            <div className="nine columns main-col">
                <Certification 
                    title="React Native Expo - App para Android y ios"
                    fecha="Octubre 2020"
                    sitio="Udemy"
                    index="6U"
                />
                <Certification 
                    title="React Avanzado (Hooks - MERN)"
                    fecha="Septiembre 2020"
                    sitio="Udemy"
                    index="7U"
                />
                <Certification 
                    title="CSS FlexBox Layout - Inicial"
                    fecha="Febrero 2020"
                    sitio="Udemy"
                    index="2U"
                />
                <Certification 
                    title="React.JS - Inicial"
                    fecha="Diciembre 2019"
                    sitio="Udemy"
                    index="3U"
                />   
                <Certification 
                    title="Angular 8 - Desde cero hasta profesional"
                    fecha="Febrero 2020"
                    sitio="Udemy"
                    index="4U"
                />
                <Certification 
                    title="Programación .NET - MVC"
                    sitio="Hexacta"
                    fecha="2015"
                    index="5U"
                />
            </div>
        </div>

        <div className="row skill">
            <div className="three columns header-col">
                <h1>
                    <span>Skills</span>
                </h1>
            </div>
            <div className="nine columns main-col">
           
                <div className="bars">
                    <ul className="skills">
                    <li>
                        <span className="bar-expand php" />
                        <em>PHP</em>
                    </li>
                    <li>
                        <span className="bar-expand react" />
                        <em>ReactJS</em>
                    </li>
                    <li>
                        <span className="bar-expand python" />
                        <em>Python</em>
                    </li>
                    <li>
                        <span className="bar-expand mongo" />
                        <em>MongoDB</em>
                    </li>
                    <li>
                        <span className="bar-expand node" />
                        <em>NodeJS</em>
                    </li>
                    <li>
                        <span className="bar-expand javascript" />
                        <em>Javascript</em>
                    </li>
                    <li>
                        <span className="bar-expand mysql" />
                        <em>MySQL</em>
                    </li>
                    </ul>
                </div>            
            </div>
        </div>

        </section>
    )
}

export default Resume;
