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
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-white  pb-10 mb-5">
      <h1 className="text-5xl text-gray-600 title text-center font-bold my-20 pt-20 mx-auto">
        Contáctanos
      </h1>
      <div id="icons-container">
        {/* <div className="icons ">
          <FontAwesomeIcon
            className="text-yellow-500 iconStyle"
            icon={faPhone}
          />
          <p className="text-gray-500">Telefono</p>
        </div> */}
        <div className="icons">
          <Link href="mailto:voz21alaire@gmail.com">
            <FontAwesomeIcon
              className="text-yellow-500 iconStyle"
              icon={faEnvelope}
            />
          </Link>
          <p className="text-gray-500">correo</p>
        </div>
        <div className="icons">
          <Link href="https://www.facebook.com/detonadorRadio" >
            <FontAwesomeIcon
              className="text-yellow-500 iconStyle"
              icon={faFacebook}
            />
          </Link>
          <p className="text-gray-500">Facebook</p>
        </div>
        <div className="icons">
          <Link href="https://www.instagram.com/voz21_/">
            <FontAwesomeIcon
              className="text-yellow-500 iconStyle"
              icon={faInstagram}
            />
          </Link>
          <p className="text-gray-500">Instagram</p>
        </div>
        <div className="icons">
          <Link href="https://www.tiktok.com/@voz.21">
            <FontAwesomeIcon
              className="text-yellow-500 iconStyle"
              icon={faTiktok}
            />
          </Link>
          <p className="text-gray-500">Tik tok</p>
        </div>
        <div className="icons">
          <Link href="https://wa.me/5213335577482">
          <FontAwesomeIcon
            className="text-yellow-500 iconStyle"
            icon={faWhatsapp}
          />
          </Link>
          <p className="text-gray-500">whatsapp</p>
        </div>
      </div>
      <div className="w-full h-96 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1109.766622938275!2d-103.36998104396514!3d20.677913507559893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1751515862861!5m2!1ses!2smx"
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
