"use client";
import React from "react";
import Accordion from "./Accordion";

const Catalogue: React.FC = () => {
  return (
    <div className="flex justify-center items-center  flex-col bg-white pb-10">
      <h2 className="text-5xl title font-bold text-gray-600 text-center my-10">
        Catálogo de voces
      </h2>
      <span className="text-gray-600 m-2">¿Qué voz quieres escuchar?</span>
      <select className="select pe-5 border rounded text-gray-600">
        <option value="Todas">Todas</option>
        <option value="Mujer">Mujer</option>
        <option value="Hombre">Hombre</option>
        <option value="Inglés">Inglés</option>
      </select>
      <Accordion />
    </div>
  );
};

export default Catalogue;
