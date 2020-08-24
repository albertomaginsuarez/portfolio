import React from 'react'

const Certification = ({title,sitio,fecha}) => {
    return (
        
        <div className="row item">
            <div className="twelve columns">
                <h3>{title}</h3>
                <p className="info">
                    {sitio} <span>•</span>
                    <em className="date">{fecha}</em>
                </p>
            </div>
        </div>
            
        
    )
}

export default Certification;
