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
import { NextSeo } from "next-seo";

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
          description:
            "Inicio - Sitio web personal",
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
      <div className="sm:h-[40rem] h-[42rem] flex flex-col justify-center items-center mb-20">
        <h1 className="mx-auto max-w-5xl font-display text-4xl font-medium sm:text-7xl text-black dark:text-white text-center">
          Hola, soy{" "}
          <span className="relative whitespace-nowrap text-nombre-eddy">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            Eddy Santiago
          </span>
        </h1>
        <p className="mx-auto max-w-5xl font-display text-3xl text-gray-400/50 mt-2 text-center">
          Desarrollador de Software
        </p>
        <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-16 ">
          <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
            <span className="text-primary uppercase">TecnologÍas</span>
            <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">
              12
            </p>
          </div>
          <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
            <span className="text-primary uppercase">Años de experiencia</span>
            <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">
              2
            </p>
          </div>
          <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
            <span className="text-primary uppercase">Repositorios</span>
            <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">
              {repositories?.length}+
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1Jdq-dbLBCk86g6c0Gwr0vGS4Ly64d5_V/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-lg border-2 border-zinc-600 border-dotted border hover:border-gray-500/10 transition duration-300  py-5 text-center">
              <span className="text-primary uppercase">mi curriculum</span>
            </div>
          </a>
        </div>

        <div class="mt-7 flex flex-row items-center text-center justify-center ">
          <div class="down-arrow"></div>
        </div>
      </div>

      {/* SECCION REPOS */}

      <div className="mx-auto max-w-7xl my-10">
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
            <span className="relative">repositorios</span>
          </span>
        </h1>

        {/* Secciones reponsives */}
        <div className="relative">
          {repositories && (
            <Carousel
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3.5,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              }}
              containerClass="mt-12 relative "
              itemClass="lg:pr-4"
              renderButtonGroupOutside={true}
            >
              {repositories
                ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
                .map((repo, index) => (
                  <a
                    key={index}
                    className="py-4"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer group relative bg-gray-600/5 shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-4 transition-all duration-200">
                      <div className="absolute w-full h-full top-0 right-0 transition-all duration-200">
                        <img
                          src={`https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${repo.full_name}`}
                          alt="repo's image"
                          className="opacity-50 group-hover:opacity-100 transition-all duration-200 w-full h-full rounded-lg"
                        />
                        <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-t from-white dark:from-black to-white/50 dark:to-black/90" />
                      </div>
                      <div className="relative">
                        <h2 className="font-display text-lg font-medium text-black dark:text-white">
                          {repo.name}
                        </h2>
                        <p className="font-display h-10 text-sm text-gray-500 font-light mt-1">
                          {repo.description}
                        </p>
                        <div className="flex items-center justify-between gap-4 mt-10">
                          <div className="flex items-center">
                            <i className="fal fa-code mr-2 w-5" />
                            <p>{repo.language || "Plain/Text"}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <i className="fal fa-star mr-2 w-5" />
                              <p>{repo.stargazers_count || 0}</p>
                            </div>
                            <div className="flex items-center">
                              <i className="fal fa-code-branch mr-2 w-5" />
                              <p>{repo.forks_count || 0}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
            </Carousel>
          )}

          {/* <div className="absolute right-0 bottom-0 h-full w-48 bg-gradient-to-l from-[#050505]" />
        <div className="absolute left-0 bottom-0 h-full w-48 bg-gradient-to-r from-[#050505]" /> */}
        </div>

        <div className="flex justify-end">
          <a
            href={`https://github.com/${eddyConfig.githubName}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button className="mt-6 mb-12 flex items-center gap-2">
              <i className="fab fa-github" />
              Ir a todos los repositorios
              <i className="fal fa-arrow-right -rotate-45 text-xs" />
            </Button>
          </a>
        </div>
      </div>

      {/* SECCION TODAS LAS SKILLS */}

      <div className="mx-auto max-w-7xl my-24">
        <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white text-right">
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
            <span className="relative">habilidades</span>
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              alt="Logo de mongo DB"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                MongoDB
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://static.figma.com/app/icon/1/icon-192.png"
              alt="Logo de Figma"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                Figma
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/arduino-logo.svg"
              alt="Logo de Arduino"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                Arduino
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
              alt="Logo de JavaScript"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                JavaScript
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              alt="Logo de HTML5"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                HTML
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
              alt="Logo de Tailwind"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                Tailwind CSS
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="Logo de CSS"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                CSS
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="Logo de React"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                React
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              alt="Logo de Node.js"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                Node
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
              alt="Logo de MySQL"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                MySQL
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg"
              alt="Logo de Photoshop"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                Photoshop
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://cdn.worldvectorlogo.com/logos/premiere-pro-cc.svg"
              alt="Logo de Premiere"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                Premiere
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* SECCION IDIOMAS */}

      <div className="mx-auto max-w-7xl my-24">
        <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white text-left">
          {"Idio"}
          <span className="relative whitespace-nowrap text-primary">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">mas</span>
          </span>
        </h1>

        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-12">
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://images.emojiterra.com/twitter/512px/1f1ec-1f1e7.png"
              alt="Bandera de Reino Unido"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                Ingles - B2
              </h2>
            </div>
          </div>

          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://images.emojiterra.com/twitter/512px/1f1e7-1f1f7.png"
              alt="Bandera de Brazil"
              width="32"
              height="32"
              className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md "
            />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white">
                Portugués - A1
              </h2>
            </div>
          </div>
        </div>
      </div>

      <ScrollArrow />
    </>
  );
}
