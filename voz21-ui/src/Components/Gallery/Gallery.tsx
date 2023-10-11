"use client";
import React, { useState } from "react";
import "./gallery.css";
import Image from "next/image";
import { GalleryProps } from "@/interfaces/GalleryProps";
import locutoresData from "../../data/locutoresData.json";

interface Locutor {
  numero?: string;
  content: string;
  name?: string;
  sexo: string;
  voz: {
    institucional: string;
    dinamica: string;
    documental: string;
    emotiva: string;
    informativa: string;
    seductora: string;
    actuada: string;
    ingles: string;
    alAire: string;
  };
  img: string;
}

const Gallery: React.FC<GalleryProps> = ({ img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocutor, setSelectedLocutor] = useState<Locutor | null>(null);

  const openModal = (locutor: Locutor) => {
    setSelectedLocutor(locutor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLocutor(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container flex justify-center py-5 gap-10 flex-wrap">
        {locutoresData.map((locutor, index) => (
          <div key={index} onClick={() => openModal(locutor)}>
            <Image
              key={index}
              src={locutor.img}
              alt="img"
              width={250}
              height={250}
              className="rounded-lg transition-transform transform scale-100 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {isModalOpen && selectedLocutor && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal z-50">
            <div className="modal-content p-4 bg-white rounded shadow-lg">
              <button onClick={closeModal}>Cerrar</button>
              <h1>{selectedLocutor.name}</h1>
              <p>{selectedLocutor.numero}</p>
              <Image
              src={selectedLocutor.img}
              alt="img"
              width={250}
              height={250}
              className="rounded-lg transition-transform transform scale-100 hover:scale-110"
            />
              {/* Mostrar otras propiedades del locutor aquí */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
