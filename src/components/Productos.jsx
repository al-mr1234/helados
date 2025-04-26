import React from 'react';
import Nav from '../components/modulos/nav';
import Titulo from '../components/productos/secTitulo';
import Catalogo from '../components/productos/catalogo';
import Catalogo2 from '../components/productos/catalogo2';
import Catalogo3 from '../components/productos/catalogo3';
import Catalogo4 from '../components/productos/catalogo4';
import Catalogo5 from '../components/productos/catalogo5';
import Footer from './modulos/footer';

export default function Productos() {
  return (
    <>
            <Nav/>
            <Titulo/>
            <Catalogo/>
            <Catalogo2/>
            <Catalogo3/>
            <Catalogo4/>
            <Catalogo5/>
            <Footer/>
            </>
          
  )
}
