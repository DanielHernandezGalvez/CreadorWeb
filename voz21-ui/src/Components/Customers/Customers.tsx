import React from "react";
import Carrousel from "./Carrousel";
import Testimonials from "./Testimonials";

const Customers: React.FC = () => {
  return (
    <div className="bg-gray-100 pb-10 sm:pb-5">
      <h1 className="text-5xl text-gray-600 title text-center font-bold my-20 pt-20 mx-auto">
        Clientes
      </h1>
      <Carrousel />
      <Testimonials />
    </div>
  );
};

export default Customers;
