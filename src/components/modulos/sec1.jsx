//rfc - crear la estructura basica
import React from 'react'
import '../../estilos/sec1.css';
import logo from '../../estilos/img/sec1.png';
import text from '../../estilos/img/alkeem.png';


export default function sec1() {
  return (
    <>
    <div
      className="container-fluid p-4 border"
      style={{
        background:
          "linear-gradient(90deg, #EFD7EF 8%, #F5F9FC 39%, #F8EAE1 66%, #EAF8F9 91%)",
      }}
    >
      <div className="row align-items-center text-center">
        
        <div className="col-lg-6 col-md-6 col-sm-12 p-3 d-none d-sm-block">
          <img src={logo} alt="Descripción" className="img-fluid" />
        </div>
  
     
        <div className="col-lg-6 col-md-6 col-sm-12 p-3">
          <img src={text} alt="Descripción" className="img-fluid" />
        </div>
      </div>
    </div>
  </>
  
  )
}

