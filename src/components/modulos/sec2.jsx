import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import "../../estilos/sec2.css"; // Importar CSS personalizado
import Img1 from "../../estilos/img/sec2.png";
import Typewriter from 'typewriter-effect';

const CajaConDosDivs = () => {
  return (
    
    <div className="container-fluid1 d-flex flex-column justify-content-center align-items-center">
      {/* Contenedor principal con dos cajas */}
      <div className="row caja-principal d-flex flex-wrap">
        {/* Caja izquierda */}
        <div className="col-md-6 col-12 caja-izquierda d-flex flex-column align-items-center justify-content-center">
        <span className='maquina'>
        <Typewriter 
  onInit={(typewriter) => {
    typewriter
      .typeString('<span class="highlight">Felicidad</span> servida </br>en cada helado.')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Más que <span class="highlight">Helados,</span> </br>creamos sonrisas.')
      .start();
  }}
/>
              </span>
          <div data-tooltip="¡Pidelo ya!🍦" class="button">
          <div class="button-wrapper">
            <div class="text">Pedir</div>
    <span class="icon">
      <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>
</div>


        </div>

        {/* Caja derecha (se oculta en móviles) */}
        <div className="col-md-6 col-12 caja-derecha d-none d-md-flex align-items-center justify-content-center">
          <img src={Img1} className="imagen-responsiva" alt="Helado" style={{ height: '500px', width: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default CajaConDosDivs;
