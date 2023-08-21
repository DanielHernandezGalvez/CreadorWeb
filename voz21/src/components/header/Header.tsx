import React from "react";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Voz<span className={styles.logo21}>21</span>
        </h1>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          earum iste repellendus quidem sequi autem doloremque aut ut voluptate
          quaerat quae quia officia, animi dolores facilis illum necessitatibus.
          Culpa, maiores.
        </p>
        <a href="/contact" className={styles.cta}>
          CONTÁCTANOS
        </a>
      </div>
    </div>
  );
};

export default Header;
