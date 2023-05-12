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
        title="Podcasts"
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
          title: "Eddy | Blog personal Podcasts",
          description: "Podcasts recomendados.",
          images: [
            {
              url: "/images/5+1-Podcast.jpg",
              width: 1440,
              height: 661,
              alt: "Imagen del post de podcast",
            },
          ],
        }}
      />

      <div className="relative h-96 w-full">
        <img
          src="/images/5+1-Podcast.jpg"
          alt="Imagen podcast"
          className="rounded-xl absolute h-full w-full object-cover object-center sm:object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full h-full dark:bg-black/10 shadow-xl" />
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold mt-8">5 + 1 </p>
        <div className="flex items-center gap-4 mt-2">
          <div>
            <i className="fas fa-clock text-zinc-400" />
            <span className="text-zinc-400 ml-2">3 minutos de lectura</span>
          </div>
          <div>
            <i className="fas fa-calendar-alt text-zinc-400" />
            <span className="text-zinc-400 ml-2">2 de mayo de 2023</span>
          </div>
        </div>
        <article className="mt-12 prose prose-sm lg:prose-lg dark:prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline">
          Últimamente este formato de podcast ha dado mucho de que hablar y debido
          al boom de este se ha empezado a popularizar mucho. Aquí comparto 5 +
          1 podcasts que son de mi gusto y podrían llegar a interesarte.
          <br />
          <div>
            <h4>
              1. Sectas (Exlusivo de Spotify) -{" "}
              <a
                href="https://open.spotify.com/show/04GBIML6eNo0grvwsYKGs0"
                target="_blank"
              >
                Escucha aquí
              </a>
            </h4>
            <section className="block items-center md:flex">
              <img
                src="https://i.scdn.co/image/ab6765630000ba8a4c3da34f8b99af82e53c534e"
                alt=""
                width={150}
                className="mr-4"
              />
              <p>
                El primer podcast que escuche en toda mi vida y al cual le
                guardo mucho cariño, fue en el año 2021 y sin duda este podcaste
                te sumerge en un ambiente de misterio y suspenso. En todo el
                mundo se habla mucho de las sectas pero, ¿qué es lo que sucede
                realmente dentro de las sectas? Más específicamente, ¿qué sucede
                en la mente de la gente que se une a las sectas y los líderes
                que las comienzan? Averigualo en este podcast.
              </p>
            </section>
          </div>
          {/* espacio */}
          <div>
            <h4>
              2. DevTalles -{" "}
              <a href="https://anchor.fm/fernando-her85" target="_blank">
                Escucha aquí
              </a>
            </h4>
            <section className="block items-center md:flex">
              <img
                src="https://i.scdn.co/image/7efecaf938faef49ffafb31b0ab25e9a719aa64e"
                alt=""
                width={150}
                className="mr-4"
              />
              <p>
                ¿Eres un desarrollador o desarrolladora y te apasiona el mundo
                del desarrollo web, móvil, bases de datos, testing, clean code,
                habilidades blandas, arquitectura, freelancer y otros temas
                relacionados? Si es así, Fernando Herrera esta aquí con
                DevTalles para ti, este hombre sabe de todo esto y mucho mas.
              </p>
            </section>
          </div>
          {/* espacio */}
          <div>
            <h4>
              3. La Caja de Pandora -{" "}
              <a href="https://anchor.fm/la-caja-de-pandora9" target="_blank">
                Escucha aquí
              </a>
            </h4>
            <section className="block items-center md:flex">
              <img
                src="https://i.scdn.co/image/ab6765630000ba8acf7a1d1054e2342f1353a62d"
                alt=""
                width={150}
                className="mr-4"
              />
              <p>
                Aquí se habla de datos curiosos sobre arte e historia, además de
                interesantes historias acerca de movimientos artísticos,
                artistas y sus vidas y así como diversos temas de historia en
                general.
              </p>
            </section>
          </div>
          {/* espacio */}
          <div>
            <h4>
              4. Chismecito Dev -{" "}
              <a
                href="https://open.spotify.com/show/1nhsEikNGjwh9KfaJO4U8y"
                target="_blank"
              >
                Escucha aquí
              </a>
            </h4>
            <section className="block items-center md:flex">
              <img
                src="https://podcast-api-images.s3.amazonaws.com/corona/show/1825290/logo_300x300.jpeg"
                alt=""
                width={150}
                className="mr-4"
              />
              <p>
                Noticias y tendencias del mundo de la tecnología con "Chismecito
                Dev" de Marcos Rivas. Cada semana, se habla sobre noticias
                relevantes en temas de desarrollo, así como también en otros
                ámbitos tecnológicos como la inteligencia artificial, temas de
                empresas FAANG, y mucho más.
              </p>
            </section>
          </div>
          {/* espacio */}
          <div>
            <h4>
              5. Listening Time -{" "}
              <a
                href="https://sonoromedia.com/podcasts/listening-time"
                target="_blank"
              >
                Escucha aquí
              </a>
            </h4>
            <section className="block items-center md:flex">
              <img
                src="https://i.scdn.co/image/ab6765630000ba8a40d9be236fc1c7032c6bd989"
                alt=""
                width={150}
                className="mr-4"
              />
              <p>
                ¿Tienes un nivel A2, B1 o superior en inglés y quieres mejorar
                tu Listening? Te recomiendo este podcast para que lo hagas, se
                hablan temas comunes con un lenguaje natural del dia a dia y
                simple de entender.
              </p>
            </section>
          </div>
          {/* espacio */}
          <div>
            <h4>
              6. DianaUribe.fm -{" "}
              <a
                href="https://open.spotify.com/show/3xIalu2XhZ2EjSbOcTg0U8"
                target="_blank"
              >
                Escucha aquí
              </a>
            </h4>
            <section className="block items-center md:flex">
              <img
                src="https://i.scdn.co/image/ab6765630000ba8a9b8341780b7571e793240e4b"
                alt=""
                width={150}
                className="mr-4"
              />
              <p>
                La conocida Diana Uribe comparte con nosotros en este espacio
                sus experiencias de vida, reflexiones, anécdotas sobre cine,
                viajes y cultura, y también nos deleita con su pasión por la
                música. ¿Existe algún tema del que no hable Diana Uribe? En sus
                propias palabras, "vamos a continuar la conversación que empezó
                en la radio hace 20 años".
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

export default EjemploRuta;
