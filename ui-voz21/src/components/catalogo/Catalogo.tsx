import Card from "./Card";
import audioData from "./data"; // Asegúrate de tener la ruta correcta al archivo audioData.ts
import audio1 from "../../assets/audios/inicio/audio1.mp3";
import audio2 from "../../assets/audios/inicio/audio2.mp3";
import audio3 from "../../assets/audios/inicio/audio3.mp3";
export default function Catalogo() {
  return (
    <section className="section2">
      <h2 className="subtitulo">Catálogo de Voces</h2>
      <div className="card-container">
        <Card
          key={audioData[0].id}
          number={audioData[0].number}
          description={audioData[0].description}
          audio={audio1}
          url={audioData[0].url}
        />
        <Card
          key={audioData[1].id}
          number={audioData[1].number}
          description={audioData[1].description}
          audio={audio2}
          url={audioData[1].url}
        />
        <Card
          key={audioData[2].id}
          number={audioData[2].number}
          description={audioData[2].description}
          audio={audio3}
          url={audioData[2].url}
        />
        <Card
          key={audioData[0].id}
          number={audioData[0].number}
          description={audioData[0].description}
          audio={audio1}
          url={audioData[0].url}
        />
      </div>
    </section>
  );
}
