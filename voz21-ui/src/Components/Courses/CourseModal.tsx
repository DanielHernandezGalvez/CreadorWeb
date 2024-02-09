// components/CourseModal.js
import React from "react";
import Link from "next/link";

interface CourseModalProps {
  title: string;
  description: string;
  imageUrl: string;
  date?: string;

  closeModal: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({
  title,
  description,
  date,
  imageUrl,
  closeModal,

}) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Verifica si el clic se realizó en el fondo del modal y cierra el modal
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto mt-12 mx-6">
      {/* Fondo del modal */}
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={handleBackdropClick}
      ></div>

      {/* Caja del modal */}
      <div className="relative mx-auto p-4 bg-gray-100 rounded-lg shadow-xl transition-all transform">
        {/* Contenido del modal */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-96 max-h-64 overflow-hidden rounded-xl mt-20">
            <img
              src={imageUrl}
              alt={title}
              className="w-96 h-72 object-cover "
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 my-5">{title}</h2>
          <p className="text-gray-200 ">{date}</p>
          <p className="text-gray-600 mt-5 px-2 text-justify text-pretty">
            {description}
          </p>
          <Link
            href="https://wa.me/5213335577482"
            className="bg-yellow-500 text-white font-bold p-2 rounded-lg transition
             hover:text-yellow-500 hover:bg-gray-500 my-5"
            target="_blank"
          >
            INSCRIBIRSE
          </Link>
        </div>
        <button onClick={closeModal} className="absolute top-2 p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevrons-left ps-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="rgb(234 179 8)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 7l-5 5l5 5" />
            <path d="M17 7l-5 5l5 5" />
          </svg>{" "}
          <span className="uppercase font-bold text-yellow-500 p-0">
            Volver
          </span>
        </button>
      </div>
    </div>
  );
};

export default CourseModal;
