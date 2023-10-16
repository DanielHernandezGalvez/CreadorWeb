import { Header } from "@/Components/Header/Header";
import Navigation from "@/Components/Navigation/Navigation";
import Presentation from "@/Components/Nora/Presentation";
import React from "react";
import Head from "next/head";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import WhatsAppIcon from "@/Components/WhatsAppIcon/WhatsAppIcon";

const page = () => {
  return (
    <div>
      <Head>
        <title>Voz 21</title>
        <meta
          name="description"
          content="Agencia de voces para locución y comerciales"
        />
      </Head>
      <Navigation />
      <WhatsAppIcon />
      <Header subtitle="Directora" linkText="Nora García" linkUrl="#nora" />
      <Presentation />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
