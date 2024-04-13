import { usePage } from "context/page";
import Head from "next/head";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import eddyConfig from "../../eddy.config";
import { FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import Button from "components/Global/Button";
import Carousel from "react-multi-carousel";
import { NextSeo } from "next-seo";

export default function Projects() {
  const { page } = usePage();

  return (
    <>
      {/* SEO CON NEXT */}

      <NextSeo
        title="Mis proyectos"
        titleTemplate=" Eddy Santiago | %s"
        description="Mis proyectos - Sitio web personal"
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        keywords={["proyectos eddy santiago", "eddy santiago"]}
        openGraph={{
          type: "website",
          title: "Eddy Santiago | Desarrollador",
          description: "Mis proyectos - Sitio web personal",
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
          <h1 className="mt-1 text-4xl font-bold text-white font-secundary mb-4 pl-4">
            Proyectos
          </h1>

          {/* SECCION PROYECTOS */}

          <div className="grid grid-cols-1 lg:grid-cols-3 p-0 md:p-4 gap-4 overflow-y-hidden mt-16">
            {/* PROYECTO 1 */}

            <div className="grid grid-cols-1 gap-y-4 place-content-baseline">
              <a
                href="https://eddy-portafolio.vercel.app/bonfire"
                target="_blank"
                rel="noreferrer"
                className="transition-all  h-auto border border-zinc-600 cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
              >
                <div className="h-30 w-full relative rounded-lg shadow-xl overflow-hidden object-cover object-center sm:object-contain">
                  <img
                    src="/images/the-bonfire-preview.jpg"
                    alt="Imagen proyecto The Bonfire"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xl font-semibold">The Bonfire</p>
                  <p className="text-sm  font-normal text-gray-500">
                    Reproductor de música ambientado en el videojuego Dark
                    Souls. Además de su diseño, el reproductor cuenta con una
                    selección de soundtracks oficiales de varios juegos de la
                    saga.
                  </p>
                  <div className="mt-6 flex gap-1">
                    <FaReact className="text-3xl bg-[#343434] p-1 rounded-md" />
                    <FaJs className="text-3xl bg-[#343434] p-1 rounded-md" />
                  </div>
                </div>

                <div className="flex items-center mt-6">
                  <a
                    target="_blank"
                    class="flex w-full justify-center items-center gap-3 text-center btn-princ-white p-2 rounded-lg relative group text-black"
                  >
                    <span class="relative font-semibold text-center">
                      Visitar sitio
                    </span>
                    <i class="fa-solid fa-link" />
                  </a>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-y-4 place-content-baseline">
              <a
                href="https://spotify-dynamic-readme.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-600 cursor-pointer w-full h-fit bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10"
              >
                <div className="w-full relative rounded-lg shadow-xl overflow-hidden object-cover object-center sm:object-contain">
                  <img
                    src="images/Spotify-Widget.jpg"
                    alt="Imagen proyecto Spotify Widget"
                    className="w-full h-52 object-cover"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xl font-semibold">Spotify Widget</p>
                  <p className="text-sm font-norma overflow-auto text-gray-500">
                    Proyecto basado en código Open Source, widget SVG para
                    consumir la API de Spotify y mostrar datos del usuario
                    dinámicamante.
                  </p>
                  <div className="mt-6 flex gap-1">
                    <FaPython className="text-3xl bg-[#343434] p-1 rounded-md" />
                    <FaCss3Alt className="text-3xl bg-[#343434] p-1 rounded-md" />
                    <FaHtml5 className="text-3xl bg-[#343434] p-1 rounded-md" />
                    <FaJs className="text-3xl bg-[#343434] p-1 rounded-md" />
                  </div>
                </div>

                <div className="flex items-center mt-6">
                  <a
                    target="_blank"
                    class="flex w-full justify-center items-center gap-3 text-center btn-princ-white p-2 rounded-lg relative rounded-lg group font-medium text-black font-medium inline-block"
                  >
                    <span class="relative font-semibold text-center">
                      Visitar sitio
                    </span>
                    <i class="fa-solid fa-link" />
                  </a>
                </div>
              </a>
            </div>
            {/* <span className="hero_Glow__wiAEk-projects"></span> */}
          </div>
        </div>
      </div>
    </>
  );
}
