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
          Somos un estudio de Grabación donde puedes contratar diferentes voces
          para tus proyectos, usar una cabina y estudio para grabar tus ideas,
          así como tomar clases de formación en locución y doblaje
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
