import { usePage } from "context/page";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import eddyConfig from "../../eddy.config";
import Button from "components/Global/Button";
import Carousel from "react-multi-carousel";
import ScrollArrow from "components/Global/ScrollArrow";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";
import toast from "react-hot-toast";
import TimeZone from "components/Global/TimeZone";
import SplineCard from "components/Global/SplineCard";

export default function Home() {
  const { page } = usePage();
  const notify = () => {
    const audio = new Audio("/images/entry.mp3");
    audio.play();

    toast("🐻", {
      duration: 1000,
      position: "top-center",
      style: {
        background: "#333",
        border: "1px solid #636363",
      },
    });
  };

  const handleHoverClick = () => {
    const audio = new Audio("/images/iphone-tock.mp3");
    audio.play();
  };

  return (
    <>
      {/* SEO CON NEXT */}
      <NextSeo
        title="Desarrollador"
        titleTemplate=" Eddy Santiago | %s"
        description="Inicio - Portafolio de Desarrollador de Software"
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        keywords={[
          "portafolio",
          "portafolio eddy santiago",
          "portafolio eddy desarrollador",
          "eddy santiago",
          "eddy santiago giraldo",
        ]}
        openGraph={{
          type: "website",
          title: "Eddy Santiago | Desarrollador",
          description: "Inicio - Sitio web personal",
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

      <section className="wrapper flex flex-col items-center pt-6 md:p-0 lg:h-[73vh]">
        <div className="grid lg:grid-cols-2 gap-4 md:p-8 place-items-center md:w-8/12 m-auto">
          <div className="h-full overflow-hidden">
            <article className="flex items-center gap-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="font-secundary">
                  <h1 className="font-secundary font-bold">Eddy Santiago</h1>
                  <span className="font-secundary text-neutral-500">
                    Desarrollador Frontend y diseñador UI/UX
                  </span>
                </div>
              </div>

              <button
                className="text-white font-semibold items-center gap-2 py-2 duration-75 hover:opacity-80 appearance-none scale-100 transition-transform active:scale-[0.90]"
                onClick={() => notify()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.6998 21.6001H5.69979C4.37431 21.6001 3.2998 20.5256 3.2998 19.2001L3.2999 4.80013C3.29991 3.47466 4.37442 2.40015 5.6999 2.40015H16.5002C17.8256 2.40015 18.9002 3.47466 18.9002 4.80015V9.60015M7.50018 7.20015H14.7002M7.50018 10.8001H14.7002M14.7002 15.5541V18.4985C14.7002 19.9534 16.2516 21.2879 17.7065 21.2879C19.1615 21.2879 20.7002 19.9535 20.7002 18.4985V14.7793C20.7002 14.009 20.2574 13.2273 19.2723 13.2273C18.2186 13.2273 17.7065 14.009 17.7065 14.7793V18.3435M7.50018 14.4001H11.1002"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </article>
            <hr class="my-2 h-[2px] border-t-0 bg-neutral-800" />
            <div className="flex items-center gap-2">
              <a
                className="p-2 hover:bg-[#101010] transition rounded-lg flex gap-1"
                href="https://www.linkedin.com/in/eddysantiagoo/"
                onMouseEnter={handleHoverClick}
              >
                Linkedin{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="16"
                  color="currentColor"
                  fill="none"
                >
                  <path
                    d="M17 7L6 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                className="p-2 hover:bg-[#101010] transition rounded-lg flex gap-1"
                href="https://github.com/eddysantiagoo"
                onMouseEnter={handleHoverClick}
              >
                GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="16"
                  color="currentColor"
                  fill="none"
                >
                  <path
                    d="M17 7L6 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                className="p-2 hover:bg-[#101010] transition rounded-lg flex gap-1"
                href="https://www.instagram.com/eddy.santiagoo/"
                onMouseEnter={handleHoverClick}
              >
                Instagram
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="16"
                  color="currentColor"
                  fill="none"
                >
                  <path
                    d="M17 7L6 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>

            <p className="cuarta-font bg-[#101010] p-4 rounded-2xl my-2">
              <ul className="text-md grid gap-4">
                <li className="cuarta-font text-sm font-normal">
                  a veces pienso que menos es más
                </li>
                <li className="cuarta-font text-sm font-normal">
                  pienso que lo que elegimos desarrollar es tan crucial como lo
                  que decidimos omitir
                </li>

                <li className="text-xs mt-2 font-light">
                  <span className="text-[#FF4F4F] mr-1">*</span>Poco, pero
                  conciso.
                </li>
              </ul>
            </p>
            <TimeZone />
          </div>

          <section className="flex flex-col gap-4 w-full h-full">
            <article className="flex h-full p-0">
              <SplineCard />
            </article>
          </section>
        </div>
      </section>

      <ScrollArrow />
    </>
  );
}
