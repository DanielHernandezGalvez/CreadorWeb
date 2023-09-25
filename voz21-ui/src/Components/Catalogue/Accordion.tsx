"use client";

import AccordionItem from "./AccordionItem";
import locutoresData from "../../data/locutoresData.json"
const Accordion: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {locutoresData.map((item, index) => (
        <div key={index}>
          <AccordionItem
            numero={item.numero}
            content={item.content}
            institucional={item.voz.institucional}
            dinamica={item.voz.dinamica}
            documental={item.voz.documental}
            emotiva={item.voz.emotiva}
            informativa={item.voz.informativa}
            seductora={item.voz.seductora}
            actuada={item.voz.actuada}
            ingles={item.voz.ingles}
            alAire={item.voz.alAire}
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Accordion;
