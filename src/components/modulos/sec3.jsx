import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import "../../estilos/sec3.css"; // Importar CSS personalizado
import Img1 from "../../estilos/img/sec3.png";

const CajaConDosDivs = () => {
  return (
    <div className="container-fluid1 d-flex flex-column justify-content-center align-items-center">
      {/* Contenedor principal con dos cajas */}
      <div className="row caja-principal d-flex flex-wrap">

  {/* Caja derecha (se oculta en móviles) */}
  <div className="col-md-6 col-12 caja-derecha d-none d-md-flex align-items-center justify-content-center">
          <img src={Img1} className="imagen-responsiva" alt="Helado" style={{ height: '900px', width: 'auto',marginTop: '140px',marginLeft:'-20px' }} />
        </div>

        {/* Caja izquierda */}
        <div className="col-md-6 col-12 caja-izquierda d-flex flex-column align-items-center justify-content-center">
          <p className="titulo3">
            Explora la variedad de <span className="color-helado">helados</span> que tenemos para ti </p>
            <h4>Sumérgete en un mundo de sabores únicos y texturas irresistibles. Desde lo clásico hasta lo sorprendente, nuestra variedad de helados está hecha para deleitar a todos los gustos. ¡Encuentra tu favorito y disfruta cada momento al máximo!</h4>
            <div data-tooltip="¡Explora!🍦" class="button">
                <div class="button-wrapper">
                  <div class="text">Helados</div>
          <span class="icon">
            <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
      </svg>
          </span>
        </div>
      </div>
        </div>

      
      </div>
    </div>
  );
};

export default CajaConDosDivs;

