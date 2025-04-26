import React from 'react'
import Nav from '../components/modulos/nav'
import Sabor1 from './sabores/Sabor1';
import Sabor2 from './sabores/Sabor2';
import Footer from './modulos/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Sabores() {
    return (
        <>
            <Nav />
            <Sabor1 />
            <Sabor2 />
            <Footer />
            </>

    )
}
