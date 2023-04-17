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
          src="/images/Pregunta.jpg"
          alt="Imagen Andrés iniesta"
          className="rounded-xl absolute h-full w-full object-cover object-center sm:object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full h-full dark:bg-black/10 shadow-xl" />
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold mt-8">
          ¿Cuál es la razon de este blog?
        </p>
        <div className="flex items-center gap-4 mt-2">
          <div>
            <i className="fas fa-clock text-zinc-400" />
            <span className="text-zinc-400 ml-2">6 minutos de lectura</span>
          </div>
          <div>
            <i className="fas fa-calendar-alt text-zinc-400" />
            <span className="text-zinc-400 ml-2">25 de marzo de 2023</span>
          </div>
        </div>
        <article className="mt-12 prose prose-sm lg:prose-lg dark:prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline">
          <h3>
            Preguntandole al famoso ChatGPT hace unos dias "Cuántos blogs crees
            que existen hoy en dia en la internet?"
          </h3>
          <br />
          Me dijo que: " Sin embargo, se estima que hay más de 500 millones de
          blogs en línea en la actualidad." Entonces, ¿Cuál seria la diferencia
          de que yo tenga este pequeño espacio aquí? Bueno la verdad es que ni
          yo la se.
          <br />
          <br />
          No me dedico a la escritura, ni al periodismo, ni a la creación de
          contenido, y tampoco soy muy activo en las redes sociales. Soy un ser
          humano que, como dice el libro de Viktor Frankl soy un hombre en busca
          de sentido. Por esta razón, he creado este blog, con
          la intención de comunicar algunas de las ideas, opiniones,
          reflexiones, hobbies, arte, música y recomendaciones que cruzan mi
          mente. Reconozco que no es probable que haya una gran cantidad de
          lectores para este espacio, y que cualquier lector que llegue a mi
          blog ya sería un gran logro para mí.
        </article>
      </div>
    </div>
  );
}

export default EjemploRuta;
