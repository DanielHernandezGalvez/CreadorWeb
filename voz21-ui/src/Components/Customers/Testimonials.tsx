import React from "react";
import "./testimonial.css";

const Testimonials: React.FC = () => {
  return (
    <>
     <h3 className="text-center my-10 text-4xl font-bold text-gray-600" >Testimonios</h3>
      <div className="testimonial">
       
        <div className="card">
          <div className="layer"></div>
          <div className="content">
          <h2 className="text-gray-600 font-bold text-3xl">Ricardo Hernández</h2> <br />{" "}

            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
      
            <div className="details">
              <span>Web Designer</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="layer"></div>
          <div className="content">
          <h2 className="text-gray-700 font-bold  text-3xl">Sonia Orozco</h2> <br />{" "}

            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          
            <div className="details">
              <span>Graphic Designer</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="layer"></div>
          <div className="content">
          <h2 className="text-gray-700 font-bold  text-3xl">Kiara Hdz. Gálvez</h2>{" "}

            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          
      
            <div className="details">
              <span>Product Designer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
