import React from "react";
import Image from "next/image";
import Link from "next/link";

const Whatsapp: React.FC = () => {
  return (
    <div className="whatsapp">
      <Link href={"https://www.google.com"} passHref target="_blank">
        <Image
          src={"/whatsapp.png"}
          alt="WhatsApp Icon"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Whatsapp;
