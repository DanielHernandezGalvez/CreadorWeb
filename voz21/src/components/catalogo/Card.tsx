"use client";
import React from "react";
import styles from "./card.module.css";
import data from "./data.json";
import Link from "next/link";

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
          </audio>
          <Link href={voz.url}>Escuchar más</Link>
        </div>
      ))}
    </>
  );
};

export default Card;
