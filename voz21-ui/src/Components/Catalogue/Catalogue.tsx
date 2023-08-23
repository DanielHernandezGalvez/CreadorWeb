"use client";
import React, { useState } from "react";
import "./catalogue.css";

interface AccordionItemProps {
  title: string;
  content: string;
  audioSrc: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  audioSrc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mb-2">
      <div
        className="flex justify-between items-center p-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="text-gray-600">
          {isOpen ? "Cerrar" : "Escuchar más"}
        </span>
      </div>

      {isOpen && (
        <div className="p-3">
          <p>{content}</p>
          <audio controls>
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div className="container">
      <div className="container mx-auto p-4">
        <AccordionItem
          title="Pregunta 1"
          content="Respuesta a la pregunta 1."
          audioSrc="ruta/al/archivo1.mp3"
        />
        <AccordionItem
          title="Pregunta 2"
          content="Respuesta a la pregunta 2."
          audioSrc="ruta/al/archivo2.mp3"
        />
        {/* Agrega más ítems de acordeón según sea necesario */}
      </div>
    </div>
  );
};

export default Accordion;
