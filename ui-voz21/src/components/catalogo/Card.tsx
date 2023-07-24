import React from "react";
import styles from "./card.module.css";

interface CardProps {
  number: string;
  description: string;
  audio: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ number, description, audio, url }) => {
  return (
    <div className={styles.card}>
      <h2>{number}</h2>
      <p>{description}</p>
      <audio controls preload="none">
        <source src={audio} />
      </audio>
      <a href={url}>Escuchar más</a>
    </div>
  );
};

export default Card;
