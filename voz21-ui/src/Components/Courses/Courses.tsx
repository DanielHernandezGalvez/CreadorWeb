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
          {/* <CourseCard
            title="Locución Comercial"
            description="Aprende a monetizar tu voz en nuestro taller de locución comercial, impartido por Nora García, Locutora profesional con más de 20 años de experiencia en el horario sabatino de 9:00 a 11:00 horas."
            imageUrl="/courses/locucion-comercial.jpg"
            date="04/05/2024 de 09:00 a 11:00 Hrs."
            video=""
          />
          <CourseCard
            title="Master Class Locución"
            description="Aprende todo sobre locución y radio con las locutoras profesionales Nora García de 106.FM, 96.3FM, 100.3Fm 13 10 AM junto con Brenda Tapia de Amor93.1FM"
            imageUrl="/courses/masterclass-locucion.jpg"
            date="07/05/2024 de 18:30 a 21:00 Hrs."
            video="" 
          />*/}

          <CourseCard
            title="Taller de Podcast"
            description="Hacer podcast es fácil, hacerlo bien requiere conocimiento. Conoce todos los elementos para generar contenidos creativos, interesantes y de calidad, utilizando tus mejores recursos técnicos y vocales. Inversión $3000 Cupo limitado"
            imageUrl="/courses/taller-podcast.jpg"
            date="04/06/2024 de 18:30 a 20:30 Hrs."
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
            title="Doblaje avanzado"
            description="Próximamente"
            imageUrl="/hero/bg1.jpg"
            date="Próximamente"
          />

          <CourseCard
            title="Manejo de camara para redes sociales"
            description="Próximamente"
            imageUrl="/hero/bg7.JPG"
            date="Próximamente"
          />

        </div>
      </div>
    </div>
  );
};

export default Courses;
