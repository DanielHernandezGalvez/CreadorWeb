import React from "react";
import "./whatsapp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const WhatsAppIcon: React.FC = () => {
  return (
    <Link
      href="https://wa.me/5213335577482"
      className="whatsapp-icon  text-green-700"
      target="_blank"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </Link>
  );
};

export default WhatsAppIcon;
