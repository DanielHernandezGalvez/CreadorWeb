// components/CourseModal.js
import React from "react";

interface CourseModalProps {
  title: string;
  description: string;
  imageUrl: string;
  closeModal: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({
  title,
  description,
  imageUrl,
  closeModal,
}) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      {/* Fondo del modal */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      {/* Caja del modal */}
      <div className="relative mx-auto p-4 bg-white rounded-lg shadow-xl transition-all transform">
        {/* Contenido del modal */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-96 max-h-32 overflow-hidden">
            <img src={imageUrl} alt={title} className="w-96 h-72 object-cover" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <button onClick={closeModal} className="absolute top-0  p-5 ">
          <span className="text-5xl mt-5 text-red-600">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default CourseModal;
