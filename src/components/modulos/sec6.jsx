import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import "../../estilos/sec6.css"; // Importar CSS personalizado
import Img6 from "../../estilos/img/cumple.png";

const CajaConDosDivs = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      {/* Contenedor principal con dos cajas */}
      <div className="row caja-principal d-flex flex-wrap">
        {/* Caja izquierda */}
        <div className="col-md-6 col-12 caja-izquierda d-flex flex-column align-items-center justify-content-center">
          <p className="texto6">
            Fiestas dulces con el sabor de nuestros <span className="color-helado">helados</span>
          </p>
          <h4>Para que tu celebración sea todo un éxito, te recomendamos realizar tu reserva con al menos 3 a 4 horas de anticipación. Esto nos permitirá preparar todo lo necesario para que disfrutes de nuestros deliciosos helados y productos con la mejor calidad y presentación.</h4>
          <button className="btn btn-dark mt-3">Reservar ya</button>
        </div>

        {/* Caja derecha (se oculta en móviles) */}
        <div className="col-md-6 col-12 caja-derecha d-none d-md-flex align-items-center justify-content-center">
          <img src={Img6} className="imagen-responsiva" alt="Helado" style={{ height: '500px', width: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default CajaConDosDivs;
