"use client";
import React from "react";
import Image from "next/image";
import nora from "/public/images/nora.jpg"

const Presentation: React.FC = () => {
  return (
    <>
    <div className="h-screen">
      <h1 className="text-5xl text-gray-600 title font-bold my-20 mx-auto text-center">
        ¿Quien es Nora?
      </h1>
      <div className="container flex-1 justify-center">
        <Image src={nora} width={100} height={100} alt="Directora Nora" />
        <p>
          Nora es una Locutora profesonal con más de 19 años de experiencia en
          la industria...
        </p>
      </div>
     
    </div>
    </>
  );
};

export default Presentation;
