import React from "react";
import styles from "./card.module.css";
import data from "./data.json";

interface Voz {
  id: number;
  number: string;
  audio: string;
}

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      {data.map((voz: Voz) => (
        <div key={voz.id}>
          <h2>{voz.number}</h2>
          <audio controls>
            <source src={voz.audio} />
          </audio>
        </div>
      ))}
    </div>
  );
};

export default Card;
