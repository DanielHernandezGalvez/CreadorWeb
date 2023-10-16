import Image from "next/image";
import React from "react";
import CourseCard from "./CourseCard";

const Courses: React.FC = () => {
  return (
    <div id="cursos" className="bg-gray-200  p-8">
      <div className="container mx-auto mt-8">
        <h1 className="text-5xl text-gray-600 title font-bold  text-center my-10">Cursos y Talleres</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-20 flex-wrap pt-10 pb-10">
          <CourseCard
            title="Locucion comercial"
            description="Fechas"
            imageUrl="https://cdn.pixabay.com/photo/2016/11/29/03/42/mic-1867121_640.jpg"
          />
          <CourseCard
            title="Hablar en publico"
            description="Fechas y horarios"
            imageUrl="https://cdn.pixabay.com/photo/2016/11/23/18/05/concert-1854113_640.jpg"
          />
          <CourseCard
            title="Doblaje"
            description="Fechas y horarios"
            imageUrl="https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_640.jpg"
          />
          <CourseCard
            title="Doblaje avanzado"
            description="Fechas y horarios"
            imageUrl="https://cdn.pixabay.com/photo/2016/11/29/03/42/mic-1867121_640.jpg"
          />
          <CourseCard
            title="Produccion de radio"
            description="Fechas y horarios"
            imageUrl="https://cdn.pixabay.com/photo/2016/11/23/18/05/concert-1854113_640.jpg"
          />
          <CourseCard
            title="Loucion y produccion de podcast"
            description="Fechas y horarios"
            imageUrl="https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_640.jpg"
          />
          <CourseCard
            title="Conduccion de television"
            description="Fechas y horarios"
            imageUrl="https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_640.jpg"
          />
          <CourseCard
            title="Manejo de camara para redes sociales"
            description="Fechas y horarios"
            imageUrl="https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_640.jpg"
          />

          {/* Puedes agregar más tarjetas aquí según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default Courses;
