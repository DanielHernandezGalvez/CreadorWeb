import Image from "next/image";
import React from "react";
import CourseCard from "./CourseCard";

const Courses: React.FC = () => {
  return (
    <div id="cursos" className="bg-gray-200  p-8">
      <div className="container mx-auto mt-8">
        <h1 className="text-5xl text-gray-600 title font-bold  text-center my-10">
          Cursos y Talleres
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-20 flex-wrap pt-10 pb-10">
           <CourseCard
            title="Producción y comercialización de rádio"
            description="Costo 3000 pesos"
            imageUrl="/courses/taller-radio.jpg"
            // date="04/05/2024 de 09:00 a 11:00 Hrs."
            video=""
          />
          <CourseCard
            title="Aprende a hablar en público"
            description="Aprende a hablar en público con seguridad y éxito, sabados de 1 a 3 pm / 7 sesiones, inicia el 2 de agosto"
            imageUrl="/courses/hablar-en-publico.jpg"
            date="02/08/2024 de 13:00 a 15:00 Hrs."
            video="" 
          />

          <CourseCard
            title="Taller de Podcast"
            description="Hacer podcast es fácil, hacerlo bien requiere conocimiento. Conoce todos los elementos para generar contenidos creativos, interesantes y de calidad, utilizando tus mejores recursos técnicos y vocales. Inversión $3000 Cupo limitado"
            imageUrl="/courses/podcast.jpg"
            date="20/08/2024 de 19:00 a 21:00 Hrs."
            video=""
          />
          
          {/* <CourseCard
            title="Taller Producción de Radio"
            description="Aprende a diseñar escaletas, guiones radiofónicos, redacción en ritmo auditivo, uso de mezcladora e interfaces de sonido y tipos de software para grabación. Todas las clases son en estudio profesional. Crea y comercializa tu propio programa de radio."
            imageUrl="/courses/produccion-radio.jpg"
            date="Próximamente"
          />
          <CourseCard
            title="Taller de Locución Profesional"
            description="Lleva tu potencial al siguiente nivel con el taller de locución profesional impartido por Nora García, locutora profesional con diversos programas radiofónicos exitosos en diversas frecuencias de FM. Viernes de 6 a 8 pm del 12/01/2024 al 23/02/2024."
            imageUrl="/courses/locucion-profesional.jpg"
            date="12/01/2024 de 18:00 a 20:00 Hrs."
          />

          <CourseCard
            title="Taller de ventas y manejo de voz"
            description="Aprende las mejores estrategias para vender. Conoce todas las herramientas para causar impacto con el buen uso y manejo de tu voz para obtener éxito en el mundo de las ventas. Iniciamos el 06/01/2024 de 9:00 a 11:00 Hrs."
            imageUrl="/courses/ventas.jpg"
            date="11/01/2024"
          /> */}
          {/* <CourseCard
            title="Hablar en publico"
            description="Próximamente"
            imageUrl="/hero/hablarenpublico.jpg"
            date="Próximamente"
          /> */}

          <CourseCard
            title="MasterClass Locución"
            description="Aprende lucución de la mano de dos locutoras profesionales con más de 20 años de experiencia en el medio, jueves y viernes de 7 a 9 pm, costo de 3000 pesos"
            imageUrl="/courses/masterclass-locucion.jpg"
            date="01/08/2024 de 19:00 a 21:00 hrs."
          />

          <CourseCard
            title="Taller de doblaje de voz"
            description="Aprende doblaje de una manera profesional y divertida, sábados de 11 a 1 pm 7 sesiones"
            imageUrl="/courses/doblaje.jpg"
            date="03/08/2024"
          />
          <CourseCard
            title="Locución profesional"
            description="Aprende lucución de la mano de una locutora profesional con más de 20 años de experiencia en el medio, viernes de 7 a 9 pm, costo de 3000 pesos"
            imageUrl="/courses/locucion-pro.png"
            date="03/08/2024"
            video="/videos/locucion-profesional.mp4"
          />

        </div>
      </div>
    </div>
  );
};

export default Courses;
