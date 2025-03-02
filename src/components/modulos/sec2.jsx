import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import "../../estilos/sec2.css"; // Importar CSS personalizado
import Img1 from "../../estilos/img/sec2.png";

const CajaConDosDivs = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      {/* Contenedor principal con dos cajas */}
      <div className="row caja-principal d-flex flex-wrap">
        {/* Caja izquierda */}
        <div className="col-md-6 col-12 caja-izquierda d-flex flex-column align-items-center justify-content-center">
          <p className="texto-helado">
            Más que <span className="color-helado">helados</span>, creamos sonrisas
          </p>
          <button className="btn btn-dark mt-3">Clic Aquí</button>
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
