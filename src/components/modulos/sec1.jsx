//rfc - crear la estructura basica
import React from 'react'
import '../../estilos/sec1.css';
import logo from '../../estilos/img/sec1.png';
import text from '../../estilos/img/alkeem.png';


export default function sec1() {
  return (
    <>
    <div className="container-fluid p-4 border">
      <div className="row align-items-center text-center">
        
        <div className="caja1 col-lg-6 col-md-6 col-sm-12 p-3 d-none d-md-block">
          <img src={logo} alt="Descripción" className="img-fluid" style={{ height: '500px', width: 'auto' }}/>
        </div>
  
     
        <div className="caja2 col-lg-6 col-md-6 col-sm-12 p-3">
          <img src={text} alt="Descripción" className="img-fluid" />
        </div>

      </div>
    </div>
  </>
  
  )
}

