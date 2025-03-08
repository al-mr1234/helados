import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import "../../estilos/sec5.css"; // Importar CSS personalizado
import Img1 from "../../estilos/img/helado5.png";

const CajaConDosDivs = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      {/* Contenedor principal con dos cajas */}
      <div className="row caja-principal d-flex flex-wrap">

  {/* Caja derecha (se oculta en móviles) */}
  <div className="col-md-6 col-12 caja-derecha d-none d-md-flex align-items-center justify-content-center">
          <img src={Img1} className="imagen-responsiva" alt="Helado" style={{ height: '500px', width: 'auto' }} />
        </div>

        {/* Caja izquierda */}
        <div className="col-md-6 col-12 caja-izquierda d-flex flex-column align-items-center justify-content-center">
          <p className="texto-elegante">
          ¡No te pierdas nuestros <span className="color-helado">Descuentos!</span>  </p>
            <h4>Aprovecha las ofertas que tenemos para ti y disfruta de tus helados favoritos al mejor precio. Visita nuestro apartado de descuentos y encuentra promociones irresistibles. ¡El momento perfecto para consentirte está aquí!</h4>
          <button className="btn btn-dark mt-3">Descuentos</button>
        </div>

      
      </div>
    </div>
  );
};

export default CajaConDosDivs;
