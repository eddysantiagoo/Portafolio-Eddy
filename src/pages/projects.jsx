import { usePage } from "context/page";
import useSWR from "hooks/useSWR";
import Head from "next/head";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import eddyConfig from "../../eddy.config";
import Button from "components/Global/Button";
import Carousel from "react-multi-carousel";
import { NextSeo } from "next-seo";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const { page } = usePage();

  const { data: $projects } = useSWR("/api/projects");
  const projects = $projects?.data;

  return (
    <>
      {/* SEO CON NEXT */}

      <NextSeo
        title="Mis proyectos"
        titleTemplate=" Eddy | %s"
        description="Mis proyectos - Portafolio de Desarrollador de Software Junior"
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        keywords={["proyectos eddy santiago", "eddy santiago"]}
        openGraph={{
          type: "website",
          title: "Eddy | Desarrollador Junior",
          description:
            "Mis proyectos - Portafolio de Desarrollador de Software Junior",
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

      <div className="max-w-7xl mx-auto">
        <div className="py-24">
          <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white">
            Mis{" "}
            <span className="relative whitespace-nowrap text-primary">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">proyectos</span>
            </span>
          </h1>

          {/* SECCION PROYECTOS */}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 overflow-y-hidden  mt-16 animate__animated animate__fadeIn animate__delay-1s">
            {/* PROYECTO 1 */}
            <a
              href="https://web-restaurante-enfasis.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
            >
              <div className="h-30 w-full relative rounded-lg shadow-xl overflow-hidden object-cover object-center sm:object-contain">
                <img
                  src="images/Papas-burgeria.png"
                  alt="Imagen proyecto Papas Burgeria"
                />
              </div>
              <div className="mt-4">
                <p className="text-xl font-semibold">Papa's Burgeria</p>
                <p className="text-sm max-h-24 h-24 font-normal text-gray-500">
                  Landing page para restaurante, funciones con JavaScript,
                  estilos y animaciones con CSS y JS, maquetado con HTML y
                  diseño responsive.
                </p>
                <div className="mt-5">
                  <i class="fa-brands fa-html5 fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-css3-alt fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-js fa-xl fa-pull-left"></i>
                </div>
              </div>

              <p className="text-xs italic mt-10">
                <i class="fa-solid fa-link mr-1" />
                https://web-restaurante-enfasis.vercel.app
              </p>
            </a>
            {/* PROYECTO 2 */}
            <a
              href="https://eddy-portafolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
            >
              <div className="h-30 w-full relative rounded-lg shadow-xl overflow-hidden object-cover object-center sm:object-contain">
                <img
                  src="https://imgbox.io/ib/8OasTn0796.png"
                  alt="Imagen proyecto portafolio personal"
                />
              </div>
              <div className="mt-4">
                <p className="text-xl font-semibold">Portafolio Personal</p>
                <p className="text-sm max-h-24 h-24 font-normal text-gray-500">
                  Manejo de rutas dinamicas, manejo de componentes, consumo de
                  APIS, estilos con Tailwind, manejo de errores http, SEO
                  basico, animaciones con librerias externas y diseño
                  responsive.
                </p>
                <div className="mt-6">
                  <i class="fa-brands fa-react fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-js fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-css3-alt fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-font-awesome fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-node fa-xl fa-pull-left"></i>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    height: "1.6em",
                    marginTop: "-22px",
                    verticalAlign: "middle",
                  }}
                >
                  <SiNextdotjs size="1.5em" />
                </div>
              </div>

              <p className="text-xs italic mt-1">
                <i class="fa-solid fa-link mr-1" />
                https://eddy-portafolio.vercel.app
              </p>
            </a>
            {/* PROYECTO 3 */}
            <a
              href="https://spotify-dynamic-readme.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
            >
              <div className="h-30 w-full relative rounded-lg shadow-xl overflow-hidden object-cover object-center sm:object-contain">
                <img
                  src="images/Spotify-Widget.jpg"
                  alt="Imagen proyecto Spotify Widget"
                />
              </div>
              <div className="mt-4">
                <p className="text-xl font-semibold">Spotify Widget</p>
                <p className="text-sm max-h-24 h-24 overflow-auto font-normal text-gray-500">
                  Proyecto basado en código Open Source, widget SVG para
                  consumir la API de Spotify y mostrar datos del usuario
                  dinámicamante.
                </p>
                <div className="mt-1">
                  <i class="fa-brands fa-python fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-js fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-html5 fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-css3-alt fa-xl fa-pull-left"></i>
                </div>
              </div>

              <p className="text-xs italic mt-6">
                <i class="fa-solid fa-link mr-1" />
                https://spotify-dynamic-readme.vercel.app
              </p>
            </a>
            {/* PROYECTO 4*/}
            <a
              href="https://eddy-portafolio.vercel.app/bonfire"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
            >
              <div className="h-30 w-full relative rounded-lg shadow-xl overflow-hidden object-cover object-center sm:object-contain">
                <img
                  src="/images/the-bonfire-preview.jpg"
                  alt="Imagen proyecto The Bonfire"
                />
              </div>
              <div className="mt-4">
                <p className="text-xl font-semibold">The Bonfire</p>
                <p className="text-sm max-h-24 h-24 font-normal text-gray-500">
                  Reproductor de música ambientado en el videojuego Dark Souls.
                  Además de su diseño, el reproductor cuenta con una selección
                  de soundtracks oficiales de varios juegos de la saga.
                </p>
                <div className="mt-5">
                  <i class="fa-brands fa-js fa-xl fa-pull-left"></i>
                  <i class="fa-brands fa-react fa-xl fa-pull-left"></i>
                </div>
              </div>

              <p className="text-xs italic mt-10">
                <i class="fa-solid fa-link mr-1" />
                https://eddy-portafolio.vercel.app/bonfire
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
