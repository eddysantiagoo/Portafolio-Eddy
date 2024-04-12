import { usePage } from "context/page";
import Head from "next/head";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import eddyConfig from "../../eddy.config";
import Button from "components/Global/Button";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";

export default function Posts() {
  const { page } = usePage();

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleHoverClick = () => {
    const audio = new Audio("/images/post.mp3");
    audio.play();
  };

  return (
    <>
      {/* SEO CON NEXT */}

      <NextSeo
        title="Mi blog"
        titleTemplate=" Eddy Santiago | %s"
        description="Mi blog - Sitio web personal"
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        keywords={["blog de eddy santiago", "eddy santiago", "blog de un fifa"]}
        openGraph={{
          type: "website",
          title: "Eddy Santiago | Desarrollador",
          description:
            "Mi blog - Sitio web personal",
          images: [
            {
              url: eddyConfig.imageWeb,
              width: 1200,
              height: 630,
              alt: "Imagen de la pagina de inicio de mi portafolio",
            },
          ],
        }}
      />

      <div className="max-w-7xl mx-auto ">
        <div className="py-24">
          <h1 className="mt-1 text-4xl font-bold text-white font-secundary mb-4">
            Blog
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-16 ">
            <Link href={`/post/3`}>
              <a
                key={""}
                className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
                onMouseEnter={handleHoverClick}
              >
                <div>
                  <p className="text-xl font-semibold">
                    5 + 1 Podcasts recomendados
                  </p>
                  <p className="text-sm font-normal text-gray-500">
                    Ultimamente ha habido un boooom del formato podcast, así que
                    aquí comparto algunos que son de mi gusto.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-calendar mr-1" />
                    2 de mayo de 2023
                  </p>
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-eye mr-1" />
                    75
                  </p>
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-clock mr-1" />3 minutitos de lectura
                  </p>
                </div>
              </a>
            </Link>

            <Link href={`/post/2`}>
              <a
                key={""}
                className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
                onMouseEnter={handleHoverClick}
              >
                <div>
                  <p className="text-xl font-semibold">
                    Explorando la Inteligencia Artificial en Detroit: Become
                    Human, un videojuego recomendado
                  </p>
                  <p className="text-sm font-normal text-gray-500">
                    En este artículo se presentará la recomendación del
                    videojuego "Detroit Become Human", una aventura gráfica que
                    plantea una interesante reflexión sobre el futuro de la
                    inteligencia artificial y su impacto en la sociedad.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-calendar mr-1" />
                    13 de abril de 2023
                  </p>
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-eye mr-1" />
                    113
                  </p>
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-clock mr-1" />4 minutitos de lectura
                  </p>
                </div>
              </a>
            </Link>

            <Link href={`/post/1`}>
              <a
                key={""}
                className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
                onMouseEnter={handleHoverClick}
              >
                <div>
                  <p className="text-xl font-semibold">Andrés Iniesta Luján</p>
                  <p className="text-sm font-normal text-gray-500">
                    Pequeño articulo sobre el mago de Fuentealbilla.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-calendar mr-1" />
                    28 de marzo del 2023
                  </p>
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-eye mr-1" />
                    112
                  </p>
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-clock mr-1" />6 minutitos de lectura
                  </p>
                </div>
              </a>
            </Link>

            <Link href={`/post/0`}>
              <a
                key={""}
                className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
                onMouseEnter={handleHoverClick}
              >
                <div>
                  <p className="text-xl font-semibold">
                    Primero que todo: ¿Por qué este blog?
                  </p>
                  <p className="text-sm font-normal text-gray-500">
                    La razón y el motivo del por qué.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-calendar mr-1" />
                    25 de marzo del 2023
                  </p>
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-eye mr-1" />
                    20
                  </p>
                  <p className="text-xs space-x-2 mt-6">
                    <i className="fal fa-clock mr-1" />2 minutitos de lectura
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
