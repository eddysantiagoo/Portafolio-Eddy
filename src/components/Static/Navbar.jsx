import { Transition } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import Button from "components/Global/Button";
import { useTheme } from "context/theme";
import useSWR from "hooks/useSWR";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import eddyConfig from "../../../eddy.config";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";

export default function Navbar() {
  const router = useRouter();
  let [isOpen, setMenu] = useState(false);

  const { isTheme, toggleTheme } = useTheme();

  // RUTAS

  const pages = [
    {
      link: "/",
      label: "Inicio",
      icon: {
        default: "fal fa-home",
        active: "fas fa-home",
      },
      active: router.pathname === "/",
    },
    {
      link: "/about",
      label: "Sobre mi",
      icon: {
        default: "fal fa-user",
        active: "fas fa-user",
      },
      active: router.pathname === "/about",
    },
    {
      link: "/projects",
      label: "Proyectos",
      icon: {
        default: "fal fa-project-diagram",
        active: "fas fa-project-diagram",
      },
      active: router.pathname === "/projects",
    },
    {
      link: "/posts",
      label: "Mi blog",
      icon: {
        default: "fal fa-newspaper",
        active: "fas fa-newspaper",
      },
      active: router.pathname === "/posts",
    },
  ];

  const setIsOpen = (value) => {
    if (value === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setMenu(value);
  };

  const toastMessage = () => {
    toast("Proximamente...", {
      icon: "🌙",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <nav className="sticky top-2 md:top-4 z-10 bg-[#232226] md:bg-transparent rounded-3xl border-2 border-[rgba(51,57,71,.48)] md:border-0 mx-2 md:mx-4 backdrop-filter backdrop-blur-lg md:backdrop-blur-none bg-opacity-20">
        <div className="max-w-8xl py-5 w-full px-0 lg:px-0">
          <div className="flex items-center justify-between md:justify-around">
            <div className="flex items-center">
              <Tippy
                content="Este es mi emoji favorito :p"
                interactive={true}
                followCursor={true}
                animation="scale"
                theme="light"
                plugins={[followCursor]}
              >
                <Link href="/">
                  <a className="bg-stone-400/50 dark:bg-black/50 border border-gray-600/25 p-2 hover:text-black hover:dark:text-white cursor-pointer bg-gray-400/5 p-1 w-12 h-12 flex items-center justify-center rounded-lg md:rounded-full mx-8 md:mx-0 font-bold mr-1 md:mr-0 transition duration-200">
                    <Image
                      src="/images/palomaepica.png"
                      className="grayscale transition duration-800 ease-in-out hover:grayscale-0"
                      width={40}
                      height={40}
                      alt="Fav emoji, the bird"
                      id="singleElement"
                    />
                    {/* {eddyConfig.navbar} */}
                  </a>
                </Link>
              </Tippy>
            </div>
            {/* Menu de navegacion para pantallas grandes */}
            <div className="hidden md:flex sticky top-6 z-10 flex bg-neutral-200 dark:bg-black border-2 border-gray-500/10 dark:border-[rgba(72,72,72,0.48)] px-8 rounded-full py-3 items-center">
              <ul className="flex gap-8 transition transition-duration-300">
                <li>
                  <Link href={`/`}>
                    <a
                      className="font-medium rounded-xl p-1.5 transition transition-duration-200 text-black/90 text-black/90 dark:text-white/60 hover:text-black/40 dark:hover:text-white/80 focus:text-gray-700/40 dark:focus:text-white focus:shadow-sm focus:shadow-black/40 dark:focus:shadow-white"
                      href=""
                    >
                      Inicio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/about`}>
                    <a
                      className="font-medium rounded-full px-2 py-2 transition transition-duration-200 text-black/90 text-black/90 dark:text-white/60 hover:text-black/40 dark:hover:text-white/80 focus:text-gray-700/40 dark:focus:text-white focus:shadow-sm focus:shadow-black/40 dark:focus:shadow-white"
                      href=""
                    >
                      Sobre mi
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href={`/projects`}>
                    <a
                      className="font-medium rounded-xl p-1.5 transition transition-duration-200 text-black/90 text-black/90 dark:text-white/60 hover:text-black/40 dark:hover:text-white/80 focus:text-gray-700/40 dark:focus:text-white focus:shadow-sm focus:shadow-black/40 dark:focus:shadow-white"
                      href=""
                    >
                      Proyectos
                    </a>
                  </Link>
                </li>
                <Tippy
                  content="Esta seccion aun esta en desarrollo"
                  interactive={true}
                  placement="bottom"
                  duration={0}
                  animation="scale"
                  theme="light"
                  plugins={[followCursor]}
                >
                  <li className="">
                    <Link href={`/designs`}>
                      <a
                        className="font-medium rounded-xl p-1.5 transition transition-duration-300 text-black/30 dark:text-white/30 hover:text- focus:text-white focus:shadow-sm focus:shadow-white focus:shadow-sm focus:shadow-white"
                        href=""
                      >
                        Diseños
                      </a>
                    </Link>
                  </li>
                </Tippy>

                <li>
                  <Link href={`/posts`}>
                    <a
                      className="font-medium rounded-xl p-1.5 transition transition-duration-200 text-black/90 text-black/90 dark:text-white/60 hover:text-black/40 dark:hover:text-white/80 focus:text-gray-700/40 dark:focus:text-white focus:shadow-sm focus:shadow-black/40 dark:focus:shadow-white"
                      href=""
                    >
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4 mx-9 md:mx-0 ">
              <div
                onClick={() => toastMessage()}
                onClick={() => toggleTheme()}
                className="bg-stone-400/50 dark:bg-black/50 text-2xl text-stone-600 dark:text-slate-300 text-zinc-400 border border-gray-600/25 hove:text-stone-400 dark:hover:text-neutral hover:dark:text-white cursor-pointer bg-gray-400/5 w-12 h-12 flex items-center justify-center rounded-lg md:rounded-full transition-all duration-200"
              >
                {isTheme === "dark" ? (
                  <i className="fas fa-moon " />
                ) : (
                  <i className="fas fa-sun" />
                )}
              </div>
              <i
                onClick={() => setIsOpen(true)}
                className="visible md:hidden bg-stone-400/50 dark:bg-black/50 fas fa-bars text-stone-600 dark:text-slate-300 text-2xl hover:text-black hover:dark:text-white cursor-pointer border border-gray-600/25 bg-gray-400/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200 "
              />
            </div>
          </div>
        </div>
      </nav>

      <Transition show={isOpen} appear>
        <Transition.Child
          as={"div"}
          enter="transition-all duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed right-0 top-0 w-full h-full bg-black/50 z-[999]"
          onClick={() => setIsOpen(false)}
        />
        <Transition.Child
          enter="transition-all duration-500"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
          className="fixed right-0 top-0 w-full lg:w-[30rem] h-full bg-[#f5f5f5] font-semibold dark:bg-[#050505] lg:rounded-l-2xl p-6 z-[1000]"
        >
          <div style={{ zIndex: 999 }}>
            <div className="flex justify-between w-full items-center">
              <p className="text-2xl font-semibold">{eddyConfig.name}</p>
              <i
                onClick={() => setIsOpen(false)}
                className="fa fa-times w-12 h-12 hover:bg-gray-500/5 text-xl flex items-center justify-center transition-all duration-200 rounded-lg "
              />
            </div>

            <div className="mt-8 space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-xs font-medium rounded-xl p-1.5 uppercase text-black/50 dark:text-white/10">
                  Menu
                </p>
                <div className="w-full h-0.5 bg-black/50 dark:bg-white/10" />
              </div>
              {pages.map((page, index) => {
                return (
                  <Link href={page.link} key={index}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 text-xl transition-all duration-200 ${
                        page.active
                          ? "bg-gray-500/5 text-black dark:text-white font-semibold"
                          : "hover:bg-gray-500/10 text-zinc-400 hover:text-black hover:dark:text-white"
                      } px-4 py-3 rounded-lg`}
                    >
                      <i
                        className={
                          (page.active ? page.icon.active : page.icon.default) +
                          " w-6"
                        }
                      />
                      <p>{page.label}</p>
                    </a>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-xs font-medium rounded-xl p-1.5 uppercase text-black/50 dark:text-white/10">
                  Redes Sociales
                </p>
                <div className="w-full h-0.5 bg-black/50 dark:bg-white/10" />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/eddysantiagoo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin fab fa-$ text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10" />
                </a>
                <a
                  href="https://www.github.com/eddysantiagoo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github fab fa-$ text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10" />
                </a>
                <Link href="/contact">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                  >
                    <i className="fas fa-envelope text-2xl" />
                    <p className="font-semibold">Contacto</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/eddy.santiagoo/">
                  <a
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    className="flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:text-orange-600 hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white "
                  >
                    <svg
                      fill="#a1a1aa"
                      height="37px"
                      className="hover:fill-white transition-all duration-200"
                      style={{ margin: "0 -4px" }}
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
                    <p className="ml-[-8px]">Instagram</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
}
