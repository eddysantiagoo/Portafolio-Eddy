import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";

function EjemploRuta() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto py-12 w-full px-6 lg:px-0">
      <div className="relative h-96 w-full">
        <img
          src="https://i.imgur.com/zfMBgr0.jpg"
          alt="Imagen Andrés iniesta"
          className="rounded-xl absolute h-full w-full object-cover object-center sm:object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full h-full dark:bg-black/50 shadow-xl" />
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold mt-8">Don Iniesta</p>
        <div className="flex items-center gap-4 mt-2">
          <div>
            <i className="fas fa-clock text-zinc-400" />
            <span className="text-zinc-400 ml-2">3 minutos de lectura</span>
          </div>
          <div>
            <i className="fas fa-calendar-alt text-zinc-400" />
            <span className="text-zinc-400 ml-2">28 de Marzo de 2023</span>
          </div>
        </div>
        <article className="mt-12 prose prose-sm lg:prose-lg dark:prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline">
          <h2 className="text-[#EDBB00]">Sus inicios</h2>
          <strong>
            Nacido un 7 de Mayo del año 1984 en Fuentealbilla,
          </strong>{" "}
          fue ese el dia en que el mundo le dio la bienvenido a don Andrés
          Iniesta el cual ademas de ser muchas cosas también es un jugador de
          Futbol Profesional, formado en las inferiores del Albacete y despues
          llendose como agente libre con 12 años de edad hacia las inferiores
          del Futbol Club Barcelona en la temporada 1999-2000 para asi continuar
          con su formación como futbolista profesional. <br />
          <img
            src="https://img.vavel.com/b/Iniesta-as-child-andres-iniesta-lujan-16541072-452-615-1.jpg"
            alt=""
          />
          Su paso por el club Blaugrana fue espectacular, pero el mismo Andrés
          Iniesta ha confesado mas de una vez que al principio no fue sencillo,
          en ese tiempo escalar hacia el primer equipo era todo un reto, pero
          ahí estaba el pequeño chico de Fuentealbilla con todas las ganas de
          triunfar en el club blaugrana lo cual le permitio despues de mucho
          tiempo de disciplina, esfuerzo y dedidación a Andrés de tan solo 18
          años de edad tener la oportunidad de debutar en el primer equipo. Su
          debut fue un 29 de octubre del 2002 el club Culé se enfrentaba ante el
          Club Brujas, popular club de Belgica en la quinta jornada de la fase
          de grupos de la Liga de Campeones. Fue entonces cuando en ese partido
          el entrenador de esos tiempos Van Gaal, le dio la oportunidad al joven
          Iniesta para mostrar de que estaba hecho y el resto ya es historia.
          <img
            src="https://pictures.trbna.com/image/27f1b446-0f37-4c0b-aa81-9837fe15dbdf"
            alt=""
          />
          <h2 className="text-[#A50044]">Su trayectoria</h2>
          <strong>
            Lucio la camiseta del FC Barcelona por 16 temporadas del 2002 al
            2018{" "}
          </strong>
          formando un mediocampo mitico en la historia del futbol conformado
          por, Don Xavi Hernández y Don Sergio Busquets, en su palmares con el
          Club destacan:
          <ul>
            <li>4 Champions League (2006, 2009, 2011, 2015)</li>
            <li>3 Mundiales de clubes (2009, 2011, 2015)</li>
            <li>3 Supercopas de Europa (2009, 2011, 2015)</li>
            <li>9 de Ligas de España</li>
            <li>6 Copas del Rey</li>
            <li>7 Supercoas de España</li>
          </ul>
          <strong>
            Y sumando otros de sus titulos da un total de 32 titulos obtenidos.
          </strong>
          Yo personalmente me quedo con su mitica jugada "La croqueta", un
          ejemplo de la elegancia, calma y orden en el futbol. Y tambien no
          olvidar lo que paso en Londres mas especificamete en Stamford Bridge
          apodado "El Iniestazo"
          <img
            src="https://j.gifs.com/gJq6Kr.gif"
            alt="Iniesta haciendo su regate"
          />
          <h3 className="text-[#BA2123]">Seleccion Española de Futbol</h3>
          No me olvido yo de lo que paso en Sudáfrica, año 2010 11 de Julio,
          minuto 116, Estado Soccer City, ciudad Johannesburgo la llamada "Volea
          de iniesta", jugada iniciada por Jesús Navas, y que con la ayuda de
          Fernando Torres, y Cesc Fàbregas quien es quien le da la asistencia a
          don Andrés Iniesta para asi hacer su respectiva volea y mandar la
          pelotita hacia el fondo de la escuadra, dandole con este gol su primera
          y hasta el momento unica copa del mundo a España, epico señores.
          <img
            src="https://media2.giphy.com/media/SJGIKDvFojqn022kFU/giphy.gif?cid=ecf05e47ti6wl08bmxslv8v21jxiw0e0b5upra7c8gie0x83&rid=giphy.gif&ct=g"
            alt=""
          />
          <ul>
            <li>1 Mundial (2010)</li>
            <li>2 Eurocopas (2008, 2012)</li>
            <li>Europeo Sub-19</li>
            <li>Europeo Sub-17</li>
          </ul>
          <strong>
            Actualemente Iniesta juega en Japón en el Vissel Kobe, al momento de
            escribir este pequeño articulo aún sigue en activo, muchas gracias por tu
            juego con la pelotita don Andrés Iniesta Luján, siempre te llevare
            en mis memorias y en mi kokoro{" "}
            <i class="fa-solid fa-heart text-red-400 "></i>
          </strong>
        </article>
      </div>
    </div>
  );
}

export default EjemploRuta;
