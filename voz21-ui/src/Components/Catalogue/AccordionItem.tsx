"use client";
import React, { useState } from "react";
import "./catalogue.css";
import { AccordionItemProps } from "@/interfaces/AccordionItemProps";

const AccordionItem: React.FC<AccordionItemProps> = ({
  numero,
  content,
  institucional,
  dinamica,
  documental,
  emotiva,
  informativa,
  seductora,
  actuada,
  ingles,
  alAire,
  jingle,
  italian
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border rounded-md mb-2 shadow-md transition-transform transform scale-100 
    hover:scale-105"
    >
      <div
        className="flex justify-between items-center p-3 cursor-pointer "
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-bold  text-gray-600">{numero}</h3>
        <span className="text-yellow-500 font-bold  p-1 rounded-md shadow-sm hover:bg-gray-200">
          {isOpen ? (
            <p className="text-red-600 font-bold">Cerrar</p>
          ) : (
            "Escuchar más"
          )}
        </span>
      </div>
      <h4 className="text-gray-600 ms-3">Voz institucional</h4>

      <div
        id="main-audio"
        className="my-3 mx-auto flex justify-center items-center"
      >
        <audio controls preload="none">
          <source src={institucional} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {isOpen && (
        <div className="p-3">
          {/* <p>{content}</p> */}

          <div>
            <h4 className="text-gray-600">Voz Dinámica</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source src={dinamica} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h4 className="text-gray-600">Voz Documental</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source src={documental} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {emotiva && ( 
          <div>
            <h4 className="text-gray-600">Voz de Emotiva</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source src={emotiva} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          )}

          <div>
            <h4 className="text-gray-600">Voz Informativa</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source src={informativa} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h4 className="text-gray-600">Voz Seductora</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source src={seductora} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {actuada && (
          <div>
            <h4 className="text-gray-600">Voz Actuada</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source src={actuada} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          )}

          {ingles && (
            <div>
              <h4 className="text-gray-600">Voz en Inglés</h4>
              <audio
                preload="none"
                className="my-3 mx-auto flex justify-center items-center"
                controls
              >
                <source src={ingles} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {alAire && (
            <div>
              <h4 className="text-gray-600">Voz Al Aire</h4>
              <audio
                preload="none"
                className="my-3 mx-auto flex justify-center items-center"
                controls
              >
                <source src={alAire} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {italian && (
            <div>
              <h4 className="text-gray-600">Voz Al Aire</h4>
              <audio
                preload="none"
                className="my-3 mx-auto flex justify-center items-center"
                controls
              >
                <source src={alAire} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {jingle && (
            <div>
              <h4 className="text-gray-600">Jingle</h4>
              <audio
                preload="none"
                className="my-3 mx-auto flex justify-center items-center"
                controls
              >
                <source src={jingle} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
