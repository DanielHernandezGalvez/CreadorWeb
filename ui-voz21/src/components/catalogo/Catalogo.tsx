import Card from "./Card";
import audioData from "./data"; // Asegúrate de tener la ruta correcta al archivo audioData.ts
import audio1 from "../../assets/audios/inicio/audio1.mp3";
import audio2 from "../../assets/audios/inicio/audio2.mp3";
import audio3 from "../../assets/audios/inicio/audio3.mp3";
import audio4 from "../../assets/audios/inicio/audio4.mp3";
import audio5 from "../../assets/audios/inicio/audio5.mp3";
import audio6 from "../../assets/audios/inicio/audio6.mp3";
import audio7 from "../../assets/audios/inicio/audio7.mp3";
import audio8 from "../../assets/audios/inicio/audio8.mp3";
import audio9 from "../../assets/audios/inicio/audio9.mp3";
import audio10 from "../../assets/audios/inicio/audio10.mp3";
import audio11 from "../../assets/audios/inicio/audio11.mp3";
import audio12 from "../../assets/audios/inicio/audio12.mp3";
import audio13 from "../../assets/audios/inicio/audio13.mp3";
import audio14 from "../../assets/audios/inicio/audio14.mp3";
import audio15 from "../../assets/audios/inicio/audio15.mp3";
import audio16 from "../../assets/audios/inicio/audio16.mp3";
import audio17 from "../../assets/audios/inicio/audio17.mp3";
import audio18 from "../../assets/audios/inicio/audio18.mp3";
import audio19 from "../../assets/audios/inicio/audio19.mp3";
import audio20 from "../../assets/audios/inicio/audio20.mp3";
import audio21 from "../../assets/audios/inicio/audio21.mp3";
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
          key={audioData[3].id}
          number={audioData[3].number}
          description={audioData[3].description}
          audio={audio4}
          url={audioData[3].url}
        />
        <Card
          key={audioData[4].id}
          number={audioData[4].number}
          description={audioData[4].description}
          audio={audio5}
          url={audioData[4].url}
        />
        <Card
          key={audioData[5].id}
          number={audioData[5].number}
          description={audioData[5].description}
          audio={audio6}
          url={audioData[5].url}
        />

        <Card
          key={audioData[6].id}
          number={audioData[6].number}
          description={audioData[6].description}
          audio={audio7}
          url={audioData[6].url}
        />

        <Card
          key={audioData[7].id}
          number={audioData[7].number}
          description={audioData[7].description}
          audio={audio8}
          url={audioData[7].url}
        />

        <Card
          key={audioData[8].id}
          number={audioData[8].number}
          description={audioData[8].description}
          audio={audio9}
          url={audioData[8].url}
        />

        <Card
          key={audioData[9].id}
          number={audioData[9].number}
          description={audioData[9].description}
          audio={audio10}
          url={audioData[9].url}
        />

        <Card
          key={audioData[10].id}
          number={audioData[10].number}
          description={audioData[10].description}
          audio={audio11}
          url={audioData[10].url}
        />

        <Card
          key={audioData[11].id}
          number={audioData[11].number}
          description={audioData[11].description}
          audio={audio12}
          url={audioData[11].url}
        />

        <Card
          key={audioData[12].id}
          number={audioData[12].number}
          description={audioData[12].description}
          audio={audio13}
          url={audioData[12].url}
        />

        <Card
          key={audioData[13].id}
          number={audioData[13].number}
          description={audioData[13].description}
          audio={audio14}
          url={audioData[13].url}
        />

        <Card
          key={audioData[14].id}
          number={audioData[14].number}
          description={audioData[14].description}
          audio={audio15}
          url={audioData[14].url}
        />

        <Card
          key={audioData[15].id}
          number={audioData[15].number}
          description={audioData[15].description}
          audio={audio16}
          url={audioData[15].url}
        />

        <Card
          key={audioData[16].id}
          number={audioData[16].number}
          description={audioData[16].description}
          audio={audio17}
          url={audioData[16].url}
        />

        <Card
          key={audioData[17].id}
          number={audioData[17].number}
          description={audioData[17].description}
          audio={audio18}
          url={audioData[17].url}
        />

        <Card
          key={audioData[18].id}
          number={audioData[18].number}
          description={audioData[18].description}
          audio={audio19}
          url={audioData[18].url}
        />

        <Card
          key={audioData[19].id}
          number={audioData[19].number}
          description={audioData[19].description}
          audio={audio20}
          url={audioData[19].url}
        />

        <Card
          key={audioData[20].id}
          number={audioData[20].number}
          description={audioData[20].description}
          audio={audio21}
          url={audioData[20].url}
        />
      </div>
    </section>
  );
}
