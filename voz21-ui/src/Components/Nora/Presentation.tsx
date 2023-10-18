"use client";
import React from "react";
import Image from "next/image";
import nora from "/public/images/nora.jpg";
import "./presentation.css";

const Presentation: React.FC = () => {
  return (
    <>

      <div className="">
        <h2 className="text-5xl text-gray-600 title font-bold my-20 mx-auto text-center">
        Lic. Nora Garcia Directora de voz 21
        </h2>


        <div className="container lg:1200 xl:1400">

        <div className="container mx-auto my-10 px-auto flex flex-col sm:flex-row items-center">
        <h3 className="w-full font-bold sm:w-1/2 mb-5 p-10 text-justify text-gray-600">
        Con una amplia trayectoria en
            radio de más 19 años de experiencia, Trabajando como Locutora además
            de ser la productora de cada uno de los conceptos radiofónicos que
            ha creado a través de los años para frecuencias como para 920 am,
            1010 am, 100.3 FM , 89.1 FM, 106.7 FM , 96.3 FM, 1310 AM en México
            pero siendo también voz en otros países para frecuencias como 88.7
            fm en buenos aires Argentina , 40 principales en Panamá , y siendo
            imagen en conducción de tv canal 8 Guadalajara Jalisco.
        </h3>
        <div className="w-full sm:w-1/2 flex items-center ">
          <Image
            id="img-about"
            className="mx-auto rounded-xl"
            src={nora}
            width={400}
            height={350}
            alt="voz21"
          />
        </div>
      </div>

   
        </div> 
      </div>
    </>
  );
};

export default Presentation;
