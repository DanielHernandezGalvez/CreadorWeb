import React from "react";
import "./header.css";
import Link from "next/link";
import { HeaderProps } from "@/interfaces/HeaderProps";
import Image from "next/image";
import logo from "/public/images/logo-grande-blanco.png";

export const Header: React.FC<HeaderProps> = ({
  subtitle,
  linkText,
  linkUrl,
  backgroundImageProps,
}) => {
  return (
    <div
      className="main-header "
      style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url("${backgroundImageProps}")` }}
    >
      {/* <Image width={100%}  src={logo} alt="voz21" /> */}
      <h1 className="main-header-title font-bold text-center text-white">
        Voz <span className="text-yellow">21</span>
      </h1>
      <h2 className="text-white  text-4xl mb-10">{subtitle}</h2>
      <Link
        href={linkUrl}
        className="inline-block px-6 py-3 bg-yellow text-white font-semibold rounded-xl transition duration-300"
      >
        {linkText}
      </Link>
    </div>
  );
};
