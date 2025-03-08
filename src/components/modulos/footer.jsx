    import React from 'react';
    import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';
    import '../../estilos/footer.css'; // Asegúrate de importar el archivo CSS
    import Logok from '../../estilos/img/Logo-AlKeem.png';

    const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
        <div className="footer-container">
            {/* Logo y navegación */}
            <div className="footer-section">
            <div className="logo-container">
                <div className="logo">
                <img src={Logok} alt="Logo AlKeem" style={{ height: '80px', width: 'auto' }} />
                </div>
            </div>
            
            <nav className="footer-nav">
                <h3 className="nav-title">Navigation</h3>
                <ul className="nav-list">
                <li className="nav-item">
                    <span className="nav-bullet">•</span>
                    <a href="#inicio" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                    <span className="nav-bullet">•</span>
                    <a href="#sabores" className="nav-link">Sabores</a>
                </li>
                <li className="nav-item">
                    <span className="nav-bullet">•</span>
                    <a href="#productos" className="nav-link">Productos</a>
                </li>
                <li className="nav-item">
                    <span className="nav-bullet">•</span>
                    <a href="#descuentos" className="nav-link">Descuentos</a>
                </li>
                </ul>
            </nav>
            </div>
            
            {/* Información de contacto */}
            <div className="footer-section">
            <div className="contact-item">
                <MapPin className="contact-icon" size={30} />
                <div>
                <h4 className="contact-label">Address:</h4>
                <p className="contact-text">123 King Street Melbourne, 3000,<br />Australia</p>
                </div>
            </div>
            
            <div className="contact-item">
                <Phone className="contact-icon" size={30} />
                <p className="contact-text">+12345678123</p>
            </div>
            
            <div className="contact-item">
                <Mail className="contact-icon" size={30} />
                <div>
                <h4 className="contact-label">Email:</h4>
                <p className="contact-text">info@example.com</p>
                </div>
            </div>
            </div>
            
            {/* Redes sociales */}
            <div className="social-container">
            <a href="#facebook" className="social-link">
                <Facebook size={20} />
            </a>
            <a href="#twitter" className="social-link">
                <Twitter size={20} />
            </a>
            <a href="#instagram" className="social-link">
                <Instagram size={20} />
            </a>
            </div>
        </div>
        
        {/* Copyright */}
        <div className="copyright">
            Copyright © 2025 BlackRise Themes Inc All rights reserved.
        </div>
        
        {/* Botón de volver arriba */}
        <button className="scroll-top-button" onClick={scrollToTop}>
            <ArrowUp size={20} />
        </button>
        </footer>
    );
    };

    export default Footer;