import Image from "next/image";
import React from "react";
import voz21 from "/public/images/voz21.jpeg";
import estudio from "/public/images/estudy.jpeg";
import "./firstlayout.css";

const FirstLayout = () => {
  const cardStyle = {
    backgroundImage: `url(/images/estudy.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div id="bienvenido">
      <h2 className="text-5xl text-gray-600 title font-bold my-20 mx-auto text-center">
        Bienvenido a Voz 21
      </h2>

      <div className="container mx-auto my-10 px-auto flex flex-col sm:flex-row items-center">
        <h3 className="w-full font-bold sm:w-1/2 mb-5 p-10 text-justify text-pretty text-gray-600">
          Somos una Agencia y Catálogo de Voces Publicitarias; tenemos las 21
          mejores voces profesionales de México. Contamos con la Academia más
          especializada de Locución Profesional y Doblaje en Guadalajara, además
          de tener diversos, diplomados y talleres, garantizándote una gran
          experiencia de aprendizaje y práctica profesional. Tenemos Estudio
          profesional de Grabación de audio y video. El espacio perfecto para
          que grabes tus pódcast, y videos. También te ofrecemos un servicio de
          Fotografía para eventos Sociales y Set de Fotografía. Reunimos un gran
          equipo de expertos en la capacitación Empresarial con
          Amplia Trayectoria.
        </h3>
        <div className="w-full sm:w-1/2 flex items-center ">
          <Image
            id="img-about"
            className="mx-auto rounded-xl"
            src={estudio}
            width={400}
            height={350}
            alt="voz21"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
