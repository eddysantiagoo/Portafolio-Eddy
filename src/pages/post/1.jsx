import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Image from "next/image";

function EjemploRuta() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto py-12 w-full px-6 lg:px-0">
      {/* SEO CON NEXT */}

      <NextSeo
        title="Iniesta"
        titleTemplate="Eddy | Blog personal %s"
        description="Descubre la historia del legendario jugador de fútbol Don Andrés Iniesta Luján y su carrera en el campo. Desde sus primeros días en las divisiones inferiores hasta sus logros más notables en la Selección Nacional de España."
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        keywords={[
          "iniesta eddy santiago",
          "articulo de eddy santiago",
          "articulo eddy iniesta",
        ]}
        openGraph={{
          type: "website",
          title: "Eddy | Blog personal articulo Iniesta",
          description: "Articulo sobre Don Andrés Iniesta Luján",
          images: [
            {
              // https://imgbox.io/ib/OnF4MYSLgD.png
              url: "https://imgbox.io/ib/RpTPU1Yjzi.png",
              width: 1440,
              height: 661,
              alt: "Imagen del blog",
            },
          ],
        }}
      />

      <div className="relative h-96 w-full">
        <img
          src="https://i.imgur.com/zfMBgr0.jpg"
          alt="Imagen Andrés iniesta"
          className="rounded-xl absolute h-full w-full object-cover object-center sm:object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full h-full dark:bg-black/10 shadow-xl" />
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold mt-8">Don Iniesta</p>
        <div className="flex items-center gap-4 mt-2">
          <div>
            <i className="fas fa-clock text-zinc-400" />
            <span className="text-zinc-400 ml-2">6 minutos de lectura</span>
          </div>
          <div>
            <i className="fas fa-calendar-alt text-zinc-400" />
            <span className="text-zinc-400 ml-2">28 de marzo de 2023</span>
          </div>
        </div>
        <article className="mt-12 prose prose-sm lg:prose-lg dark:prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline">
          <h2 className="text-[#EDBB00]">Sus inicios</h2>
          <strong>
            Nacido un 7 de mayo del año 1984 en Fuentealbilla,
          </strong>{" "}
          fue ese el día en que el mundo le dio la bienvenido a don Andrés
          Iniesta el cual además de ser muchas cosas también es un jugador de
          fútbol Profesional, formado en las inferiores del Albacete y después
          yéndose como agente libre con 12 años de edad hacia las inferiores del
          fútbol Club Barcelona en la temporada 1999-2000 para así continuar con
          su formación como fútbolista profesional. <br />
          <img
            src="https://img.vavel.com/b/Iniesta-as-child-andres-iniesta-lujan-16541072-452-615-1.jpg"
            alt="Imagen de Iniesta cuando era Joven"
          />
          Su paso por el club Blaugrana fue espectacular, pero el mismo Andrés
          Iniesta ha confesado mas de una vez que al principio no fue sencillo,
          en ese tiempo escalar hacia el primer equipo era todo un reto, pero
          ahí estaba el pequeño chico de Fuentealbilla con todas las ganas de
          triunfar en el club blaugrana lo cual le permitió después de mucho
          tiempo de disciplina, esfuerzo y dedicación a Andrés de tan solo 18
          años de edad tener la oportunidad de debutar en el primer equipo. Su
          debut fue un 29 de octubre del 2002 el club Culé se enfrentaba ante el
          Club Brujas, popular club de Bélgica en la quinta jornada de la fase
          de grupos de la Liga de Campeones. Fue entonces cuando en ese partido
          el entrenador de esos tiempos Van Gaal, le dio la oportunidad al joven
          Iniesta para mostrar de que estaba hecho y el resto ya es historia.
          <img
            src="https://pictures.trbna.com/image/27f1b446-0f37-4c0b-aa81-9837fe15dbdf"
            alt="Imagen de Andres Iniesta Debutando con el FC Barcelona"
          />
          <h2 className="text-[#A50044]">Su trayectoria</h2>
          <strong>
            Lucio la camiseta del FC Barcelona por 16 temporadas del 2002 al
            2018{" "}
          </strong>
          formando un medio campo mítico en la historia del fútbol conformado
          por, Don Xavi Hernández y Don Sergio Busquets, en su palmares con él
          Club destacan:
          <ul>
            <li>4 Champions League (2006, 2009, 2011, 2015)</li>
            <li>3 Mundíales de clubes (2009, 2011, 2015)</li>
            <li>3 Supercopas de Europa (2009, 2011, 2015)</li>
            <li>9 de Ligas de España</li>
            <li>6 Copas del Rey</li>
            <li>7 Supercoas de España</li>
          </ul>
          <strong>
            Y sumando otros de sus títulos da un total de 32 títulos obtenidos.
          </strong>
          Yo personalmente me quedo con su legendaria jugada "La croqueta", un
          ejemplo de la elegancia, calma y orden en el fútbol. Y también no
          olvidar lo que paso en Londres más específicamente en Stamford Bridge
          apodado "El Iniestazo"
          <img
            src="https://j.gifs.com/gJq6Kr.gif"
            alt="Iniesta haciendo su regate"
          />
          <h3 className="text-[#BA2123]">Selección Española de fútbol</h3>
          <p>
            No me olvido yo de lo que paso en Sudáfrica, año 2010 11 de julio,
            minuto 116, Estadio Soccer City, ciudad Johannesburgo la llamada
            "Volea de iniesta", jugada iniciada por Jesús Navas, y que con la
            ayuda de Fernando Torres, y Cesc Fàbregas quien es quien le da la
            asistencia a don Andrés Iniesta para así hacer su respectiva volea y
            mandar la pelotita hacia el fondo de la escuadra, dándole con este
            gol su primera y hasta el momento única copa del mundo a España,
            épico señores.
          </p>
          <img
            src="https://media2.giphy.com/media/SJGIKDvFojqn022kFU/giphy.gif?cid=ecf05e47wzz0ipxw2gbegptq49641esgqx1cnscapskkc0bk&rid=giphy.gif&ct=g"
            alt="Gif de iniesta que con su gol le daba la copa del mundo a españa"
          />
          <ul>
            <li>1 Mundíal (2010)</li>
            <li>2 Eurocopas (2008, 2012)</li>
            <li>Europeo Sub-19</li>
            <li>Europeo Sub-17</li>
          </ul>
          <h3 className="text-[#EDBB00]">Un poco sobre la propia persona</h3>
          <p>
            Además de ser un gran jugador de fútbol al igual que todos nosotros
            ha tenido algunos altibajos en su vida, personalmente recuerdo una
            de sus declaraciones haciendo alusión hacia la depresión que sufrió
            durante un tiempo, Iniesta dijo:
          </p>
          <p class="italic text-base">
            {" "}
            <strong>
              Cuando estaba luchando contra la depresión, el mejor momento del
              día era cuando tomaba mis pastillas y me acostaba. Perdí las ganas
              de vivir. Abracé a mi esposa, pero era como abrazar una almohada.
              No sientes nada, dijo Iniesta en el podcast The Wild Proyect.{" "}
            </strong>
          </p>
          <p>
            Estas declaraciones vienen a que en 2009 (Un año antes del mundíal
            de Sudáfrica 2010) fue el año en el que su amigo Dani Jarque,
            jugador del Espanyol, murió a causa de un infarto.
          </p>
          <img
            src="https://i.imgur.com/cdTQEEB.jpg"
            alt="Imagen de iniesta con el nombre de Dani Harker en su camiseta"
          />
          <hr />
          <strong>
            Actualmente Iniesta juega en Japón en el Vissel Kobe, al momento de
            escribir este pequeño artículo aún sigue en activo, muchas gracias
            por tu juego con la pelotita don Andrés Iniesta Luján, siempre te
            llevaré en mis memorias y en mi kokoro{" "}
            <i class="fa-solid fa-heart text-red-400 animate__animated animate__heartBeat animate__infinite"></i>
          </strong>
        </article>
      </div>
      <div>
        <i class="fa-sharp fa-solid fa-ghost mr-2 mt-10 fa-xl" />
        Articulo redactado por un FIFA
      </div>
    </div>
  );
}

export default EjemploRuta;
