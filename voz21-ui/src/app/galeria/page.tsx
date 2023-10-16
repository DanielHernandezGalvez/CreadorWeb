import React from "react";
import Head from "next/head";
import Navigation from "@/Components/Navigation/Navigation";
import WhatsAppIcon from "@/Components/WhatsAppIcon/WhatsAppIcon";
import { Header } from "@/Components/Header/Header";
import Gallery from "@/Components/Gallery/Gallery";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Head>
          <title>Voz 21</title>
          <meta
            name="description"
            content="Agencia de voces para locución y comerciales"
          />
        </Head>
        <Navigation />
        <WhatsAppIcon />
        <Header subtitle="Galería" linkText="Contáctanos" linkUrl="#contact" />

        <Gallery  />

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
