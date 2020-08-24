import React from 'react'
import Job from './Job';

const Portfolio = () => {
    return (
        <section id="portfolio">
        <div className="row">
            <div className="twelve columns collapsed">
                <h1>Mira mis trabajos.</h1>            
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    <Job
                        href="modal-01" 
                        src="portfolio/images/portfolio/logo.png"
                        h5="KingstorePS4"
                        p="Ecommerce"
                        descripcion="Página web Ecommerce dedicada a la venta de juegos virtuales"
                        link="https://kingstoreps4.herokuapp.com"
                        href_m="portfolio/images/portfolio/modals/m-logo.png"
                    />
                    <Job
                        href="modal-02" 
                        src="portfolio/images/portfolio/abogada.jpeg"
                        h5="BraszkaMerkel"
                        p="Portfolio de Abogadas"
                        descripcion="Estudio Jurídico de Maria Braszka y Romina Merkel "
                        link="https://portfolio-bice-two.now.sh/bra_mer"
                        href_m="portfolio/images/portfolio/modals/m-abogada.jpeg"
                    />                                                                                     
                </div>
            </div>
                      
        </div>
        
        </section>

    )
}

export default Portfolio;
