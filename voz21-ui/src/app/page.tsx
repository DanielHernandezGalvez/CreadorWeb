"use client"
import React, { useState } from "react";
import Head from "next/head";
import Navigation from "../Components/Navigation/Navigation";
import { Header } from "@/Components/Header/Header";
import { About } from "@/Components/About/About";
import Catalogue from "@/Components/Catalogue/Catalogue";
import Customers from "@/Components/Customers/Customers";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import WhatsAppIcon from "@/Components/WhatsAppIcon/WhatsAppIcon";
import Gallery from "@/Components/Gallery/Gallery";

type Section = "inicio" | "servicios" | "catalogo" | "locutores" | "directora";

export default function Home() {
  const [inicio, setInicio] = useState(true);
  const [servicios, setServicios] = useState(false);
  const [catalogo, setCatalogo] = useState(false);
  const [locutores, setLocutores] = useState(false);
  const [directora, setDirectora] = useState(false);

  const handleSectionChange = (section: Section) => {
    // Resetea todos los estados a false
    setInicio(false);
    setServicios(false);
    setCatalogo(false);
    setLocutores(false);
    setDirectora(false);

    // Establece el estado correspondiente en función de la sección
    if (section === "inicio") {
      setInicio(true);
    } else if (section === "servicios") {
      setServicios(true);
    } else if (section === "catalogo") {
      setCatalogo(true);
    } else if (section === "locutores") {
      setLocutores(true);
    } else if (section === "directora") {
      setDirectora(true);
    }
  };

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
        <Navigation  />
        <WhatsAppIcon />
        <Header subtitle="Tu Voz" linkText="Ver Catálogo" linkUrl="#catalogue" />
        <About />
        <Catalogue />
         <Customers />
         <Contact />
        <Gallery />
         <Footer />
        <Customers />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
