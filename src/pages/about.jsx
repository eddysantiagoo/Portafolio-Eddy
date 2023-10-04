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
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function About() {
  const { page } = usePage();

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
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute -mt-28 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">soy?</span>
              </span>
              <img
                src="https://media.licdn.com/dms/image/C4D03AQHjfcoCEEJjBA/profile-displayphoto-shrink_800_800/0/1648781520004?e=2147483647&v=beta&t=_6pd5ybebM6yUx5sAfAXqb-RLqncTwmTxXCCf3xC2yE"
                alt="Imagen de Eddy Santiago"
                className="shadow-lg relative z-1 h-12 md:h-24 rounded-full transition duration-150 hover:scale-125 ring-0 ring-gray-500/50 hover:ring-1 "
              />
            </h1>
            <p className="text-xl mt-4">
              Actualmente resido en Colombia. En general, mi interés por la
              tecnología se remonta a cuando era un niño. Recuerdo desde esos
              momentos soñar con ser Youtuber y tambien con mucha curiosidad por
              entender como funciona el inspeccionar elemento
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

        <div className="mx-auto max-w-7xl mt-8 mb-8">
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
              <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
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

          <div className="grid grid-cols-1 justify-start md:grid-cols-2 gap-4 my-4">
            <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
                alt="Logo de la IU Digital de Antioquia"
                width="65"
                height="65"
                className="bg-white/5 p-1 w-[65px] h-[65px] rounded-xl "
              />
              <div className="relative">
                <h2 className="ml-4 font-display text-xl md:text-lg font-medium text-black dark:text-white">
                  Institución Universitaria Digital de Antioquia - Tecnologia en
                  Desarrollo de Software ( Ene 2020 - Sep 2023 )
                </h2>
              </div>
            </div>
            <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
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
            <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
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
      </div>
    </>
  );
}
