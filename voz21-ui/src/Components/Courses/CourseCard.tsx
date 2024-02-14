// components/Card.js
"use client"
import React, { useState } from "react";
import { CoursesProps } from "@/interfaces/CoursesProps";
import CourseModal from "./CourseModal";

const CourseCard: React.FC<CoursesProps> = ({
  title,
  description,
  imageUrl,
  date,
  link,
  video,
}) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(to right, #0000008b, #0000008b 40%), url(${imageUrl}) `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-4 
        ${window.innerWidth > 1200 ? 'w-80 h-80' : 'w-40 h-40'}` 
        overflow-hidden transition-transform transform scale-100 
        hover:scale-105 "
        style={cardStyle}
      >
        <div className="bg-opacity-75 rounded-t-lg  p-4">
          <div className=" ">
            <div className="md:py-5 md:my-5 lg:py-20 lg:my-20 space-y-5 sm:py-20 "></div>
            <h2 className="text-xl font-semibold text-white ">{title}</h2>
            {/* <p className="text-gray-200 ">{description}</p> */}
            <p className="text-gray-200 ">{date}</p>
            <button
              className="text-yellow-500 underline  underline-offset-4 font-medium"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CourseModal
          title={title}
          description={description}
          imageUrl={imageUrl}
          closeModal={() => setIsModalOpen(false)}
          video={video}
        />
      )}
    </>
  );
};

export default CourseCard;
