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
        titleTemplate=" Eddy Santiago| %s"
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
          description:
            "Info sobre mi persona :)",
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
            <h1 className="text-5xl font-secundary">
              ¿Quién{" "}
              <span className="relative whitespace-nowrap font-secundary text-primary">
                soy?
              </span>
            </h1>
            <p className="text-xl mt-4 animate__animated animate__fadeIn">
              Mi nombre es <span className="text-primary"> Eddy Santiago </span>
              y actualmente resido en Colombia. En general, mi interés por la
              tecnología se remonta a cuando era un niño, tenía unos 12 o 13
              años. Recuerdo desde esos momentos estar muy interesado y con
              mucha curiosidad sobre el cómo funcionan muchos de los elementos
              que la componen, como la internet, la ciberseguridad, los
              dispositivos móviles, los videojuegos y las computadoras.
              <br />
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
              en la persona que deseo ser.
            </p>
          </div>

          <div className="relative flex-shrink-0 animate__animated animate__fadeIn animate__delay-4s grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQHjfcoCEEJjBA/profile-displayphoto-shrink_800_800/0/1648781520004?e=2147483647&v=beta&t=_6pd5ybebM6yUx5sAfAXqb-RLqncTwmTxXCCf3xC2yE"
              alt="Imagen de Eddy Santiago"
              style={{ zIndex: 1 }}
              className="shadow-lg relative z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg"
            />

            <div className="-right-3 top-3 absolute w-full h-full lg:h-64 top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
          </div>
        </div>

        <div>
          <ReactMarkdown className="blockquote text-primary text-2xl">
            The security is there, but for how long? **- Eddy Santiago**
          </ReactMarkdown>
        </div>

        {/* SECCION EDUCACIÓN */}

        <div className="mx-auto max-w-7xl mt-8 mb-8">
          <h1 className="mt-1 text-4xl font-bold font-secundary">
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
          </a>

          <h1 className="mt-1 text-4xl font-bold font-secundary">
            {"Educación"}
            <span className="relative whitespace-nowrap text-primary">
              {/* VACIO */}
            </span>
          </h1>

          <div className="grid-cols-1 justify-start md:grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
                alt="Logo de la IU Digital de Antioquia"
                width="65"
                height="65"
                className="bg-white/5 p-1 w-[65px] h-[65px] rounded-md "
              />
              <div className="relative">
                <h2 className="ml-4 font-display text-lg sm:text-xl font-medium text-black dark:text-white">
                  Institución Universitaria Digital de Antioquia - Tecnologia en
                  Desarrollo de Software ( 2020 - Actualmente )
                </h2>
              </div>
            </div>
          </div>
          <div className="grid-cols-1 justify-start md:grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
                alt="Logo de la IU Digital de Antioquia"
                width="65"
                height="65"
                className="bg-white/5 p-1 w-[65px] h-[65px] rounded-md "
              />
              <div className="relative">
                <h2 className="ml-4 justify-start font-display text-xl font-medium text-black dark:text-white">
                  Diplomado en Desarrollo Web (2022)
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
