import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo1 from '../../estilos/img/productos/capricho1.png';
import Logo2 from '../../estilos/img/productos/capricho2.png';
import Logo3 from '../../estilos/img/productos/capricho3.png';
import '../../estilos/productos/productos.css';

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Mostrar 3 helados por slide como en tu foto
      slidesToScroll: 1,
      centerPadding: '0px', // Quita padding para que esté bien centrado
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2, // Para móviles 
          }
        }
      ]
    };
  
    const helados = [
      {
        nombre: "payaso Ice",
        imagen: Logo1, // Aquí solo guardas la variable
        fondo: "#7ec0d9" // Azul claro
      },
      {
        nombre: "Fiesta Boom",
        imagen: Logo2, 
        fondo: "#e297b2" // Rosado
      },
      {
        nombre: "Abeja cream",
        imagen: Logo3, 
        fondo: "#f9e08d" // amarillo
      },
     
    ];
  
    return (
      <div style={{ padding: '30px', background: 'linear-gradient(90deg, #EFD7EF 8%, #F5F9FC 39%, #F8EAE1 66%, #EAF8F9 91%)' }}>
        <h2 className="text-center mb-4" style={{ color: '#F83D8E' }}>Caprichos de peques</h2>
        <Slider {...settings}>
          {helados.map((producto, index) => (
            <div key={index}>
              <div className="helado-card" style={{
                backgroundColor: producto.fondo,
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '0 10px',
              }}>
                <img src={producto.imagen} alt={producto.nombre} style={{ maxHeight: '250px', objectFit: 'contain', marginBottom: '15px' }} />
                <h4 style={{ fontFamily: 'cursive', color: '#3c1e08' }}>{producto.nombre}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  