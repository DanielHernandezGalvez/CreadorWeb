import Image from "next/image";
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

export default function Home() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Head>
          <title>Voz 21</title>
          <meta
            name="description"
            content="Agencia de voces para locucion y comerciales"
          />
        </Head>
        <Navigation />
        <WhatsAppIcon />
        <Header subtitle="Tu Voz" linkText="Ver Catálogo" linkUrl="#catalogue" />
        <About />
        {/* <Gallery /> */}
        <Catalogue />
        <Customers />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
