import React from 'react'

const ContactUs = () => {
    return (
        <section id="contact">
        <div className="row section-head">
            <div className="two columns header-col">
            <h1>
                <span>Contacto.</span>
            </h1>
            </div>
            <div className="ten columns">
            <p className="lead">
                Contacto.
            </p>
            </div>
        </div>
        <div className="row">
            <div className="eight columns">
            
            <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                <div>
                    <label htmlFor="contactName">
                    Nombre <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue=""
                        size={35}
                        id="contactName"
                        name="contactName"
                    />
                </div>
                <div>
                    <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                    </label>
                    <input
                    type="text"
                    defaultValue=""
                    size={35}
                    id="contactEmail"
                    name="contactEmail"
                    />
                </div>
                <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                    type="text"
                    defaultValue=""
                    size={35}
                    id="contactSubject"
                    name="contactSubject"
                    />
                </div>
                <div>
                    <label htmlFor="contactMessage">
                    Mensaje <span className="required">*</span>
                    </label>
                    <textarea
                    cols={50}
                    rows={15}
                    id="contactMessage"
                    name="contactMessage"
                    defaultValue=""
                    />
                </div>
                <div>
                    <button className="submit">Enviar mensaje</button>
                    <span id="image-loader">
                    <img src="images/loader.gif" />
                    </span>
                </div>
                </fieldset>
            </form>
            <div id="message-warning"> Error! </div>
            
            <div id="message-success">
                <i className="fa fa-check" />
                Tu mensaje fue enviado!
                <br />
            </div>
            </div>
            <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
                <h4>Dirección y Teléfono</h4>
                <p className="address">
                Magin Suarez
                <br />
                Bahía Blanca <br />
                Pcia. Buenos Aires - Argentina
                <br />
                <span>+5492915741785</span>
                </p>
            </div>            
            </aside>
        </div>
        </section>

    )
}

export default ContactUs;
