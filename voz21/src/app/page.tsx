import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Nosotros /> */}
    </>
  );
}
