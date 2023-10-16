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

    
    </div>
  );
};

export default FirstLayout;
