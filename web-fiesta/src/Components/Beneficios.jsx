import React from "react";
import "./beneficios.css";

const Beneficios = () => {
  return (
    <>
      <section id="inicio" className="contenedor">
        <h2 className="titulo-seccion">Bienvenido</h2>
        <p className="copy">
          aqui va más texto sepa la bola para qué, pero puede ser algo util
        </p>
        <div className="beneficios">
          <div className="beneficio">
            <h3>Beneficios</h3>
          </div>
          <div className="beneficio">
            <h3>Beneficios</h3>
          </div>
          <div className="beneficio">
            <h3>Beneficios</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beneficios;
