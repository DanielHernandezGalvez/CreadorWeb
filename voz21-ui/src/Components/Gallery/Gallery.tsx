"use client";
import "./gallery.css";
import Image from "next/image"; // Importa el componente Image de Next.js

const Gallery: React.FC = () => {
  const images = [
    { src: "/gallery/0501.jpeg", alt: "Image 1" },
    { src: "/gallery/0601.jpeg", alt: "Image 2" },
    { src: "/gallery/0705.jpeg", alt: "Image 3" },
    { src: "/gallery/0805.jpeg", alt: "Image 3" },
    { src: "/gallery/1404.jpeg", alt: "Image 3" },
    { src: "/gallery/1502.jpeg", alt: "Image 3" },
    { src: "/gallery/1601.jpeg", alt: "Image 3" },
    { src: "/gallery/1703.jpeg", alt: "Image 3" },
    { src: "/gallery/1801.jpeg", alt: "Image 3" },
    // Agrega más imágenes si es necesario
  ];

  return (
    <>
      <div className="container flex justify-center py-5 gap-10 flex-wrap">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
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
