import { Header } from "@/Components/Header/Header";
import Navigation from "@/Components/Navigation/Navigation";
import Presentation from "@/Components/Nora/Presentation";
import React from "react";
import Head from "next/head";

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
      <Header
        subtitle="Directora"
        linkText="Nora García"
        linkUrl="#nora"
      />
      <Presentation />
    </div>
  );
};

export default page;
