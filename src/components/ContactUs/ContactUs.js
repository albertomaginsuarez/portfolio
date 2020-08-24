import React, {useState} from 'react';

import { useForm } from '../../hooks/useForm';
import emailjs from 'emailjs-com';
const ContactUs = () => {
    const API_PATH = 'http://localhost:3000/inc/sendEmail.php';
    
    const [show, setShow] = useState(false);
    const [ formValues, handleInputChange ] = useForm({
        nombre: '',
        email: '',
        subject: '',
        mensaje: ''
    });

    const { nombre, email, subject, mensaje } = formValues;    

    const handleFormSubmit  = (event) => {
        
        event.preventDefault();
        console.log(formValues); 
        emailjs.send('default_service','template_WWPJEKCP', formValues, 'user_Dv3N4jiVHrKdgVvcF5u7h')
		.then((response) => {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 2000);				  
		}, (err) => {
				   console.log('FAILED...', err);
		});
    }

    return (
        <section id="contact">
        <div className="row section-head">
            <div className="two columns header-col">
            <h1>
                <span>Envíame un mensaje!</span>
            </h1>
            </div>
            <div className="ten columns">
            <p className="lead">
                Contacto
            </p>
            </div>
        </div>
        <div className="row">
            <div className="eight columns">
            
            <form action="#">
                <fieldset>
                <div>
                    <label htmlFor="contactName">
                    Nombre <span className="required">*</span>
                    </label>
                    <input
                        type="text"                                         
                        name="nombre"
                        placeholder=""
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder=""        
                        name="email"
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                        type="text"
                        placeholder=""                   
                        name="subject"
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="contactMessage">
                    Mensaje <span className="required">*</span>
                    </label>
                    <textarea
                        placeholder=""                         
                        name="mensaje"
                        defaultValue=""
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <button type='submit' className="submit" onClick={e => handleFormSubmit(e)}>Enviar mensaje</button>                    
                    {
                        show &&
                        <span id="image-loader"> 
                            <img src="images/loader.gif" alt=""/>
                        </span>
                    }
                    
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
