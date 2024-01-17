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
        title="Razón"
        titleTemplate="Eddy | Blog personal %s"
        description=""
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        keywords={[
          "iniesta eddy santiago",
          "articulo de eddy santiago",
          "articulo eddy iniesta",
        ]}
        openGraph={{
          type: "website",
          title: "Eddy | Blog personal articulo Razón",
          description: "Articulo sobre la razón y el motivo del blog.",
          images: [
            {
              url: "https://imgbox.io/ib/WzLfGfVADa.png",
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
          alt="Imagen emoji preguntadose algo"
          className="rounded-xl absolute h-full w-full object-cover object-center sm:object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full h-full dark:bg-black/10 shadow-xl" />
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold mt-8">
          ¿Cuál es la razón de este blog?
        </p>
        <div className="flex items-center gap-4 mt-2">
          <div>
            <i className="fas fa-clock text-zinc-400" />
            <span className="text-zinc-400 ml-2">2 minutos de lectura</span>
          </div>
          <div>
            <i className="fas fa-calendar-alt text-zinc-400" />
            <span className="text-zinc-400 ml-2">25 de marzo de 2023</span>
          </div>
        </div>
        <article className="mt-12 prose prose-sm lg:prose-lg prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline">
          <h3>
            Preguntandole al famoso ChatGPT hace unos dias "Cuántos blogs crees
            que existen hoy en dia en la internet?"
          </h3>
          <br />
          Me dijo: "Sin embargo, se estima que hay más de 500 millones de blogs
          en línea en la actualidad". Entonces, ¿cuál sería la diferencia de que
          tenga o no este espacio aquí? 🤔
          <br />
          <br />
          No me dedico a la escritura, ni al periodismo, ni a la creación de
          contenido, y tampoco soy muy activo en las redes sociales sin embargo,
          soy un ser humano que, como dice el libro de Viktor Frankl soy un
          hombre en busca de sentido. Por esta razón, he decidido crear este
          blog, con la intención de compartir algunas de mis ideas, opiniones,
          reflexiones, pasatiempos y cualquier otra cosa que pueda surgir en
          mi mente, con el objetivo de comunicar de manera escrita y a mi propio
          estilo mis pensamientos. Reconozco que no es probable que haya una
          gran cantidad de lectores para este espacio, y que cualquier lector
          que llegue a mi blog ya sería un gran logro para mí.
          <hr />
          <strong>
            Si en algún momento dejo de escribir aquí será más por temas de
            infraestructura web que por otra cosa, a lo que me refiero es que
            este sitio web no está optimizado correctamente para ser un blog, ya
            el destino me dirá.
          </strong>
        </article>
      </div>
    </div>
  );
}

export default EjemploRuta;
