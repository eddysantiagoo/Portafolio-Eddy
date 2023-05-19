import { Transition } from "@headlessui/react";
import Button from "components/Global/Button";
import { useTheme } from "context/theme";
import useSWR from "hooks/useSWR";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import eddyConfig from "../../../eddy.config";
import Image from "next/image";

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

  return (
    <>
      <nav className="sticky top-0 z-10 bg-[#060510] backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="max-w-8xl py-5 w-full px-0 lg:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <a className="text-2xl text-slate-100 mx-8 font-bold mr-1 transition-all duration-200">
                  {eddyConfig.navbar}
                </a>
              </Link>
              <Image
                src="/images/GifPalomaPNG.gif"
                width={40}
                height={40}
                alt="Cargando..."
              />
            </div>
            <div className="flex items-center gap-4 mx-9 ">
              <i
                onClick={() => setIsOpen(true)}
                className="fas fa-bars text-slate-300 text-2xl  text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer border border-gray-600/25 bg-gray-400/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200 "
              />
              <div
                onClick={() => toggleTheme()}
                className="text-2xl text-slate-300 text-zinc-400 border border-gray-600/25 hover:text-black hover:dark:text-white cursor-pointer bg-gray-400/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200"
              >
                {isTheme === "dark" ? (
                  <i className="fas fa-moon " />
                ) : (
                  <i className="fas fa-sun" />
                )}
              </div>
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
          className="fixed right-0 top-0 w-full lg:w-[30rem] h-full bg-[#f5f5f5] dark:bg-[#050505] lg:rounded-l-2xl p-6 z-[1000]"
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
                <p className="text-xs font-medium uppercase text-black/50 dark:text-white/10">
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
                <p className="text-xs font-medium uppercase text-black/50 dark:text-white/10">
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
                    <p>Contacto</p>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/eddy.santiagoo/">
                  <a
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    className="flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white "
                  >
                    <i className="fa-brands fa-instagram text-2xl" />
                    <p>Instagram</p>
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
