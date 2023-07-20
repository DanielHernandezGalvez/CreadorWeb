import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import Nosotros from "@/components/Nosotros";
import Catalogo from "@/components/catalogo/Catalogo";
import Clientes from "@/components/Clientes";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <Whatsapp />

      <Navbar />
      <Header />
      <Nosotros />
      <Catalogo />
      <Clientes />
      <Contacto />
      <Footer />
    </>
  );
}
