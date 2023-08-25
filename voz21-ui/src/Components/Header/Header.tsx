import React from "react";
import "./header.css";
import Link from "next/link";
import { HeaderProps } from "@/interfaces/HeaderProps";

export const Header: React.FC<HeaderProps> = ({
  subtitle,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="main-header ">
      <h1 className="main-header-title font-bold text-center text-white">
        Voz <span className="text-yellow-500">21</span>
      </h1>
      <h2 className="text-white  text-4xl mb-10">{subtitle}</h2>
      <Link
        href={linkUrl}
        className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold rounded-xl transition duration-300"
      >
        {linkText}
      </Link>
    </div>
  );
};
