import React from "react";
import "./testimonial.css";

const Testimonials: React.FC = () => {
  return (
    <>
      <h3 className="text-center my-10 text-4xl font-bold text-gray-600">
        Testimonios
      </h3>
      <div className="testimonial">
        <div className="card">
          <div className="layer"></div>
          <div className="content">
            <h2 className="text-gray-600 font-bold text-3xl">
              Daniel Gálvez
            </h2>{" "}
            <br />{" "}
            <video  controls preload="none">
              <source src="/videos/danielgalves.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
            {/* <div className="details">
              <span>Web Designer</span>
            </div> */}
          </div>
        </div>

      {/*  <div className="card">
          <div className="layer"></div>
          <div className="content">
            <h2 className="text-gray-700 font-bold  text-3xl">Pepe Nuño</h2>{" "}
            <br />{" "}
            <video  controls preload="none">
              <source src="/videos/pepenuno.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
             <div className="details">
              <span>Graphic Designer</span>
            </div> 
          </div>
        </div>*/}

        <div className="card">
          <div className="layer"></div>
          <div className="content">
            <h2 className="text-gray-700 font-bold  text-3xl">
            Alejandro Caspe
            </h2>{" "}
            <video  controls preload="none">
              <source src="/videos/testimonio3.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
            {/* <div className="details">
              <span>Product Designer</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
