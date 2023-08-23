import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
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
        <span className="text-gray-600">{isOpen ? "Cerrar" : "Abrir"}</span>
      </div>
      {isOpen && <div className="p-3">{content}</div>}
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <AccordionItem title="Pregunta 1" content="Respuesta a la pregunta 1." />
      <AccordionItem title="Pregunta 2" content="Respuesta a la pregunta 2." />
      {/* Agrega más ítems de acordeón según sea necesario */}
    </div>
  );
};

export default Accordion;
