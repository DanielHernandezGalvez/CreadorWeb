import React from "react";
import "./testimonio.css";
const Testimonios = () => {
  return (
    <section className="contenedor">
      <h2 className="titulo-seccion">Testimonios</h2>
      <p className="copy">
        Texto de lo que dijo la persona, debería ponerlo en itálica
      </p>
      <img
        className="people"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jCwrINKhHxXo0E40Q7nCKLl8eMFvEmPYhQ&usqp=CAU"
      />
      <h4 className="person">Bicho says</h4>
    </section>
  );
};

export default Testimonios;
