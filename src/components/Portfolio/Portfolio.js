import React from 'react'

const Portfolio = () => {
    return (
        <section id="portfolio">
        <div className="row">
            <div className="twelve columns collapsed">
                <h1>Mira mis trabajos.</h1>            
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-01" title="">
                            <img src="images/portfolio/logo.png" alt="" />                            
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>KingstorePS4</h5>
                                <p>Ecommerce</p>
                                </div>
                            </div>
                            <div className="link-icon">
                                <i className="icon-plus" />
                            </div>
                            </a>
                        </div>
                    </div>
                                                                    
                </div>
            </div>

            <div id="modal-01" className="popup-modal mfp-hide">
                <img
                    className="scale-with-grid"
                    src="images/portfolio/modals/m-logo.png"                
                />
                <div className="description-box">
                    <h4>KingstorePS4</h4>
                    <p>
                        Ecommerce dedicado a la venta de juegos virtuales
                    </p>
                    <span className="categories">
                    <i className="fa fa-tag" />
                        Web Ecommerce 
                    </span>
                </div>
                <div className="link-box">
                    <a href="http://www.behance.net">Detalles</a>
                    <a className="popup-modal-dismiss">Cerrar</a>
                </div>
            </div>
           
        
         
           
          
        </div>
        </section>

    )
}

export default Portfolio;
