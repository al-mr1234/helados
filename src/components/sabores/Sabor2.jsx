    import React from 'react';
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

    const styles = {
    gridContainer: {
        maxHeight: '600px',
        overflowY: 'auto'
    },
    card: {
        backgroundColor: '#7d7d7d',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px'
    },
    titulo: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '2.5rem',
    },
    nombreSabor: {
        fontFamily: "Berkshire Swash , cursive", 
        fontSize: '2.0rem'
    },
    imagenContainer: {
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '12px',
    },
    imagen: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
    };

    export default function SaboresHelado() {
    const sabores = [
        { nombre: 'Chocolate', imagen: Chocolate },
        { nombre: 'Limón', imagen: Limon },
        { nombre: 'Mantequilla', imagen: Mantequilla },
        { nombre: 'Vainilla', imagen: Vainilla },
        { nombre: 'Tres leches', imagen: TresLeches },
        { nombre: 'Oreo', imagen: Oreo },
        { nombre: 'Chicle', imagen: Chicle },
        { nombre: 'Café', imagen: Cafe },
    ];

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: '#9e9e9e4d' }}>
        <div className="container">
            <h2 className="text-center mb-5 fw-bold fs-1" style={styles.titulo}>
            Nuestros Sabores
            </h2>
            
            <div className="row g-4 justify-content-center" style={styles.gridContainer}>
            {sabores.map((sabor, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
                <div 
                    className="card h-100 border-0 shadow-sm rounded-3" 
                    style={styles.card}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                <h5 
                        className="card-title mb-0 text-white fw-bold"
                        style={styles.nombreSabor}
                    >
                        {sabor.nombre}
                    </h5>
                    <div style={styles.imagenContainer}>
                    <img 
                        src={sabor.imagen} 
                        alt={sabor.nombre} 
                        style={styles.imagen}
                    />
                    </div>
                    <div className="card-body text-center p-3">
                    
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    }
