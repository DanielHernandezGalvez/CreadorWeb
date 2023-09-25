import Navigation from "@/Components/Navigation/Navigation";
import React from "react";
import { Header } from "@/Components/Header/Header";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import WhatsAppIcon from "@/Components/WhatsAppIcon/WhatsAppIcon";
import Courses from "@/Components/Courses/Courses";

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
  
      <Courses />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
