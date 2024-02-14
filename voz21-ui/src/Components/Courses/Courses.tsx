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
            title="Doblaje de voz"
            description="Aprende doblaje y actuación de voz con Nora García, locutora profesional con diversos programas radiofónicos exitosos en diversas frecuencias de FM. Sábados de 1 a 3 pm del 17/03/2024 al 30/03/2024."
            imageUrl="https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_640.jpg"
            date="17/03/2024 de 13:00 a 15:00 Hrs."
            video="/videos/curso-locucion.mp4"
          />
        <CourseCard
            title="Modelaje Profesional"
            description="Master Class impartida por Aned Rámirez, Top model expert. Chapultepec 140 Col. Americana el 17/01/2024 de 17:00 a 19:00 Hrs."
            imageUrl="/courses/modelaje.jpg"
            date="17/01/2024 de 17:00 a 19:00 Hrs."
          />
          <CourseCard
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
            title="Locucion y producción de Podcast"
            description="¿Quieres aprender todo sobre cómo iniciar y crear un pódcast de calidad profesional? Este taller es para ti. Incluye grabación profesional de tu primer episodio. Comienza el jueves 11 de enero al 22 de febrero."
            imageUrl="/courses/podcast.jpg"
            date="11/01/2024"
          />
          <CourseCard
            title="Taller de ventas y manejo de voz"
            description="Aprende las mejores estrategias para vender. Conoce todas las herramientas para causar impacto con el buen uso y manejo de tu voz para obtener éxito en el mundo de las ventas. Iniciamos el 06/01/2024 de 9:00 a 11:00 Hrs."
            imageUrl="/courses/ventas.jpg"
            date="11/01/2024"
          />
          <CourseCard
            title="Hablar en publico"
            description="Próximamente"
            imageUrl="/hero/hablarenpublico.jpg"
            date="Próximamente"
          />
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

          {/* Puedes agregar más tarjetas aquí según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default Courses;
