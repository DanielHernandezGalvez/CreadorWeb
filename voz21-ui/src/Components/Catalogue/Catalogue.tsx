"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";

const Catalogue: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("All");

  // Función para manejar el cambio en el select
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      id="catalogue"
      className="flex justify-center items-center  flex-col bg-white pb-10"
    >
      <h2 className="text-5xl title font-bold text-gray-600 text-center my-10">
        Catálogo de voces
      </h2>
      <span className="text-gray-600 m-2">¿Qué voz quieres escuchar?</span>
      <select
        className="select p-2 py-2  pe-5 border rounded font-bold text-gray-600"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option className="text-gray-600 font-bold" value="All">Todas</option>
        <option className="text-gray-600 font-bold" value="Women">Mujer</option>
        <option className="text-gray-600 font-bold" value="Men">Hombre</option>
        <option className="text-gray-600 font-bold" value="English">Inglés</option>
        <option className="text-gray-600 font-bold" value="Jingle">Jingle</option>
        <option className="text-gray-600 font-bold" value="italiano">Italiano</option>
      </select>
      <Accordion selectedOption={selectedOption} />
    </div>
  );
};

export default Catalogue;
