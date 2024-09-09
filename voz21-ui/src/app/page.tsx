"use client";
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
import FirstLayout from "@/Components/FirstLayout/FirstLayout";
import Presentation from "@/Components/Nora/Presentation";
import Services from "@/Components/Services/Services";
import Courses from "@/Components/Courses/Courses";
import logo from "/images/logo.png";
import Image from "next/image";
import PhotoStudio from "@/Components/PhotoStudio/PhotoStudio";

// type Section = "inicio" | "servicios" | "catalogo" | "locutores" | "directora";

export default function Home() {
  const [inicio, setInicio] = useState(true);
  const [servicios, setServicios] = useState(false);
  const [catalogo, setCatalogo] = useState(false);
  const [galeria, setGaleria] = useState(false);
  const [directora, setDirectora] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviciosDropdownOpen, setServiciosDropdownOpen] = useState(false);

  const toggleState = (
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setInicio(false);
    setServicios(false);
    setCatalogo(false);
    setGaleria(false);
    setDirectora(false);
    stateSetter(true);
    setMenuOpen((prevMenuOpen) => !prevMenuOpen); // Invierte el estado del menú
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
        <nav
          className={`absolute z-50 flex justify-between nav-color items-center text-white pt-5 w-full ${
            menuOpen ? "show" : ""
          }`}
        >
          <div className="flex items-center w-full">
            <Image
              className="h-8 w-auto mx-10"
              src="/images/logo-white.png"
              alt="Your Company"
              width={80}
              height={30}
            />
            <div className="hidden md:flex">
              <button className="me-5" onClick={() => toggleState(setInicio)}>
                Inicio
              </button>
              <button
                className="me-5"
                onClick={() => toggleState(setServicios)}
              >
                Cursos
              </button>
              <button className="me-5" onClick={() => toggleState(setCatalogo)}>
                Catálogo
              </button>
              <button className="me-5" onClick={() => toggleState(setGaleria)}>
                Locutores
              </button>
              <button
                className="me-5"
                onClick={() => toggleState(setDirectora)}
              >
                Nora García
              </button>
            </div>
          </div>

          <div
            className="burger-button  justify-end md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`md:hidden flex-col ${menuOpen ? "flex" : "hidden"}`}>
            <button className="my-1" onClick={() => toggleState(setInicio)}>
              Inicio
            </button>
            <button className="my-1" onClick={() => toggleState(setServicios)}>
              Cursos
            </button>
            <button className="my-1" onClick={() => toggleState(setCatalogo)}>
              Catálogo
            </button>
            <button className="my-1" onClick={() => toggleState(setGaleria)}>
              Locutores
            </button>
            <button className="my-1" onClick={() => toggleState(setDirectora)}>
              Nora García
            </button>
            
          </div>
          {/* servicios */}
          {/* <div className={`md:hidden flex-col ${menuOpen ? "flex" : "hidden"}`}> */}

          <button
            className="lg:me-5 md:me-5 sm:me-5 xs:me-5"
            onClick={() => {
              setServiciosDropdownOpen(!serviciosDropdownOpen);
            }}
          >
            Servicios
          </button>
          {serviciosDropdownOpen && (
            <div className="dropdown-menu nav-color-drop lg:absolute md:absolute lg:right-0 md:right-0 lg:top-16 md:top-16 sm:relative sm:right-auto xs:relative xs:right-auto bg-white opacity-96 mt-2 w-96 rounded-md shadow-md z-40">
              <a
                href="http://servicios.voz21estudio.com/"
                className="block px-4 w-100 py-2 text-white font-bold hover:bg-gray-400"
              >
                capacitación empresarial
              </a>
              <a
                href="https://servicios.voz21estudio.com/foto.html"
                className="block px-4 py-2 text-white font-bold hover:bg-gray-400"
              >
                Fotografía profesional
              </a>
            </div>
          )}
          {/* </div> */}

          {/* servicios */}
        </nav>
        {/* <Navigation /> */}
        <WhatsAppIcon />

        {inicio && (
          <>
            <Header
              subtitle="Tu Voz"
              linkText="Conócenos"
              linkUrl="#bienvenido"
              backgroundImageProps="/hero/bg2.JPG"
            />
            <FirstLayout />
            <Services />
            {/* agregados */}
            <PhotoStudio />
            {/* agregados */}
            <Catalogue />
            <Courses />
            <Customers />
          </>
        )}

        {servicios && (
          <>
            <Header
              subtitle="Cursos y Diplomados"
              linkText="Ver Oferta"
              linkUrl="#cursos"
              backgroundImageProps="/hero/bg1.jpg"
            />
            <Courses />
          </>
        )}

        {catalogo && (
          <>
            <Header
              subtitle="Catálogo de Locutores"
              linkText="Escuchar voces"
              linkUrl="#catalogue"
              backgroundImageProps="/hero/bg6.JPG"
            />

            <Catalogue />
          </>
        )}

        {galeria && (
          <>
            <Header
              subtitle="Nuestros Locutores"
              linkText="Conócenos"
              linkUrl="#gallery"
              backgroundImageProps="/hero/bg7.JPG"
            />
            <Gallery />
          </>
        )}

        {directora && (
          <>
            <Header
              subtitle="Nora García"
              linkText="Conócela"
              linkUrl="#Nora"
              backgroundImageProps="/hero/bg5.JPG"
            />
            <Presentation />
          </>
        )}

        <Contact />
        <Footer />
      </div>
    </>
  );
}
