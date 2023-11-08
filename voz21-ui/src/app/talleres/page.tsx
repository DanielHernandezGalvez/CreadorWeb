import Navigation from "@/Components/Navigation/Navigation";
import React from "react";
import { Header } from "@/Components/Header/Header";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import WhatsAppIcon from "@/Components/WhatsAppIcon/WhatsAppIcon";
import Courses from "@/Components/Courses/Courses";
import Head from "next/head";

const page = () => {
  return (
    <>
            <Head>
          <title>Voz 21</title>
          <meta
            name="description"
            content="Agencia de voces para locución y comerciales"
          />
        </Head>
      <Navigation />
      <Header
        subtitle="Cursos y Talleres"
        linkText="Ver Cursos"
        linkUrl="#cursos"
        backgroundImageProps="/hero/bg5.JPG"
      />
      <WhatsAppIcon />
  
      <Courses />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
