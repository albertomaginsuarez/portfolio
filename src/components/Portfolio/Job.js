import React from 'react'

const Job = ({href,src,h5,p,descripcion,link,href_m}) => {

    return (
        <div data-aos="fade-right">
            <div className="columns portfolio-item" data-aos="fade-right">
                <div className="item-wrap">
                    <a href={`${"#"+href}`} title="">
                    <img src={src} alt="" />                            
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>{h5}</h5>
                        <p>{p}</p>
                        </div>
                    </div>
                    <div className="link-icon">
                        <i className="icon-plus" />
                    </div>
                    </a>
                </div>
                <div id={`${href}`} className="popup-modal mfp-hide">
                    <img
                        className="scale-with-grid"
                        src={`${href_m}`}                
                    />
                    <div className="description-box">
                        <h4>{h5}</h4>
                        <p>{descripcion}</p>
                        <span className="categories">
                        <i className="fa fa-tag" />
                            {p} 
                        </span>
                    </div>
                    <div className="link-box">
                        <a href={link} target="_blank">Detalles</a>
                        <a className="popup-modal-dismiss">Cerrar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job;
