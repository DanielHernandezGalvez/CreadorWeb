import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 text-center mt-5 bottom-0 w-full ">
      <p>&copy; {currentYear} Todos los derechos reservados Voz 21</p>
    </footer>
  );
};

export default Footer;
