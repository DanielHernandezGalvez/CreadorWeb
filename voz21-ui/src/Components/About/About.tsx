import Image from "next/image";
import React from "react";
import Us from "/public/images/about.jpg";
import "./about.css";
import Gallery from "../Gallery/Gallery";

export const About: React.FC = () => {
  return (
    <div className="about bg-gray-200 pb-10">
      <h1 className="text-5xl text-gray-600 title font-bold my-20 mx-auto">
        ¿Quienes Somos?
      </h1>
      <div className="flex container items-center flex-wrap">
        <h3 className="max-w-lg mx-auto mb-5 text-justify text-gray-600">
        Somos una Agencia y Catalogo de Voces Publicitarias tenemos las 21 mejores voces profesionales de México.
        Contamos con la Academia más Especializada de Locución Profesional y Doblaje en Guadalajara, además de tener diversos, diplomados y talleres Garantizándote una gran experiencia de aprendizaje y práctica profesional. 
        Tenemos Estudio profesional de Grabación de audio y video. El espacio perfecto para que grabes tus podcasts, y videos. También te ofrecemos un servicio de Fotografía para eventos Sociales y Set de Fotografía.
        Reunimos un gran equipo de expertos en la capacitación Empresarial con Amplia Trayectoria.
        </h3>
        {/* <div className="max-w-lg mx-auto mt-5">
          <Image
            src={Us}
            width={400}
            alt="Equipo de locutores"
            objectFit="true"
          />
        </div> */}
        <Gallery />
      </div>
    </div>
  );
};
