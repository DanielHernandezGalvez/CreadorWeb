import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-white  pb-10 mb-5">
      <h1 className="text-5xl text-gray-600 title text-center font-bold my-20 pt-20 mx-auto">
        Contáctanos
      </h1>
      <div id="icons-container">
        <div className="icons ">
          <FontAwesomeIcon
            className="text-yellow-500 iconStyle"
            icon={faPhone}
          />
          <p className="text-gray-500">Telefono</p>
        </div>
        <div className="icons">
          <FontAwesomeIcon
            className="text-yellow-500 iconStyle"
            icon={faEnvelope}
          />
          <p className="text-gray-500">correo</p>
        </div>
        <div className="icons">
          <FontAwesomeIcon
            className="text-yellow-500 iconStyle"
            icon={faFacebook}
          />
          <p className="text-gray-500">Facebook</p>
        </div>
        <div className="icons">
          <FontAwesomeIcon
            className="text-yellow-500 iconStyle"
            icon={faInstagram}
          />
          <p className="text-gray-500">Instagram</p>
        </div>
        <div className="icons">
          <FontAwesomeIcon
            className="text-yellow-500 iconStyle"
            icon={faTiktok}
          />
          <p className="text-gray-500">Tik tok</p>
        </div>
        <div className="icons">
          <FontAwesomeIcon
            className="text-yellow-500 iconStyle"
            icon={faWhatsapp}
          />
          <p className="text-gray-500">whatsapp</p>
        </div>
      </div>
      <div className="w-full h-96 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7752267518463!2d-103.3685103!3d20.6787217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae1a5f491ce1%3A0x42105a2009e2270!2sAv.%20Chapultepec%20Nte.%20140-interior%20202%2C%20Ladr%C3%B3n%20de%20Guevara%2C%20Americana%2C%2044600%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1692895531736!5m2!1ses!2smx"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
