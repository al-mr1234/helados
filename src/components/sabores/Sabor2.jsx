import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Chocolate from '../../estilos/img/sabores/chocolate.png';
import Limon from '../../estilos/img/sabores/limon.png';
import Mantequilla from '../../estilos/img/sabores/mantequilla.png';
import Vainilla from '../../estilos/img/sabores/vanilla.png';
import TresLeches from '../../estilos/img/sabores/tresleches.png';
import Oreo from '../../estilos/img/sabores/oreo.png';
import Chicle from '../../estilos/img/sabores/chicle.png';
import Cafe from '../../estilos/img/sabores/cafe.png';

export default function SaboresHelado() {
    // Estado para manejar la animación de entrada
    const [isLoaded, setIsLoaded] = useState(false);
    // Estado para manejar el sabor seleccionado
    const [saborSeleccionado, setSaborSeleccionado] = useState(null);

    useEffect(() => {
        // Activar la animación de entrada después de montar el componente
        setIsLoaded(true);
    }, []);

    const sabores = [
        { 
            id: 1,
            nombre: 'Chocolate', 
            imagen: Chocolate, 
            descripcion: 'Delicioso sabor intenso a chocolate', 
            color: '#6B4226',
            ingredientes: ['Cacao puro', 'Leche', 'Azúcar', 'Crema'],
            calorias: '290 kcal'
        },
        { 
            id: 2,
            nombre: 'Limón', 
            imagen: Limon, 
            descripcion: 'Refrescante sabor cítrico', 
            color: '#C4D600',
            ingredientes: ['Limón natural', 'Azúcar', 'Agua purificada'],
            calorias: '180 kcal'
        },
        { 
            id: 3,
            nombre: 'Mantequilla', 
            imagen: Mantequilla, 
            descripcion: 'Suave y cremoso sabor tradicional', 
            color: '#FDCE86',
            ingredientes: ['Mantequilla', 'Leche', 'Azúcar', 'Crema'],
            calorias: '310 kcal'
        },
        { 
            id: 4,
            nombre: 'Vainilla', 
            imagen: Vainilla, 
            descripcion: 'Clásico sabor aromático', 
            color: '#F3E5AB',
            ingredientes: ['Vainilla natural', 'Leche', 'Azúcar', 'Crema'],
            calorias: '270 kcal'
        },
        { 
            id: 5,
            nombre: 'Tres leches', 
            imagen: TresLeches, 
            descripcion: 'Dulce inspirado en el postre tradicional', 
            color: '#F5DEB3',
            ingredientes: ['Leche condensada', 'Leche evaporada', 'Crema', 'Azúcar'],
            calorias: '320 kcal'
        },
        { 
            id: 6,
            nombre: 'Oreo', 
            imagen: Oreo, 
            descripcion: 'Con trozos de galleta Oreo', 
            color: '#3C3C3C',
            ingredientes: ['Galletas Oreo', 'Leche', 'Crema', 'Azúcar'],
            calorias: '340 kcal'
        },
        { 
            id: 7,
            nombre: 'Chicle', 
            imagen: Chicle, 
            descripcion: 'Divertido sabor para los más pequeños', 
            color: '#FF9CEE',
            ingredientes: ['Esencia de chicle', 'Leche', 'Azúcar', 'Colorante natural'],
            calorias: '260 kcal'
        },
        { 
            id: 8,
            nombre: 'Café', 
            imagen: Cafe, 
            descripcion: 'Intenso aroma a café recién hecho', 
            color: '#4B3621',
            ingredientes: ['Café 100% arábica', 'Leche', 'Azúcar', 'Crema'],
            calorias: '280 kcal'
        },
    ];

    // Mostrar detalles del sabor
    const mostrarDetalles = (sabor) => {
        setSaborSeleccionado(sabor);
    };

    // Cerrar detalles
    const cerrarDetalles = () => {
        setSaborSeleccionado(null);
    };

    return (
        <div className="sabores-seccion py-5" style={{ 
            background: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)'
        }}>
            <div className="container">
                <div className={`titulo-contenedor text-center mb-5 ${isLoaded ? 'animado' : ''}`}>
                    <h2 className="fw-bold titulo-principal" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2.8rem',
                        color: '#333',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        Nuestros Sabores
                    </h2>
                    <div className="subtitulo" style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '1rem',
                        color: '#666',
                        marginTop: '5px'
                    }}>
                        Elaborados con los mejores ingredientes
                    </div>
                    <div className="separador" style={{
                        width: '100px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 100%)',
                        margin: '15px auto',
                        borderRadius: '2px'
                    }}></div>
                </div>
                
                <div className="row g-4 justify-content-center">
                    {sabores.map((sabor, index) => (
                        <div 
                            key={sabor.id} 
                            className={`col-6 col-md-4 col-lg-3 mb-4 ${isLoaded ? 'animado' : ''}`}
                            style={{ 
                                transition: 'all 0.5s ease', 
                                transitionDelay: `${index * 0.1}s`,
                                opacity: isLoaded ? 1 : 0,
                                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
                            }}
                        >
                            <div
                                className="tarjeta-sabor"
                                onClick={() => mostrarDetalles(sabor)}
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    position: 'relative',
                                    height: '100%'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                {/* Decoración superior con el color del sabor */}
                                <div style={{
                                    height: '8px',
                                    background: sabor.color,
                                    width: '100%'
                                }}></div>
                                
                                <div style={{ padding: '20px 15px' }}>
                                    {/* Nombre del sabor */}
                                    <h5 style={{
                                        fontFamily: "Berkshire Swash, cursive",
                                        fontSize: '1.8rem',
                                        color: '#333',
                                        marginBottom: '15px',
                                        textAlign: 'center'
                                    }}>
                                        {sabor.nombre}
                                    </h5>
                                    
                                    {/* Contenedor de imagen circular */}
                                    <div style={{
                                        width: '150px',
                                        height: '150px',
                                        margin: '0 auto 15px',
                                        borderRadius: '50%',
                                        padding: '5px',
                                        background: '#fff',
                                        transition: 'transform 0.3s ease',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '50%',
                                            overflow: 'hidden'
                                        }}>
                                            <img
                                                src={sabor.imagen}
                                                alt={sabor.nombre}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Descripción corta */}
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#666',
                                        textAlign: 'center',
                                        marginBottom: '10px'
                                    }}>
                                        {sabor.descripcion}
                                    </p>
                                    
                                    {/* Botón "Ver más" */}
                                    <div style={{
                                        textAlign: 'center',
                                        marginTop: '15px'
                                    }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '5px 15px',
                                            background: sabor.color,
                                            color: '#fff',
                                            borderRadius: '30px',
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
                                        }}>
                                            Ver detalles
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Modal de detalles */}
            {saborSeleccionado && (
                <div className="modal-overlay" onClick={cerrarDetalles} style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                    padding: '20px'
                }}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
                        backgroundColor: '#fff',
                        borderRadius: '20px',
                        maxWidth: '500px',
                        width: '100%',
                        position: 'relative',
                        animation: 'modalFadeIn 0.3s ease'
                    }}>
                        {/* Cabecera del modal con el color del sabor */}
                        <div style={{
                            background: saborSeleccionado.color,
                            padding: '20px',
                            borderRadius: '20px 20px 0 0',
                            textAlign: 'center',
                            position: 'relative'
                        }}>
                            <button onClick={cerrarDetalles} style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                ✕
                            </button>
                            
                            <h3 style={{
                                fontFamily: "Berkshire Swash, cursive",
                                fontSize: '2.2rem', 
                                color: '#fff',
                                margin: '0',
                                textShadow: '0 2px 5px rgba(0,0,0,0.2)'
                            }}>
                                {saborSeleccionado.nombre}
                            </h3>
                        </div>
                        
                        <div style={{ padding: '30px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: `4px solid ${saborSeleccionado.color}`,
                                    marginRight: '20px',
                                    flexShrink: 0
                                }}>
                                    <img 
                                        src={saborSeleccionado.imagen} 
                                        alt={saborSeleccionado.nombre} 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        color: '#333',
                                        marginBottom: '5px'
                                    }}>
                                        Descripción
                                    </h4>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#666'
                                    }}>
                                        {saborSeleccionado.descripcion}
                                    </p>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '3px 10px',
                                        background: '#f8f9fa',
                                        borderRadius: '15px',
                                        fontSize: '0.8rem',
                                        color: '#666'
                                    }}>
                                        {saborSeleccionado.calorias} por porción
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{
                                marginTop: '20px',
                                borderTop: '1px solid #eee',
                                paddingTop: '20px'
                            }}>
                                <h4 style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    color: '#333',
                                    marginBottom: '10px'
                                }}>
                                    Ingredientes
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: '0',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '10px'
                                }}>
                                    {saborSeleccionado.ingredientes.map((ingrediente, i) => (
                                        <li key={i} style={{
                                            padding: '5px 15px',
                                            background: '#f8f9fa',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            color: '#333',
                                            border: '1px solid #e9ecef'
                                        }}>
                                            {ingrediente}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div style={{
                                marginTop: '25px',
                                textAlign: 'center'
                            }}>
                                <button style={{
                                    padding: '10px 25px',
                                    background: saborSeleccionado.color,
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '30px',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
                                }}>
                                    Pedir este sabor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Estilos CSS adicionales */}
            <style jsx>{`
                @keyframes modalFadeIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .titulo-principal::after {
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 100%);
                    transform: scaleX(0);
                    transition: transform 0.5s ease;
                }
                
                .titulo-contenedor.animado .titulo-principal::after {
                    transform: scaleX(1);
                }
                
                .sabores-seccion {
                    position: relative;
                    overflow: hidden;
                }
                
                .sabores-seccion::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 100px;
                    background: linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 100%);
                }
            `}</style>
        </div>
    );
}