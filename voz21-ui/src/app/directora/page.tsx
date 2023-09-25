import { Header } from "@/Components/Header/Header";
import Navigation from "@/Components/Navigation/Navigation";
import Presentation from "@/Components/Nora/Presentation";
import React from "react";

const page = () => {
  return (
    <div>
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
