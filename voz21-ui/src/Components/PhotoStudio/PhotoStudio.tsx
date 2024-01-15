import React from "react";
import Image from "next/image";
import foto from "/public/sections/foto.jpg";
import Link from "next/link";

const PhotoStudio = () => {
  return (
    <>
      <div className="p-4 text-center about  py-16">
        <span className="text-center text-3xl text-gray-600 mb-10 font-bold">
          Fotografía Profesional
        </span>
        <div id="foto-studio" className="flex justify-between items-center">
          <div className=" ">
            <p className="text-justify px-16 py-6 text-md text-gray-600 max-w-[700px]">
              Ofrecemos servicios de fotografía profesional para todo tipo de
              eventos, desde bodas y retratos hasta sesiones de estudio y
              fotografía comercial. <br /> Nuestro equipo de fotógrafos profesionales
              tiene años de experiencia en la captura de momentos inolvidables.
              Utilizamos equipos de última generación y técnicas de iluminación
              avanzadas para crear imágenes que te encantarán.
            </p>
          </div>
          <div className="px-8  py-6">
            <Image
              className="rounded-xl shadow"
              src={foto}
              width={300}
              alt="estudio fotográfico"
            />
          </div>
        </div>
        <div className="text-center cta-div transition hover:scale-110">
              <Link className="bg-yellow-500 font-bold text-white p-4 rounded-xl transition hover:bg-gray-500 hover:rounded-2xl hover:text-yellow-400" href="https://wa.me/5213335577482" target="_blank">
                Contratar
              </Link>
            </div>
      </div>
    </>
  );
};

export default PhotoStudio;
