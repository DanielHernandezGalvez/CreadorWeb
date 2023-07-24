import React from "react";
import wa from "../assets/whatsapp.png";

const Whatsapp: React.FC = () => {
  return (
    <div className="whatsapp">
      <a href={"https://www.google.com"} target="_blank">
        <img src={wa} alt="WhatsApp Icon" width={50} height={50} />
      </a>
    </div>
  );
};

export default Whatsapp;
