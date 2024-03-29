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
          <h1 className="font-secundary text-5xl font-bold sm:text-7xl text-white">
            Mi{" "}
            <span className="relative whitespace-nowrap text-primary">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="text-deg-principal">blog</span>
            </span>
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
