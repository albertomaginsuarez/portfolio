import React from 'react'

const Testimonials = () => {
    return (
        <section id="testimonials">
        <div className="text-container">
            <div className="row">
            <div className="two columns header-col">
                <h1>
                <span>Testimonios</span>
                </h1>
            </div>
            <div className="ten columns flex-container">
                <div className="flexslider">
                <ul className="slides">
                    <li>
                    <blockquote>
                        <p>
                        Estamos muy conformes por el trabajo realizado por parte de Magin, quedamos muy satisfechas porque nos supo entender a la perfección el estilo de la página web que queríamos realizar. Además siempre estuvo disponible para evacuar todas nuestras consultas, actuando siempre de manera muy profesional. Muy recomendable.
                        </p>
                        <cite>Braszka Maria</cite>
                    </blockquote>
                    </li>                    
                </ul>
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}

export default Testimonials;
