"use client";
import React from "react";
import Image from "next/image";
import nora from "/public/images/nora.jpg"
import "./presentation.css"

const Presentation: React.FC = () => {
  return (
    <>
    <head>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css' />

    </head>
    <div className="">
      <h2 className="text-5xl text-gray-600 title font-bold my-20 mx-auto text-center">
        ¿Quien es Nora?
      </h2>

      <div className="container lg:1200 xl:1400 flex-1 justify-center ">
        <Image src={nora} width={200} height={200} alt="Directora Nora" />
        <p>
          Nora es una Locutora profesonal con más de 19 años de experiencia en
          la industria...
        </p>
      </div>
      <div className="container lg:1200 xl:1400">
        <h3 className="text-4xl text-gray-600 title font-bold my-20 mx-auto text-center">Trayectoria</h3>

<div>
  
  
  <ul className="timeline">
  
    <li>
      <div className="direction-r">
        <div className="flag-wrapper">
          <span className="flag">Locutora</span>
          <span className="time-wrapper"><span className="time">2013 - 2015</span></span>
        </div>
        <div className="desc">Fui locutora en un programa de radio ...</div>
      </div>
    </li>
    
    {/* <!-- Item 2 --> */}
    <li>
      <div className="direction-l">
        <div className="flag-wrapper">
          <span className="flag">Maestra</span>
          <span className="time-wrapper"><span className="time">2015 - 20122</span></span>
        </div>
        <div className="desc">Trabajé como maestra de locución y doblaje en la institución...</div>
      </div>
    </li>
  
    {/* <!-- Item 3 --> */}
    <li>
      <div className="direction-r">
        <div className="flag-wrapper">
          <span className="flag">Directora</span>
          <span className="time-wrapper"><span className="time">2022 - 2023</span></span>
        </div>
        <div className="desc">Fundé y dirigí Voz 21, una agencia de locución profesional...</div>
      </div>
    </li>
    
  </ul>
  
</div>

      </div>
     
    </div>
    </>
  );
};

export default Presentation;
