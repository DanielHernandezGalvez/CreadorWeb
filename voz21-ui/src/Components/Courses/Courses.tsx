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
            title="Locucion comercial"
            description="Próximamente"
            imageUrl="https://cdn.pixabay.com/photo/2016/11/29/03/42/mic-1867121_640.jpg"
            date="Próximamente"
          />
          <CourseCard
            title="Hablar en publico"
            description="Próximamente"
            imageUrl="/hero/hablarenpublico.jpg"
            date="Próximamente"
          />
          <CourseCard
            title="Doblaje"
            description="Próximamente"
            imageUrl="https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_640.jpg"
            date="Próximamente"
          />
          <CourseCard
            title="Doblaje avanzado"
            description="Próximamente"
            imageUrl="/hero/bg1.jpg"
            date="Próximamente"
          />
          <CourseCard
            title="Produccion de radio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio 
            voluptates cumque culpa magnam ad autem repellendus, deleniti dolor dignissimos 
            totam ratione debitis inventore at iure ipsam ut maiores nesciunt eos."
            imageUrl="https://cdn.pixabay.com/photo/2016/11/23/18/05/concert-1854113_640.jpg"
            date="Próximamente"
          />
          <CourseCard
            title="Loucion y produccion de podcast"
            description="Próximamente"
            imageUrl="/hero/bg2.JPG"
            date="Próximamente"
          />
          <CourseCard
            title="Conduccion de televisión"
            description="Próximamente"
            imageUrl="/hero/bg6.JPG"
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
