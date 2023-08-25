import Navigation from "@/Components/Navigation/Navigation";
import React from "react";
import { Header } from "@/Components/Header/Header";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import WhatsAppIcon from "@/Components/WhatsAppIcon/WhatsAppIcon";

const page = () => {
  return (
    <>
      <Navigation />
      <Header
        subtitle="Cursos y Talleres"
        linkText="Ver Cursos"
        linkUrl="#cursos"
      />
      <WhatsAppIcon />
      <div
        id="cursos"
        className="h-screen bg-gray-200 flex justify-center items-center text-5xl"
      >
        <h1>Aqui van los cursos y talleres</h1>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default page;
