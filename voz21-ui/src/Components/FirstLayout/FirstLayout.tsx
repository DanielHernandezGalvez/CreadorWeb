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
        <h3 className="w-full font-bold sm:w-1/2 mb-5 p-10 text-justify text-gray-600">
          Somos una agencia donde puedes contratar diferentes voces para tus
          proyectos, usar una cabina y estudio de grabación profesional para
          hacer tus ideas realidad, así como tomar clases de formación en
          locución y doblaje.
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

      <div className=" flex items-center h-auto">
        <div className="flex flex-col items-center h-auto">
          <Image
            className="mx-auto rounded-xl"
            src={estudio}
            width={200}
            height={50}
            alt="voz21"
          />
          <h3>Mira nuestro catálogo de voces y conoce a nuestros locutores</h3>
        </div>
        <div className="flex flex-col items-center h-auto">
        <Image
            className="mx-auto rounded-xl"
            src={estudio}
            width={200}
            height={50}
            alt="voz21"
          />
          <h3>
            ¿Quieres formate en el área de locucion y doblaje? aquí tienes todos
            nuestros cursos
          </h3>
        </div>{" "}
        <div className="flex flex-col items-center h-auto">
        <Image
            className="mx-auto rounded-xl"
            src={estudio}
            width={200}
            height={50}
            alt="voz21"
          />
          <h3>
            ¿Necesitas un lugar para grabar audio o video? Contáctanos para
            tener acceso a Voz 21 Estudio
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
