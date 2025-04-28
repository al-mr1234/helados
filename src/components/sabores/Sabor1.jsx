    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    import '../../estilos/Sabot1.css';
    import Sabor from '../../estilos/img/sabore1.png';
    import Sabor2 from '../../estilos/img/sabor2.png';

    export default function Sabor1() {
    return (
        <div className="container-fluid p-4 position-relative" id="sabor1">
        {/* Imagen del lado izquierdo */}
        <div className="position-absolute start-0 bottom-0 d-none d-md-block">
            <img
            src={Sabor}
            alt="Helados variados"
            className="img-fluid"
            />
        </div>

        {/* Contenido central */}
        <div className="text-center z-index-2">
            <h1>Todos nuestros</h1>
            <h1>Sabores de <span className='highlight'>helados</span></h1>
        </div>

        {/* Imagen del lado derecho */}
        <div className="position-absolute end-0 top-0 d-none d-md-block">
            <img
            src={Sabor2}
            alt="Helados variados"
            className="img-fluid"
            />
        </div>
        </div>
    );
    }
