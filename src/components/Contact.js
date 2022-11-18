
import React from 'react';
import '../styles/contact.css';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLaptop, faTornado, faTwitter  } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
      <div>
        <body className='body-contacto'>
         <div className='container bgcontact  py-5 mx-auto'> 
              <div className='row align-items-stretch'>
                  <div className='row m-0 flex-row justify-content-between h-75'>
                      <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                          <div className='container justify-content-center align-items-center d-flex mapa'>
                              <iframe class="mapa mt-3"
                                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3348.3570491657824!2d-60.65922018439898!3d-32.94158147896277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1656623430770!5m2!1ses!2sar"
                                  width="300" height="300" allowfullscreen="" loading="lazy"
                                  referrerpolicy="no-referrer-when-downgrade"></iframe>
                          </div>
                      </div>
  
                      
                      <div className='col-12 col-md-6 d-flex flex-column justify-content-center mt-5'>
                          <div className='row align-items-stretch'>
                              <h3 className='titulo-contacto'>CONTACTO</h3>
                              <form action="https://formspree.io/f/maykqzbb" method="post">
                                  <h4>AGREGAR FORMULARIO</h4>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>   
  
          </body>
              
              
              
                                 
      
      </div>
    );
  };
  
  export default Contact;
  