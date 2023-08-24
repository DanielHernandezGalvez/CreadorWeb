import React from "react";
import "./whatsapp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppIcon: React.FC = () => {
  return (
    <div className="whatsapp-icon">
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
};

export default WhatsAppIcon;
