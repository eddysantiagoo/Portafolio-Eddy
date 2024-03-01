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

export default function Home() {
  const { page } = usePage();
  const notify = () =>
    toast("🐻", {
      duration: 1000,
      position: "top-center",

      style: {
        background: "#333",
        border: "1px solid #636363",
      },
    });

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
          <div className="h-full bento-grid overflow-hidden">
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

            <h1 className="cuarta-font mt-8">
              <ul className="text-md grid gap-4">
                <li className="cuarta-font font-normal">
                  a veces pienso que menos es más
                </li>
                <li className="cuarta-font font-normal">
                  pienso que lo que elegimos desarrollar es tan crucial como lo
                  que decidimos omitir
                </li>

                <li className="text-xs mt-12 font-light">
                  <span className="text-[#FF4F4F] mr-1">*</span>Poco, pero
                  conciso.
                </li>
              </ul>
            </h1>

            {/* <p className="mx-auto max-w-5xl font-display font-medium md:font-bold text-2xl md:text-3xl text-neutral-400 dark:text-gray-400/50 mt-2 text-center">
            Desarrollador de Software
          </p> */}
            {/* Seccion de los botones de tecnologias, repositorios etc... */}
            <span className="hero_Glow__wiAEk"></span>
          </div>

          <section className="flex flex-col gap-4 w-full h-full">
            <article className="bento-grid">
              <div className="flex align-center gap-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                  href="https://github.com/eddysantiagoo"
                >
                  <div className="teams-icon-card">
                    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-22 w-9 hover:bg-[#27272a]">
                      <svg viewBox="0 0 438.549 438.549" className="w-6/2 p-2">
                        <path
                          fill="currentColor"
                          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                  href="https://linkedin.com/in/eddysantiagoo"
                >
                  <div className="teams-icon-card">
                    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-22 w-9 hover:bg-[#27272a]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="p-1"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                            fill="currentColor"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  className="w-2/4"
                  href="https://instagram.com/eddy.santiagoo"
                >
                  <div className="teams-icon-card">
                    <div className="flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-22 w-9 hover:bg-[#27272a]">
                      <svg
                        fill="#ffffff"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        enable-background="new 0 0 512 512"
                        className="w-6/2 p-2"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g id="5151e0c8492e5103c096af88a50059a5">
                            {" "}
                            <path
                              display="inline"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M66.084,0.5h379.819c36.079,0,65.597,29.505,65.597,65.584 v379.819c0,36.079-29.518,65.597-65.597,65.597H66.084C30.005,511.5,0.5,481.982,0.5,445.903V66.084 C0.5,30.005,30.005,0.5,66.084,0.5L66.084,0.5z M372.734,57.264c-12.65,0-23.005,10.355-23.005,23.005v55.067 c0,12.65,10.354,23.005,23.005,23.005h57.762c12.65,0,23.005-10.354,23.005-23.005V80.269c0-12.65-10.354-23.005-23.005-23.005 H372.734L372.734,57.264z M453.738,216.59h-44.975c4.254,13.897,6.55,28.606,6.55,43.852c0,84.996-71.111,153.898-158.839,153.898 c-87.716,0-158.827-68.902-158.827-153.898c0-15.245,2.295-29.954,6.55-43.852H57.276v215.853c0,11.178,9.132,20.322,20.311,20.322 h355.841c11.166,0,20.311-9.145,20.311-20.322V216.59L453.738,216.59z M256.475,155.447c-56.677,0-102.625,44.525-102.625,99.443 s45.948,99.443,102.625,99.443c56.688,0,102.636-44.525,102.636-99.443S313.163,155.447,256.475,155.447z"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </article>
            <article className="bento-grid flex h-full">
              <img
                src="images/turtle.png"
                alt="Tortuga"
                srcset=""
                className="w-12"
              />
            </article>
          </section>
        </div>
      </section>

      <ScrollArrow />
    </>
  );
}
