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
    <div className="about bg-gray-200">
      <h1 className="text-5xl text-gray-600 title font-bold my-20 mx-auto">
          Galería de Locutores
        </h1>
      <div className="container flex justify-center items-center py-5 gap-10 flex-wrap">
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
        <div className="fixed  inset-0 flex items-center justify-center z-50">
          <div className="modal z-50 ">
            <div className="modal-content p-10 w-screen bg-white rounded shadow-lg flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-gray-600 mb-5">{selectedLocutor.name}</h1>
              <p className="text-4xl font-bold text-gray-600">{selectedLocutor.numero}</p>
              <div className="flex flex-wrap gap-5 my-10 justify-center">
              <Image
              src={selectedLocutor.img}
              alt="img"
              width={150}
              height={150}
              className="rounded-lg transition-transform transform scale-100 hover:scale-110"
            />
              <Image
              src={selectedLocutor.img}
              alt="img"
              width={150}
              height={150}
              className="rounded-lg transition-transform transform scale-100 hover:scale-110"
            />
              <Image
              src={selectedLocutor.img}
              alt="img"
              width={150}
              height={150}
              className="rounded-lg transition-transform transform scale-100 hover:scale-110"
            />
              <Image
              src={selectedLocutor.img}
              alt="img"
              width={150}
              height={150}
              className="rounded-lg transition-transform transform scale-100 hover:scale-110"
            />
              <Image
              src={selectedLocutor.img}
              alt="img"
              width={150}
              height={150}
              className="rounded-lg transition-transform transform scale-100 hover:scale-110"
            />
            </div>
            <p className="text-3xl text-gray-600 font-bold">{selectedLocutor.content}</p>
              <button className="btn-modal" onClick={closeModal}>Cerrar</button>
              {/* Mostrar otras propiedades del locutor aquí */}
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Gallery;
