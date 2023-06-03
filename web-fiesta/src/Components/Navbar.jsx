import React from "react";
// import "../index.css"
import "./navbar.css"
const Navbar = () => {
  return (
    <header>
      <nav className="menu-navegacion contenedor">
        <div className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/418/838/non_2x/star-pinata-clipart-free-png.png"
            alt="logo"
          />
        </div>
        <div className="enlaces">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#prod">Productos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
