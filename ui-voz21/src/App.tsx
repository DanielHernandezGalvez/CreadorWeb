import "./App.css";
import Clientes from "./components/Clientes";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Whatsapp from "./components/Whatsapp";
import Catalogo from "./components/catalogo/Catalogo";
import Header from "./components/header/Header";
import Navbar from "./components/header/Navbar";

function App() {
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

export default App;
