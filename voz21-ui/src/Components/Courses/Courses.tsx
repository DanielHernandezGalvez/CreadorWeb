import Image from "next/image";
import React from "react";
import CourseCard from "./CourseCard";

const Courses: React.FC = () => {
  return (
    <div id="cursos" className="bg-gray-200 p-8">
      <div className="container mx-auto mt-8">
        <h1 className="text-5xl text-gray-600 title font-bold text-center my-10">
          Cursos y Talleres
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-20 flex-wrap pt-10 pb-10">
          
          <CourseCard
            title="Taller de locución comercial"
            description="¿Quieres aprender a dominar la locución comercial con técnicas profesionales? Este taller es para ti. Impartido por la locutora profesional Nora García, con más de 15 años de experiencia en el medio. ¡Reserva tu lugar ahora y sé parte de esta experiencia única! Costo: $2500. Duración: 7 sesiones. Para más informes, contáctanos al 33 3557 7482. Col. Americana GDL"
            imageUrl="/courses/taller-1.jpg"
            video=""
          />

          <CourseCard
            title="Taller de manejo de cámara"
            description="Aprende a desenvolverte con seguridad mientras eres grabad@. Este taller está diseñado especialmente para que domines cómo proyectarte frente a cámara con confianza y naturalidad. Costo: $2500 7 sesiones de 2 horas cada una. Impartido por Nora García, locutora con más de 15 años de experiencia. Reserva tu lugar ahora. ¡No dejes pasar esta oportunidad de brillar frente a las cámaras! Para más informes, contáctanos: WhatsApp: 33 3557 7482"
            imageUrl="/courses/taller-2.jpg"
            video=""
          />

          <CourseCard
            title="Taller de actuación"
            description="¡Conviértete en el protagonista! Si siempre soñaste con actuar y expresar tus emociones en el escenario, este Taller de Actuación es para ti. Aprende a desarrollar personajes, dominar tu voz, tu cuerpo, y ganar confianza mientras disfrutas de un ambiente dinámico. ¿Qué te espera? Técnicas básicas de actuación. Improvisación y creatividad. Expresión corporal y manejo de emociones. Dinámicas grupales para fortalecer el trabajo en equipo. ¿Para quién está diseñado? Este taller está diseñado para personas que busquen explorar su creatividad, mejorar su expresión escénica y disfrutar del arte de actuar, sin importar su experiencia previa. ¿Quién imparte? Nora García, maestra y experta en medios de comunicación. Siete sesiones increíbles que cambiarán tu perspectiva. Costo: $2,500. Ubicación: Col. Americana."
            imageUrl="/courses/taller-3.jpg"
            video=""
          />

          <CourseCard
            title="Taller de podcast"
            description="¿Sueñas con crear tu propio podcast y compartir tus ideas con el mundo? ¡Este taller es para ti! En el Taller de Podcast aprenderás todo lo necesario para producir y lanzar tu proyecto. Aprenderás: •	Planificación y estructura de episodios. •	Uso de herramientas y software de grabación. •	Técnicas de edición y postproducción. •	Cómo promocionar y distribuir tu podcast. Detalles del taller: Duración: 7 sesiones. Precio: $2,500. Lugar: Col. Americana, Guadalajara. Imparte: Nora García, maestra y experta en medios de comunicación. ¡Reserva tu lugar y empieza a darle voz a tus ideas! Contacto: WhatsApp: 33 3557 7482"
            imageUrl="/courses/teller-4.jpg"
          />

          <CourseCard
            title="Taller de locución profesional"
            description="¿Quieres aprender a dominar la locución de forma profesional? Este taller es para ti. Impartido por Nora García, con más de 15 años de experiencia en el medio. ¡Inscribe tu voz! Costo: $2500 Para más informes, contáctanos al 33 3557 7482."
            imageUrl="/courses/taller-5.jpg"
            video=""
          />

          <CourseCard
            title="Taller de radionovela"
            description="Aprende todo sobre cómo ser un presentador de radionovela y practica profesionalmente. -$2,500 pesos por 7 sesiones. -Realizado en cabina profesional. -Impartido por Nora García, locutora con más de 15 años de experiencia Informes al whatsapp 33 3557 7482. Síguenos en Instagram: @voz21_ Página: www.voz21estudio.com Col. Americana."
            imageUrl="/courses/taller-6.jpg"
            video=""
          />

          <CourseCard
            title="Taller de radionovela"
            description="Aprende todo sobre cómo hacer doblaje y practica profesionalmente. -$2,500 pesos por 7 sesiones. -Realizado en cabina profesional. -Impartido por Nora García, locutora con más de 15 años de experiencia. Para más informes manda un whatsapp a 33 3557 7482. Síguenos en Instagram: @voz21_ Página: www.voz21estudio.com Col. Americana."
            imageUrl="/courses/taller-7.jpg"
            video=""
          />

        </div>
      </div>
    </div>
  );
};

export default Courses;
