import React from "react";
import Head from "next/head";
import Navigation from "@/Components/Navigation/Navigation";
import WhatsAppIcon from "@/Components/WhatsAppIcon/WhatsAppIcon";
import { Header } from "@/Components/Header/Header";
import Gallery from "@/Components/Gallery/Gallery";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Catalogue from "@/Components/Catalogue/Catalogue";

const page = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Head>
          <title>Voz 21</title>
          <meta
            name="Catálogo de voces"
            content="Agencia de voces para locución y comerciales"
          />
        </Head>
        <Navigation />
        <WhatsAppIcon />
        <Header
          subtitle="Catálogo de Voces"
          linkText="Contáctanos"
          linkUrl="#contact"
          backgroundImage="/hero/bg7.JPG"
        />

        <Catalogue />

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
