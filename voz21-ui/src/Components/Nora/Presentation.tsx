"use client";
import React from "react";
import Image from "next/image";
import nora from "/public/images/nora.jpg";
import noraEstudio from "/public/images/nora-estudio.jpg";
import "./presentation.css";

const Presentation: React.FC = () => {
  return (
    <>
      <div className="about">
        <h2 className="text-5xl text-gray-600 title font-bold my-20 mx-auto text-center">
          Lic. Nora Garcia Directora de voz 21
        </h2>

        <div className="container lg:1200 xl:1400">
          <div className="container mx-auto my-10 px-auto flex flex-col sm:flex-row items-center">
            <h3 className="w-full font-bold sm:w-1/2 mb-5 p-10 text-justify text-gray-600">
              Con una amplia trayectoria en radio de más 19 años de experiencia,
              Trabajando como Locutora además de ser la productora de cada uno
              de los conceptos radiofónicos que ha creado a través de los años
              para frecuencias como para 920 am, 1010 am, 100.3 FM , 89.1 FM,
              106.7 FM , 96.3 FM, 1310 AM en México pero siendo también voz en
              otros países para frecuencias como 88.7 fm en buenos aires
              Argentina , 40 principales en Panamá , y siendo imagen en
              conducción de tv canal 8 Guadalajara Jalisco.
            </h3>
            <div className="w-full sm:w-1/2 flex items-center ">
              <Image
                id="nora-principal"
                className="mx-auto rounded-xl"
                src={nora}
                width={400}
                height={350}
                alt="voz21"
              />
            </div>
          </div>
        </div>

        <div className="container flex flex-row flex-wrap justify-center">
          <div className="p-10 bg-gray-200 nora-trayectoria">
            <p className="text-center">
              Seleccionada como Locutora Técnica en los juegos panamericanos XVI
              en 2011
            </p>
          </div>
          <div className="p-10 bg-gray-200 nora-trayectoria">
            <p className="text-center">
              Maestra de ceremonias y conductora de eventos así como
              conferencista
            </p>
          </div>
          <div className="p-10 bg-gray-200 nora-trayectoria">
            {" "}
            <p className="text-center">
              Su voz ha sido la voz de decenas de marcas y empresas comerciales
              de infinidad de rubros en el mercado publicitario
            </p>
          </div>
        </div>

        <div className="container lg:1200 xl:1400">
          <div className="container mx-auto my-10 px-auto flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2 flex items-center ">
              <Image
                id="nora-principal"
                className="mx-auto rounded-xl"
                src={noraEstudio}
                width={400}
                height={350}
                alt="voz21"
              />
            </div>
            <h3 className="w-full font-bold sm:w-1/2 mb-5 p-10 text-justify text-gray-600">
              Su experiencia en los medios de Comunicación detonaron El deseo de
              compartir sus conocimientos a innumerables generaciones
              Universitarias donde a brindado generosamente a todos sus alumnos
              todo el aprendizaje obtenido, con la gran pasión que la
              caracteriza por la docencia ,con mas de 15 años de trayectoria
              Universitaria y como docente, de múltiples talleres y diplomados
              que ha impartido con gran éxito. Asi como capacitadora empresarial
              en los ámbitos de la comunicación asertiva , locución, ventas y
              liderazgo entre otros temas de su dominio.
            </h3>
          </div>
        </div>
        <div className="container">
          <h4 className="text-3xl font-bold text-gray-600 text-center pt-10 ">
            En voz 21 nos orgullecemos de tenerla como directora de esta su casa
            donde además de dirigir y coordinar todas las áreas de voz 21 forma
            parte de nuestros Maestros Docentes.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Presentation;
