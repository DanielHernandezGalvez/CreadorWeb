"use client";
import React from "react";
import Accordion from "./Accordion";

const Catalogue: React.FC = () => {
  return (
    <div className="flex justify-center items-center  flex-col bg-white">
      <h2 className="text-5xl font-bold text-black text-center my-10">
        Catálogo de voces
      </h2>
      <select className="select pe-5 border rounded">
        <option value="Mujer">Mujer</option>
        <option value="Hombre">Hombre</option>
        <option value="Inglés">Inglés</option>
      </select>
      <Accordion />
    </div>
  );
};

export default Catalogue;
