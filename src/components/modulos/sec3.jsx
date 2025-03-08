import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import "../../estilos/sec3.css"; // Importar CSS personalizado
import Img1 from "../../estilos/img/sec2.png";

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
          <p className="titulo3">
            Explora la variedad de <span className="color-helado">helados</span> que tenemos para ti </p>
            <h4>Sumérgete en un mundo de sabores únicos y texturas irresistibles. Desde lo clásico hasta lo sorprendente, nuestra variedad de helados está hecha para deleitar a todos los gustos. ¡Encuentra tu favorito y disfruta cada momento al máximo!</h4>
          <button className="btn btn-dark mt-3">Productos</button>
        </div>

      
      </div>
    </div>
  );
};

export default CajaConDosDivs;

