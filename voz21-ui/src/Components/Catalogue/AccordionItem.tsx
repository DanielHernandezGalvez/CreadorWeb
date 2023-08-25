"use client";
import React, { useState } from "react";
import "./catalogue.css";
import { AccordionItemProps } from "@/interfaces/AccordionItemProps";

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
        <h3 className="text-lg font-bold  text-gray-600">{title}</h3>
        <span className="text-gray-600">
          {isOpen ? "Cerrar" : "Escuchar más"}
        </span>
      </div>
      <h4 className="text-gray-600 ms-3">Voz institucional</h4>

      <div
        id="main-audio"
        className="my-3 mx-auto flex justify-center items-center"
      >
        <audio controls preload="none">
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {isOpen && (
        <div className="p-3">
          <p>{content}</p>

          <div>
            <h4 className="text-gray-600">Voz Emotiva</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source
                src="/audios/AlexDiablo/ALEX(DIABLO)EMOTIVAFINAL.wav"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h4 className="text-gray-600">Voz Dinámica</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source
                src="/audios/AlexDiablo/ALEX(DIABLO)DINAMICAFINAL.wav"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h4 className="text-gray-600">Voz de Doblaje</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source
                src="/audios/AlexDiablo/ALEX(DIABLO)ACTUADAFINAL.wav"
                type="audio/mpeg"
              />
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
              <source
                src="/audios/AlexDiablo/ALEX(DIABLO)SEDUCTORAFINAL.wav"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h4 className="text-gray-600">Voz Informativa</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source
                src="/audios/AlexDiablo/ALEX(DIABLO)INFORMATIVAFINAL.wav"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h4 className="text-gray-600">Voz Inglés</h4>
            <audio
              preload="none"
              className="my-3 mx-auto flex justify-center items-center"
              controls
            >
              <source
                src="/audios/AlexDiablo/ALEX(DIABLO)INGLESFINAL.wav"
                type="audio/mpeg"
              />
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
              <source
                src="/audios/AlexDiablo/ALEX(DIABLO)DOCUMENTAL.wav"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
