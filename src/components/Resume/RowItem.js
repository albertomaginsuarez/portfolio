import React from 'react'

const RowItem = ({title,position,fecha,secciones}) => {
    return (
        <div className="row item animate__animated animate__backInLeft">
            <div className="twelve columns">
            <h3>{title}</h3>
            <p className="info">
                {position} <span>•</span>{" "}
                <em className="date">{fecha}</em>
            </p>
            <ul>
            {secciones.map(elem =>{
                return <li key={elem}>{elem}</li>;
            })}
            </ul>          
            </div>
        </div>
    )
}

export default RowItem;