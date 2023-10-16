import React from "react";
import "./services.css";
import Link from "next/link";
const Services = () => {
  return (
    <>
      <div className="about  pb-10">
        <h1 className="text-5xl text-gray-600 title font-bold my-10 mx-auto">
          Servicios
        </h1>
        <div className="p-10 my-10 mx-auto flex gap-10 flex-wrap justify-center">
          <section className="service-box">
            <h4 className="text-4xl">Estudio de Grabación</h4>
            <p>
              Puedes rentar un estudio de grabación profesional tanto para
              grabar tu voz como para tus videos y multimedia
            </p>
            <div className="text-center cta-div ">
              <Link className="cta-services" href="/talleres">
                Contratar
              </Link>
            </div>
          </section>
          <section className="service-box">
            <h4 className="text-4xl">Catálogo de Locutores</h4>
            <p>
              Puedes Elegir entre 21 voces diferentes para tus proyectos de
              locución
            </p>
            <div className="text-center cta-div">
              <Link className="cta-services" href="/talleres">
                Contratar
              </Link>
            </div>
          </section>
          <section className="service-box">
            <h4 className="text-4xl">Cursos y Talleres</h4>
            <p>
              Si te interesa tener una fomación en locución y doblaje da click
              en el botón de abajo
            </p>
            <div className="text-center cta-div">
              <Link className="cta-services" href="/talleres">
                Contratar
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
