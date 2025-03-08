import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import "../../estilos/sec2.css"; // Importar CSS personalizado
import Img4 from "../../estilos/img/helado4.png";

const CajaConDosDivs = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      {/* Contenedor principal con dos cajas */}
      <div className="row caja-principal d-flex flex-wrap">
        {/* Caja izquierda */}
        <div className="col-md-6 col-12 caja-izquierda d-flex flex-column align-items-center justify-content-center">
          <p className="texto-helado">
            Todos nuestros sabores de <span className="color-helado">helados</span>
          </p>
          <h4>Descubre todos nuestros deliciosos sabores de helado y encuentra tu favorito. ¡Cada cucharada es una experiencia única</h4>
          <button className="btn btn-dark mt-3">Sabores</button>
        </div>

        {/* Caja derecha (se oculta en móviles) */}
        <div className="col-md-6 col-12 caja-derecha d-none d-md-flex align-items-center justify-content-center">
          <img src={Img4} className="imagen-responsiva" alt="Helado" style={{ height: '500px', width: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default CajaConDosDivs;
