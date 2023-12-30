import { usePage } from "context/page";
import { useState, useEffect } from "react";
import useSWR from "hooks/useSWR";
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

export default function Home() {
  const { page } = usePage();

  //Uso API GIT HUB
  const { data: $repositories } = useSWR("/api/repos");
  const repositories = $repositories?.data;

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
      <div className="sm:h-[40rem] h-[36em] flex flex-col justify-center items-center">
        <h1 className="mx-auto max-w-5xl font-display text-4xl font-extrabold font-secundary tracking-tighter sm:text-7xl text-neutral-600 dark:text-white text-center">
          Eddy{" "}
        </h1>
        <h1 className="mx-auto max-w-5xl font-display text-4xl font-extrabold font-secundary tracking-tighter sm:text-7xl text-black dark:text-white text-center">
          <span className="relative whitespace-nowrap text-deg-principal">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            Santiago
          </span>
        </h1>

        <p className="mx-auto max-w-5xl font-display font-medium md:font-bold text-2xl md:text-3xl text-neutral-400 dark:text-gray-400/50 mt-2 text-center">
          Desarrollador de Software
        </p>
        {/* Seccion de los botones de tecnologias, repositorios etc... */}
        <div className="md:hidden w-full bg-red lg:w-auto grid grid-cols-2 lg:grid-cols-4 gap-2 mt-6 text-center">
          <Link href={`/about`}>
            <a href="">
              <div className="rounded-md ring-gray-500/50  ring-1 hover:ring-0 hover:bg-[#27272a] px-8 py-3 text-center transition duration-200">
                <span className="text-xl font-bold">Sobre mi</span>
              </div>
            </a>
          </Link>

          <Link href={`/projects`}>
            <a href="">
              <div className="rounded-md ring-gray-500/50  ring-1 hover:ring-0 hover:bg-[#27272a]  py-3 text-center transition duration-200">
                <span className="text-xl font-bold">Proyectos</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="absolute right-4 top-7 w-6 text-text-light-100 dark:text-text-dark-1000"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
          </Link>
          <Link href={`/designs`}>
            <a href="">
              <div className="rounded-md ring-gray-500/50  ring-1 hover:ring-0 hover:bg-[#27272a]  py-3 text-center transition duration-200">
                <span className="text-xl font-bold">Diseños</span>
              </div>
            </a>
          </Link>
          <Link href={`/posts`}>
            <a href="">
              <div className="rounded-md ring-gray-500/50  ring-1 hover:ring-0 hover:bg-[#27272a] py-3 text-center transition duration-200">
                <span className="text-xl font-bold">Mi blog</span>
              </div>
            </a>
          </Link>
          {/* <div className="rounded-xl border border-zinc-700 hover:bg-[#111111] transition duration-700 px-4 py-2 text-center">
            <span className="text-gray uppercase font-bold">Repositorios</span>
            <p className="text-gray-500 dark:text-primary font-medium text-xl">
              {repositories?.length}+
            </p>
          </div> */}
        </div>

        <section class="flex items-center gap-4 mt-4">
          <Tippy
            content="Github"
            interactive={true}
            followCursor={"horizontal"}
            animation="scale"
            duration={100}
            theme="light"
            placement="bottom"
            plugins={[followCursor]}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eddysantiagoo"
            >
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-22 w-9 hover:bg-neutral-300 dark:hover:bg-[#27272a]">
                <svg viewBox="0 0 438.549 438.549" className="w-6/2 p-2">
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                  ></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </div>
            </a>
          </Tippy>
          <Tippy
            content="Linkedin"
            interactive={true}
            followCursor={"horizontal"}
            animation="scale"
            duration={100}
            theme="light"
            placement="bottom"
            plugins={[followCursor]}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/eddysantiagoo/"
            >
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-22 w-9 hover:bg-neutral-300 dark:hover:bg-[#27272a]">
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
                <span className="sr-only">GitHub</span>
              </div>
            </a>
          </Tippy>
          <Tippy
            content="Instagram"
            interactive={true}
            followCursor={"horizontal"}
            animation="scale"
            duration={100}
            theme="light"
            placement="bottom"
            plugins={[followCursor]}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/eddy.santiagoo"
            >
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-22 w-9 hover:bg-neutral-300 dark:hover:bg-[#27272a]">
                <svg
                  fill="currentColor"
                  className="relative left-1"
                  viewBox="-3.2 -3.2 38.40 38.40"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>instagram</title>{" "}
                    <path d="M21.25 14.188v-6.469c0-1.156-0.969-2.125-2.125-2.125h-17c-1.156 0-2.125 0.969-2.125 2.125v6.469h5.156c0.813-2.219 2.969-3.813 5.469-3.813s4.656 1.594 5.469 3.813h5.156zM21.25 16.063h-4.781v0.156c0 3.219-2.625 5.844-5.844 5.844s-5.844-2.625-5.844-5.844v-0.156h-4.781v8.656c0 1.156 0.969 2.125 2.125 2.125h17c1.156 0 2.125-0.969 2.125-2.125v-8.656zM1.844 7.469h1.063v4.875h-1.063v-4.875zM3.969 7.469h1.063v4.875h-1.063v-4.875zM6.094 7.469h1.063v3.063c-0.344 0.25-0.719 0.531-1.063 0.813v-3.875zM10.625 20.219c2.219 0 3.969-1.781 3.969-4s-1.75-3.969-3.969-3.969-4 1.75-4 3.969 1.781 4 4 4zM14.344 7.469h5.031v4.875h-3.375c-0.438-0.656-1.031-1.188-1.656-1.625v-3.25z"></path>{" "}
                  </g>
                </svg>
                <span className="sr-only">GitHub</span>
              </div>
            </a>
          </Tippy>
        </section>
        <span className="hero_Glow__wiAEk"></span>
      </div>

      {/* SECCION TODAS LAS SKILLS */}

      <section className="wrapper grid place-content-center">
        <div className="wrapper__index-grid w-screen max-w-7xl px-6 lg:px-0">
          <article className="grid">
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-2">
              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                  alt="Logo de mongo DB"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
                {/* <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                MongoDB
              </h2>
            </div> */}
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://static.figma.com/app/icon/1/icon-192.png"
                  alt="Logo de Figma"
                  title="Figma"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <svg
                  fill="#ffffff"
                  width={30}
                  title="Next Js"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
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
                    <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>{" "}
                  </g>
                </svg>
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/arduino-logo.svg"
                  alt="Logo de Arduino"
                  title="Arduino"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                  alt="Logo de JavaScript"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                  alt="Logo de HTML5"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                  alt="Logo de Tailwind"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                  alt="Logo de CSS"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  alt="Logo de React"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                  alt="Logo de Node.js"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border border-gray-400/25 dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
                  title="SQL"
                  alt="Logo de MySQL"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
                  title="Laravel"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>
            </div>
            <section className="grid grid-cols-2 gap-2 mt-2">
              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 w-full place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/premiere-pro-cc.svg"
                  alt="Logo de Premier"
                  title="Premiere"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>

              <div className="group flex items-center relative bg-neutral-200 dark:bg-gray-600/5  hover:bg-neutral-300 overflow-hidden border dark:border-gray-500/25 dark:hover:border-primary  rounded-lg overflow-hidden p-2.5 transition-all duration-200 place-content-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg"
                  alt="Logo de Photoshop"
                  width="32"
                  height="32"
                  className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
                />
              </div>
            </section>
          </article>

          <article className="grid">
            <div className="grid grid-cols-1 gap-2">
              <article className="relative flex justify-evenly rounded-2xl border border-zinc-700/80 items-center p-6 overflow-hidden wrapper__index-grid--lenguage-en">
                <span className="text-xl font-bold">Inglés (B2)</span>
                <img
                  src="https://images.emojiterra.com/twitter/512px/1f1ec-1f1e7.png"
                  className="h-8"
                  alt="No hay imagen"
                  srcset=""
                />
              </article>
              <article className="relative flex justify-evenly rounded-2xl border border-zinc-700/80 items-center p-6 overflow-hidden wrapper__index-grid--lenguage">
                <span className="text-xl font-bold">Portugués (A1)</span>
                <img
                  src="https://images.emojiterra.com/twitter/512px/1f1e7-1f1f7.png"
                  className="h-8"
                  alt="No hay imagen"
                  srcset=""
                />
              </article>
            </div>
          </article>

          <article className="grid gap-2">
            <img src="https://spotify-dynamic-readme.vercel.app/spotify" />
            <h1 className="font-semibold wrapper__index-grid--spotify bg-neutral-300 dark:bg-[#1a1616] hover:bg-[#1db954] dark:hover:bg-[#1db954] hover:text-[#1a1616] transition px-4 py-2 text-center rounded-2xl">
              ¿Quieres implementar este mismo SVG con tu cuenta de Spotify?
              <a
                href="https://spotify-dynamic-readme.vercel.app/"
                target="_blank"
                className="text-[#00812e] dark:text-[#1dd15d] font-semibold underline mx-2 hover:text-[#1a1616]"
              >
                Revisa como
              </a>
            </h1>
          </article>
        </div>
      </section>

      <ScrollArrow />
    </>
  );
}
