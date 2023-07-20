import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import Nosotros from "@/components/Nosotros";
import Catalogo from "@/components/catalogo/Catalogo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Nosotros />
      <Catalogo />
    </>
  );
}
