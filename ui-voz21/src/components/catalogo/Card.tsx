import React from "react";
import styles from "./card.module.css";
import data from "./data.json";
import audio from "../../assets/audios/1/audio1.mp3";

interface Voz {
  id: number;
  number: string;
  audio: string;
  description: string;
  url: string;
}

const Card: React.FC = () => {
  return (
    <>
      {data.map((voz: Voz) => (
        <div className={styles.card} key={voz.id}>
          <h2>{voz.number}</h2>
          <p>{voz.description}</p>
          <audio controls preload="none">
            <source src={voz.audio} />
            {/* <source src={require(`../../assets/${voz.audio}`)} /> */}
          </audio>
          <a href={voz.url}>Escuchar más</a>
        </div>
      ))}
      <audio controls>
        <source src={audio} />
      </audio>
    </>
  );
};

export default Card;
