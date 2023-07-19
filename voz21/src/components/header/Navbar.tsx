"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Importa los iconos que deseas utilizar
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  const handleToggle = () => {
    setResponsive((prevState) => !prevState);
  };

  return (
    <nav
      className={`${styles.topnav} ${responsive ? styles.responsive : ""}`}
      id="topnav"
    >
      <a href="#" className={styles.logo}>
        <h2>Logo</h2>
      </a>

      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">News</a>
        <a href="#">Contact</a>

        <button className={`${styles.icon} icon`} onClick={handleToggle}>
          {/* Utiliza el icono de hamburguesa o el icono de equis según el estado */}
          {responsive ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
