import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Logo1 from '../../estilos/img/productos/especiales1.png';
import Logo2 from '../../estilos/img/productos/especial2.png';
import Logo3 from '../../estilos/img/productos/especial3.png';
import '../../estilos/productos/productos.css';

export default function EnhancedIceCreamSlider() {
  // Estado para controlar la apertura/cierre del modal
  const [modalOpen, setModalOpen] = useState(false);
  // Estado para almacenar el producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Estado para controlar la cantidad de productos
  const [quantity, setQuantity] = useState(1);

  const openModal = (producto) => {
    setSelectedProduct(producto);
    setQuantity(1); // Reset quantity when opening modal
    setModalOpen(true);
    // Bloquear el scroll del body cuando se abre el modal
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    // Restaurar el scroll del body cuando se cierra el modal
    document.body.style.overflow = 'auto';
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    console.log(`Añadido al carrito: ${quantity} unidades de ${selectedProduct.nombre}`);
    // Aquí puedes implementar la lógica real para añadir al carrito
    closeModal();
    // Mostrar notificación de éxito
    showNotification(`${quantity} ${selectedProduct.nombre} añadido al carrito!`);
  };

  // Estado y función para la notificación
  const [notification, setNotification] = useState({ show: false, message: '' });
  
  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  const helados = [
    {
      nombre: "Nieve Mágica",
      imagen: Logo1,
      descripcion: "Helado de vainilla con salsa de arándanos. Elaborado con ingredientes naturales de la más alta calidad. Ideal para momentos especiales y celebraciones. Disfruta de esta deliciosa combinación de sabores que deleitará tu paladar.",
      precio: "$17.999",
      rating: 4.7,
      color: "rgb(245, 228, 197)", // Light brown background
      tags: ["Sin gluten", "Natural"],
      ingredientes: "Leche, crema, azúcar, vainilla natural, arándanos, jarabe de arce"
    },
    {
      nombre: "Cereza Tentación",
      imagen: Logo2,
      descripcion: "Helado de fresa con salsa de cereza y chispas. Una explosión de sabor frutal con la dulzura perfecta de las cerezas frescas y la cremosidad del helado. Perfecto para los amantes de los sabores frutales.",
      precio: "$15.999",
      rating: 4.9,
      color: "rgb(136, 200, 246)", // Light blue background
      tags: ["Bestseller", "Frutal"],
      ingredientes: "Leche, crema, fresa natural, cerezas, azúcar, chocolate blanco"
    },
    {
      nombre: "ChocoLoco",
      imagen: Logo3,
      descripcion: "Helado de chocolate con salsa de caramelo y nueces. Una combinación irresistible para los amantes del chocolate. El contraste entre el chocolate intenso, el caramelo dulce y la textura crujiente de las nueces crea una experiencia única.",
      precio: "$18.999",
      rating: 4.8,
      color: "rgb(255, 213, 220)", // Light pink background
      tags: ["Nuevo", "Intenso"],
      ingredientes: "Leche, crema, cacao premium, azúcar, caramelo, nueces pecanas"
    },
    {
      nombre: "Menta Fresca",
      imagen: Logo1, // Reusing images for demo
      descripcion: "Helado de menta con trozos de chocolate. Una opción refrescante y deliciosa que combina la frescura de la menta con el sabor intenso del chocolate. Perfecto para los días calurosos o como postre después de una comida.",
      precio: "$16.999",
      rating: 4.5,
      color: "rgb(213, 242, 213)", // Light green background
      tags: ["Refrescante", "Clásico"],
      ingredientes: "Leche, crema, extracto de menta natural, azúcar, chocolate negro"
    },
    {
      nombre: "Frutilla Deluxe",
      imagen: Logo2,
      descripcion: "Helado de frutilla con trozos reales de fruta. Elaborado con frutillas frescas de temporada para obtener el sabor más auténtico y delicioso. Un clásico renovado que nunca pasa de moda.",
      precio: "$19.999",
      rating: 4.6,
      color: "rgb(255, 213, 220)", // Light pink background
      tags: ["Orgánico", "Con fruta real"],
      ingredientes: "Leche, crema, frutillas orgánicas, azúcar de caña, jugo de limón"
    },
  ];
  
  return (
    <div style={{ 
      padding: '40px 30px', 
      background: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      position: 'relative'
    }}>
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2 style={{ 
          color: '#E94A9F', 
          fontSize: '32px', 
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          margin: '0 0 5px 0'
        }}>
          Nuestros Helados Premium
        </h2>
        <p style={{ 
          color: '#666', 
          fontSize: '16px', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          Descubre nuestra selección de sabores artesanales elaborados con ingredientes naturales
        </p>
      </div>
      
      <Slider {...settings}>
        {helados.map((producto, index) => (
          <div key={index} className="slider-item-container" style={{ padding: '15px' }}>
            <div 
              onClick={() => openModal(producto)}
              style={{
                backgroundColor: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '450px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.05)',
                margin: '0 10px',
                cursor: 'pointer'
              }} 
              className="product-card-hover"
            >
              {/* Badge for bestsellers or new */}
              {producto.tags && producto.tags.includes("Bestseller") && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: '#F83D8E',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 2,
                }}>
                  BESTSELLER
                </div>
              )}
              {producto.tags && producto.tags.includes("Nuevo") && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: '#44d7f4',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 2,
                }}>
                  NUEVO
                </div>
              )}
              
              {/* Heart icon for favorites */}
              <div 
                onClick={(e) => {
                  e.stopPropagation(); // Evitar que se abra el modal al hacer clic en el corazón
                  console.log(`${producto.nombre} añadido a favoritos`);
                  // Implementar lógica para añadir a favoritos
                }}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  zIndex: 2,
                  cursor: 'pointer',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F83D8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              
              {/* Image section */}
              <div style={{ 
                padding: '30px',
                height: '220px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: producto.color,
                position: 'relative',
              }}>
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  style={{ 
                    maxHeight: '180px', 
                    objectFit: 'contain',
                    transition: 'transform 0.5s',
                    filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.1))',
                  }} 
                  className="product-image-hover"
                />
              </div>
              
              {/* Content section */}
              <div style={{ 
                padding: '25px', 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column',
                height: '230px',
                position: 'relative',
              }}>
                {/* Rating badge */}
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  backgroundColor: '#f8f8f8',
                  marginBottom: '10px',
                  width: 'fit-content',
                }}>
                  <span style={{ color: '#F8B500', marginRight: '3px' }}>★</span>
                  <span style={{ fontSize: '14px' }}>{producto.rating}/5</span>
                </div>
                
                <h4 style={{ 
                  margin: '0 0 10px 0', 
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '20px',
                }}>{producto.nombre}</h4>
                
                <p style={{ 
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.5',
                  margin: '0 0 15px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  flex: '1'
                }}>{producto.descripcion}</p>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '15px',
                }}>
                  <span style={{ 
                    color: '#E94A9F', 
                    fontWeight: 'bold',
                    fontSize: '22px'
                  }}>{producto.precio}</span>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevenir apertura del modal
                      openModal(producto); // Abrir modal directamente para añadir
                    }}
                    style={{
                      backgroundColor: '#F83D8E',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                    }} 
                    className="add-to-cart-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {modalOpen && selectedProduct && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(5px)',
          }}
        >
          {/* Modal content */}
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              animation: 'modalFadeIn 0.3s ease-out',
            }}
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'white',
                color: '#333',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                zIndex: 10,
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              ×
            </button>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {/* Product image section */}
              <div 
                style={{ 
                  flex: '1 1 300px',
                  padding: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: selectedProduct.color,
                  borderTopLeftRadius: '20px',
                  position: 'relative',
                  minHeight: '350px',
                }}
              >
                <img 
                  src={selectedProduct.imagen} 
                  alt={selectedProduct.nombre} 
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '300px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))',
                    transition: 'transform 0.5s',
                    animation: 'floatAnimation 3s ease-in-out infinite',
                  }}
                  className="modal-product-image"
                />
                
                {/* Tags */}
                <div style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  left: '20px', 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px' 
                }}>
                  {selectedProduct.tags && selectedProduct.tags.map((tag, index) => (
                    <span 
                      key={index}
                      style={{
                        backgroundColor: tag === "Bestseller" ? '#F83D8E' : 
                                        tag === "Nuevo" ? '#44d7f4' : 
                                        'rgba(255, 255, 255, 0.8)',
                        color: tag === "Bestseller" || tag === "Nuevo" ? 'white' : '#555',
                        padding: '5px 10px',
                        borderRadius: '15px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                      }}
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product details section */}
              <div style={{ 
                flex: '1 1 300px', 
                padding: '40px', 
                display: 'flex', 
                flexDirection: 'column' 
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '15px' 
                }}>
                  <h2 style={{ 
                    margin: 0, 
                    color: '#333', 
                    fontSize: '28px', 
                    fontWeight: 'bold' 
                  }}>{selectedProduct.nombre}</h2>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    backgroundColor: '#f8f8f8', 
                    padding: '5px 12px', 
                    borderRadius: '20px' 
                  }}>
                    <span style={{ color: '#F8B500', marginRight: '5px', fontSize: '18px' }}>★</span>
                    <span style={{ fontSize: '16px', fontWeight: '500' }}>{selectedProduct.rating}/5</span>
                  </div>
                </div>

                <p style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.7', 
                  color: '#555', 
                  marginBottom: '20px' 
                }}>
                  {selectedProduct.descripcion}
                </p>

                {/* Ingredients */}
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#666', margin: '0 0 8px 0', fontSize: '16px' }}>Ingredientes:</h4>
                  <p style={{ color: '#777', margin: 0, fontSize: '14px' }}>{selectedProduct.ingredientes}</p>
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '25px' 
                }}>
                  <span style={{ 
                    color: '#E94A9F', 
                    fontSize: '28px', 
                    fontWeight: 'bold' 
                  }}>{selectedProduct.precio}</span>
                </div>

                {/* Quantity controls */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '30px' 
                }}>
                  <span style={{ marginRight: '15px', fontSize: '16px', color: '#666' }}>Cantidad:</span>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #e0e0e0',
                    borderRadius: '30px',
                    overflow: 'hidden',
                  }}>
                    <button 
                      onClick={decrementQuantity}
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'none',
                        border: 'none',
                        borderRight: '1px solid #e0e0e0',
                        cursor: 'pointer',
                        fontSize: '20px',
                        color: quantity > 1 ? '#333' : '#ccc',
                      }}
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <span style={{ 
                      padding: '0 20px', 
                      fontSize: '18px',
                      minWidth: '40px',
                      textAlign: 'center',
                    }}>
                      {quantity}
                    </span>
                    <button 
                      onClick={incrementQuantity}
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'none',
                        border: 'none',
                        borderLeft: '1px solid #e0e0e0',
                        cursor: 'pointer',
                        fontSize: '20px',
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to cart button */}
                <button 
                  onClick={addToCart}
                  style={{
                    backgroundColor: '#F83D8E',
                    color: 'white',
                    padding: '16px 0',
                    borderRadius: '30px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 10px rgba(248, 61, 142, 0.3)',
                  }}
                  className="add-to-cart-button-modal"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}>
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification.show && (
        <div 
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#44d7f4',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            animation: 'fadeInRight 0.5s ease-out',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          {notification.message}
        </div>
      )}
      
      {/* Add this CSS for hover effects and animations */}
      <style jsx>{`
        .product-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .product-image-hover:hover {
          transform: scale(1.05);
        }
        
        .add-to-cart-button:hover {
          background-color: #F83D8E;
          transform: scale(1.05);
        }
        
        .add-to-cart-button-modal:hover {
          background-color: #E03A7F;
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(248, 61, 142, 0.4);
        }
        
        .slider-item-container {
          padding-bottom: 20px;
        }
        
        .modal-product-image:hover {
          transform: scale(1.08) rotate(2deg);
        }
        
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes floatAnimation {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}