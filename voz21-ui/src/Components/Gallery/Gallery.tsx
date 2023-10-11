"use client";
import "./gallery.css";
import Image from "next/image"; // Importa el componente Image de Next.js
import {GalleryProps} from "@/interfaces/GalleryProps"
import locutoresData from "../../data/locutoresData.json"

const Gallery: React.FC<GalleryProps> = ({
  img
}) => {


  return (
    <>
      <div className="container flex justify-center py-5 gap-10 flex-wrap">
        {locutoresData.map((image, index) => (
          <Image
            key={index}
            src={image.img}
            alt="img"
            width={250}
            height={250}
            className="rounded-lg transition-transform transform scale-100 hover:scale-110"
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
