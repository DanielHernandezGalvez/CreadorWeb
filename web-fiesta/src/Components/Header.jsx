import React from 'react';
import "./header.css"
const Header = () => {
    return (
        <section className='hero'>
            <div className='contenedor-textos contenedor'>
                <h1>Aquí puede ir el slogan o el giro de la empresa</h1>
                <p>Aqui algún texto extra que se requiera agregar como información adicional menos relevante</p>
                <a href='#' className='boton'>Mas información</a>
            </div>
        </section>
    );
}

export default Header;
