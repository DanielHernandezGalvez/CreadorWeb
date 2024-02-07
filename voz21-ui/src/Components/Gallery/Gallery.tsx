"use client";
import React, { useState } from "react";
import "./gallery.css";
import Image from "next/image";
import { GalleryProps } from "@/interfaces/GalleryProps";
import locutoresData from "../../data/locutoresData.json";
import ImageModal from "./ImageModal";

interface Locutor {
  numero?: string;
  content: string;
  name?: string;
  sexo: string;
  jingle?: boolean;
  // voz: {
  //   institucional: string;
  //   dinamica: string;
  //   documental: string;
  //   emotiva: string;
  //   informativa: string;
  //   seductora: string;
  //   actuada: string;
  //   ingles: string;
  //   alAire: string;
  //   jingle?: boolean;
  // };
  img?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
}



const Gallery: React.FC<GalleryProps> = ({ img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocutor, setSelectedLocutor] = useState<Locutor | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null); // Nuevo estado para rastrear la imagen clicada en el primer modal
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false); // Nuevo estado para rastrear si el segundo modal está abierto

  const openModal = (locutor: Locutor) => {
    setSelectedLocutor(locutor);
    setIsModalOpen(true);
  };

  const openSecondModal = (imgUrl: string) => {
    setSelectedImg(imgUrl);
    setIsSecondModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLocutor(null);
    setIsModalOpen(false);
  };

  const closeSecondModal = () => {
    setSelectedImg(null);
    setIsSecondModalOpen(false);
  };

  return (
    <>
      <div id="gallery" className="gallery-flexbox bg-gray-200">
        <h1 className="text-5xl text-gray-600 title font-bold my-20 mx-auto">
          Galería de Locutores
        </h1>
        <div className="container flex justify-center items-center py-5 gap-10 flex-wrap">
          {locutoresData.map((locutor, index) => (
            <div key={index} onClick={() => openModal(locutor)}>
              <div className="text-center flex flex-col justify-center m-10 transition-transform transform scale-100 hover:scale-110">
                <h4 className="text-2xl title font-bold text-gray-600 text-center my-5">
                  {locutor.content}
                </h4>
                {/* <p className="text-gray-600 font-bold">{locutor.content}</p> */}
                <Image
                  key={index}
                  src={locutor.img}
                  alt="img"
                  width={250}
                  height={250}
                  className="rounded-lg "
                />
                <p className=" title font-bold text-gray-600 text-center my-5">
                  {locutor.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedLocutor && (
          <div className="fixed  inset-0 flex items-center justify-center z-50">
            <div className="modal z-50 ">
              <div className="modal-content p-10 w-screen bg-white rounded shadow-lg flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-gray-600 mb-5">
                  {selectedLocutor.name}
                </h1>
                <p className="text-4xl font-bold text-gray-600">
                  {selectedLocutor.numero}
                </p>
                <div className="flex flex-wrap gap-5 my-10 justify-center">
                  {selectedLocutor.img && (
                    <Image
                      src={selectedLocutor.img}
                      alt="img"
                      width={150}
                      height={150}
                      className="rounded-lg transition-transform transform scale-100 hover:scale-110"
                      onClick={() => openSecondModal(selectedLocutor.img)}
                      />
                  )}
                  {selectedLocutor.img2 && (
                    <Image
                      src={selectedLocutor.img2}
                      alt="img"
                      width={150}
                      height={150}
                      className="rounded-lg transition-transform transform scale-100 hover:scale-110"
                      onClick={() => openSecondModal(selectedLocutor.img2)}

                    />
                  )}
                  {selectedLocutor.img3 && (
                    <Image
                      src={selectedLocutor.img3}
                      alt="img"
                      width={150}
                      height={150}
                      className="rounded-lg transition-transform transform scale-100 hover:scale-110"
                      onClick={() => openSecondModal(selectedLocutor.img3)}

                    />
                  )}
                  {selectedLocutor.img4 && (
                    <Image
                      src={selectedLocutor.img4}
                      alt="img"
                      width={150}
                      height={150}
                      className="rounded-lg transition-transform transform scale-100 hover:scale-110"
                      onClick={() => openSecondModal(selectedLocutor.img4)}

                    />
                  )}
                  {selectedLocutor.img5 && (
                    <Image
                      src={selectedLocutor.img5}
                      alt="img"
                      width={150}
                      height={150}
                      className="rounded-lg transition-transform transform scale-100 hover:scale-110"
                      onClick={() => openSecondModal(selectedLocutor.img5)}

                    />
                  )}
                </div>
                <p className="text-3xl text-gray-600 font-bold">
                  {selectedLocutor.content}
                </p>
                <button className="btn-modal" onClick={closeModal}>
                  Cerrar
                </button>
                {/* Mostrar otras propiedades del locutor aquí */}
              </div>
            </div>
          </div>
        )}

        {isSecondModalOpen && selectedImg && (
          <ImageModal imgUrl={selectedImg} closeModal={closeSecondModal} />
        )}
      </div>
    </>
  );
};

export default Gallery;
