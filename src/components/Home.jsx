import React from 'react'
import Nav from "./modulos/nav"
import Sec2 from './modulos/sec2';
import Sec3 from './modulos/sec3';
import Sec4 from './modulos/sec4';
import Sec5 from './modulos/sec5';
import Sec6 from './modulos/sec6';
import Footer from './modulos/footer';


export default function Home() {
    return (
        <>
            <Nav />
            <Sec2 />
            <Sec3/>
            <Sec4/>
            <Sec5/>
            <Sec6/>
            <Footer/>
        </>
    ) 
}
