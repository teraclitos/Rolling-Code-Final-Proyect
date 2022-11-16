import React from 'react';
import '../Styles/footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye, faLaptop, faTornado, faTwitter  } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div>
    <footer  className='mt-auto background-footer'>
    <div className='d-flex flex-column align-items-center'>
      <div className="row footer-contenido m-0 justify-content-center p-0 pt-4 text-white w-100">
        <div className="col-12 col-sm-6 col-md-3 p-2 mt-4 d-flex justify-content-center w-auto align-items-center m-2">
        {/* <Link to='/' className='m-0 p-0 d-flex flex-column align-items-center text-decoration-none'/>  */}
        <img    src='./logonaranja.png' width='100'  alt='logo'/> 
        </div>  
      <div className="col-12 col-sm-6 col-md-4 p-0 d-flex flex-column align-items-center">
      <div className=" w-50">
      <div className="row m-2 justify-content-center ">
      <h6 className="my-3 fw-bold text-center mt-5">REDES SOCIALES</h6>
        <div className="col-3 div-btn-redes">
        {/* agregar link a icono */}
         {/* <FontAwesomeIcon icon={faLaptop} />  */}
        </div>
        <div className="col-3 div-btn-redes">
        {/* agregar link a icono */}
        {/* <FontAwesomeIcon icon={faLaptop} /> */}
        </div>
        <div className="col-3 div-btn-redes">
        {/* agregar link a icono */}
        {/* <FontAwesomeIcon icon={faLaptop} /> */}
        </div>
        <div class="col-3 div-btn-redes">
        {/* agregar link a icono */}
        {/* <FontAwesomeIcon icon={faLaptop} /> */}
        </div>
      </div>
      </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 p-0 d-flex flex-column align-items-center">
      <div className="row m-2 justify-content-center">
      <h6 className="my-3 fw-bold text-center mt-5">CONTACTANOS</h6>
      <p className="text-center">Av. Siempre Vivas</p>
        </div>
       
        </div>
        <div className="col-xs-12 p-0 mt-4 copyright">
                <p className="m-0 my-2 text white text-center">COPYRIGHT© - GRUPO 2 - PROYECTO Rollingneta - 2022</p>
      </div>
      </div>
      
    </div>  
    </footer>
    
    
    </div>
  );
};

export default Footer;
