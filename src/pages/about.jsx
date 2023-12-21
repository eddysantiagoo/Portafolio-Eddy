import { usePage } from "context/page";
import useSWR from "hooks/useSWR";
import Head from "next/head";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import eddyConfig from "../../eddy.config";
import Button from "components/Global/Button";
import Carousel from "react-multi-carousel";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function About() {
  const { page } = usePage();

  const [diferenciaMeses, setdiferenciaMeses] = useState(0);

  useEffect(() => {
    let specificDate = new Date("2023-06-26");
    let today = new Date();
    let years = specificDate.getFullYear() - today.getFullYear();
    let months = years * 12 + specificDate.getMonth() - today.getMonth();
    months -= specificDate.getDate() < today.getDate() ? 1 : 0;

    setdiferenciaMeses(Math.abs(months));
  }, []);

  return (
    <>
      {/* SEO CON NEXT */}

      <NextSeo
        title="Sobre mi"
        titleTemplate=" Eddy Santiago | %s"
        description="Info sobre mi persona :)"
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        keywords={[
          "sobre eddy santiago",
          "eddy santiago",
          "eddy santiago giraldo",
        ]}
        openGraph={{
          type: "website",
          title: "Eddy Santiago | Desarrollador",
          description: "Info sobre mi persona :)",
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
        <div className="flex flex-col lg:flex-row justify-between w-full h-full py-14 gap-24 pb-2">
          <div>
            <h1 className="font-display gap-2 md:gap-4 flex inline-flex items-center text-5xl font-bold sm:text-7xl text-black dark:text-white">
              ¿Quién
              <span className="relative whitespace-nowrap text-primary">
                <span className="text-deg-principal">soy?</span>
              </span>
              <img
                src="/images/icono-200.webp"
                alt="Imagen de Eddy Santiago"
                className="shadow-lg relative z-1 h-12 md:h-24 rounded-full transition duration-150 hover:scale-125 ring-0 ring-gray-500/50 hover:ring-1 "
              />
            </h1>
            <p className="text-xl mt-4">
              Profesionalmente, actualmente resido en Colombia, desarrollador
              web enfocado en contruir sitios webs modernos, accesibles y
              diseñados para ser intuitivos. <br /> <br />
              <p>
                Personalmente, soy un entusiasta del UX y UI, me gustan los
                deportes, el open source, me gusta jugar videojuegos y leer.
                También tengo un interés en las artes y a veces escribo algo en{" "}
                <Link href={`/posts`}>
                  <a className="text-[#f83b4c] hover:text-[#a12833] font-semibold underline">
                    Mi Blog
                  </a>
                </Link>{" "}
              </p>
              {/* <br />
              <br />
              En el año 2020, tuve la oportunidad de estudiar Desarrollo de
              Software de manera profesional, la cual no dudé en tomar y hasta
              el día de hoy, siento que no me equivoqué en mi elección. Disfruto
              mucho del desarrollo, aunque como cualquier profesión en el mundo,
              tiene sus altibajos y puede ser estresante. En mi vida, aplico la
              comunicación asertiva, la capacidad de planificación y
              administración efectiva del tiempo, busco estar actualizado sobre
              las últimas tecnologías, veo los problemas como oportunidades para
              crear soluciones y sobre todo trabajo día a día para convertirme
              en la persona que deseo ser. */}
            </p>
            <ReactMarkdown className="mt-4 text-primary text-2xl">
              The security is there, but for how long? **- Eddy Santiago**
            </ReactMarkdown>
          </div>
        </div>

        {/* SECCION EDUCACIÓN */}

        <section className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="mx-auto max-w-7xl">
            {/* <h1 className="mt-1 text-4xl font-bold font-secundary">
            {"Mi "}
            <span className="relative whitespace-nowrap text-primary font-secundary">
              Curriculum
            </span>
          </h1>

          <a
            href="https://drive.google.com/file/d/1Jdq-dbLBCk86g6c0Gwr0vGS4Ly64d5_V/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="grid-cols-1 justify-start md:grid-cols-1 lg:grid-cols-2 gap-4 my-4 chroma">
              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border dark:border-gray-500/25 dark:hover:border-primary rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <div className="relative">
                  <h2 className="ml-2 font-display text-lg sm:text-xl font-medium text-black dark:text-white">
                    ¿Quieres conocer más sobre mí? Revisa mi CV aquí :)
                  </h2>
                </div>
              </div>
            </div> 
          </a>*/}

            <h1 className="mt-1 text-4xl font-bold font-secundary">
              {"Educación"}
              <span className="relative whitespace-nowrap text-primary">
                {/* VACIO */}
              </span>
            </h1>

            <div className="grid grid-cols-1 justify-start gap-4 my-4">
              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border dark:border-gray-500/25 dark:hover:border-primary rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
                  alt="Logo de la IU Digital de Antioquia"
                  width="65"
                  height="65"
                  className="bg-white/5 p-1 w-[65px] h-[65px] rounded-xl "
                />
                <div className="relative">
                  <h2 className="ml-4 font-display text-xl md:text-lg font-medium text-black dark:text-white">
                    Institución Universitaria Digital de Antioquia - Tecnologia
                    en Desarrollo de Software ( Ene 2020 - Sep 2023 )
                  </h2>
                </div>
              </div>
              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5 hover:bg-neutral-300 overflow-hidden border dark:border-gray-500/25 dark:hover:border-primary rounded-lg overflow-hidden p-2.5 transition-all duration-200 ">
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
                  alt="Logo de la IU Digital de Antioquia"
                  width="65"
                  height="65"
                  className="bg-white/5 p-1 w-[65px] h-[65px] rounded-xl"
                />
                <div className="relative">
                  <h2 className="ml-4 justify-start font-display text-xl md:text-lg font-medium text-black dark:text-white">
                    Diplomado en Desarrollo Web (2022)
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 justify-start gap-4 my-4">
              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border dark:border-gray-500/25 dark:hover:border-primary rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
                  alt="Logo de la IU Digital de Antioquia"
                  width="65"
                  height="65"
                  className="bg-white/5 p-1 w-[65px] h-[65px] rounded-xl"
                />
                <div className="relative">
                  <h2 className="ml-4 font-display text-xl md:text-lg font-medium text-black dark:text-white">
                    Certificado en diseño de experiencia del usuario (UX) de
                    Google (Mayo 2023 - Actualmente)
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-1 text-4xl font-bold font-secundary mb-4">
              {"Experiencia"}
              <span className="relative whitespace-nowrap text-primar">
                {/* VACIO */}
              </span>
            </h1>
            <ol class="relative border-l border-gray-400/80 dark:border-[#464B50]">
              {/* <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li> */}
              <li class="mt-6 mb-10 ml-8 ">
                <span class="absolute flex items-center justify-center w-8 h-8 bg-[#313131] p-[6px] rounded-md -left-4">
                  <img
                    src="https://principal.gestoru.com/wp-content/uploads/2022/05/Gestoru-Favicon.png"
                    alt=""
                    srcset=""
                  />
                </span>
                <h3 class="inline-block md:flex items-center mb-1 text-md lg:text-lg font-semibold text-gray-900 dark:text-white">
                  Desarrollador Frontend y Diseñador UI UX
                  <span className="mx-2">en</span>
                  <a
                    className="mr-2 font-bold underline underline-offset-2 hover:text-[#63ebbb]"
                    href="https://principal.gestoru.com/"
                    target="_blank"
                  >
                    GestorU
                  </a>
                  <span class="bg-neutral-300/80 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-black border-2 ml-3">
                    Actual
                  </span>
                </h3>
                <div className="grid md:flex items-center">
                  <time class="bg-neutral-300/80 dark:bg-[#313131] w-fit py-2 px-3 rounded-md text-sm font-medium dark:font-normal leading-none text-stone-700 dark:text-gray-400 dark:text-white">
                    Desde Junio del 2023 ({diferenciaMeses} meses)
                  </time>
                  <span className="ml-2 text-sm">
                    Medellín, Colombia (Hibrido)
                  </span>
                </div>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                alias velit nostrum. Maxime debitis numquam reiciendis aperiam,
                excepturi a, sapiente, quidem earum incidunt eaque possimus
                nostrum accusamus rem architecto nemo? */}
                </p>
                <div className="flex flex-wrap gap-y-3 justify-left">
                  <span class="bg-neutral-200 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border-2 border-stone-400/60 dark:border-stone-400/60 dark:border-stone-400/60 dark:border-stone-400">
                    Laravel
                  </span>
                  <span class="bg-neutral-200 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border-2 border-stone-400/60 dark:border-stone-400">
                    Figma
                  </span>
                  <span class="bg-neutral-200 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border-2 border-stone-400/60 dark:border-stone-400">
                    Tailwind
                  </span>
                  <span class="bg-neutral-200 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border-2 border-stone-400/60 dark:border-stone-400">
                    CSS
                  </span>
                  <span class="bg-neutral-200 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border-2 border-stone-400/60 dark:border-stone-400">
                    PHP
                  </span>
                  <span class="bg-neutral-200 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border-2 border-stone-400/60 dark:border-stone-400">
                    JavaScript
                  </span>
                  <span class="bg-neutral-200 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border-2 border-stone-400/60 dark:border-stone-400">
                    Bootstrap
                  </span>
                  <span class="bg-neutral-200 text-stone-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border-2 border-stone-400/60 dark:border-stone-400">
                    HTML
                  </span>
                </div>

                {/* Boton de mas informacion */}
                <a
                  href="#"
                  class="hidden inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    class="w-3.5 h-3.5 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>{" "}
                  Mas informacion
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* SECCION EXPERIENCIA */}

        <span className="hero_Glow__wiAEk-about"></span>
      </div>
    </>
  );
}
