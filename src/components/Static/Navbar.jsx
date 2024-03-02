import { Transition } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import Button from "components/Global/Button";
import { useTheme } from "context/theme";
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

  const handleItemClick = () => {
    const audio = new Audio("/images/entry.mp3");
    audio.play();
  };

  const handleHoverClick = () => {
    const audio = new Audio("/images/iphone-tock.mp3");
    audio.play();
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <nav className="sticky top-2 md:top-4 z-10 bg-[#232226] md:bg-transparent rounded-3xl border-2 border-[rgba(51,57,71,.48)] md:border-0 mx-2 md:mx-4 backdrop-filter backdrop-blur-lg md:backdrop-blur-none bg-opacity-20">
        <div className="max-w-8xl py-5 w-full px-0 lg:px-0">
          <div className="flex items-center justify-between md:justify-around">
            <div className="flex items-center">
              {/* <Tippy
                content="Este es mi emoji favorito :p"
                interactive={true}
                followCursor={true}
                animation="scale"
                theme="light"
                plugins={[followCursor]}
              >
                <Link href="/">
                  <a  className="bg-stone-300 text-2xl text-black/60 dark:text-slate-300 border border-gray-600/25 dark:border-gray-800 hover:text-stone-400 dark:hover:text-neutral hover:dark:text-white cursor-pointer bg-gray-400/5 dark:bg-gray-800/5 w-12 h-12 flex items-center justify-center rounded-lg md:rounded-full transition-all duration-200 p-2.5">
                    <Image
                      src="/images/palomaepica.png"
                      className="grayscale transition duration-800 ease-in-out hover:grayscale-0"
                      width={40}
                      height={40}
                      alt="Fav emoji, the bird"
                      id="singleElement"
                    />
                    * {eddyConfig.navbar} *
                  </a>
                </Link>
              </Tippy> */}
            </div>
            {/* Menu de navegacion para pantallas grandes */}
            <div className="hidden md:flex sticky top-6 z-10 bg-black border-2 border-[rgba(72,72,72,0.48)] px-3 rounded-full py-3">
              <ul className="flex gap-2 transition transition-duration-300">
                <li>
                  <Link href={`/`}>
                    <a
                      className="font-medium rounded-full px-3 py-2 transition transition-duration-200 text-white/60 focus:bg-white/20 hover:text-white/80 focus:text-white"
                      href=""
                      onMouseEnter={handleHoverClick}
                      onClick={handleItemClick}
                    >
                      Inicio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/about`}>
                    <a
                      className="font-medium rounded-full px-3 py-2 transition transition-duration-200 text-white/60 focus:bg-white/20 hover:text-white/80 focus:text-white"
                      href=""
                      onMouseEnter={handleHoverClick}
                      onClick={handleItemClick}
                    >
                      Sobre mi
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href={`/projects`}>
                    <a
                      className="font-medium rounded-full px-3 py-2 transition transition-duration-200 text-white/60 focus:bg-white/20 hover:text-white/80 focus:text-white"
                      href=""
                      onMouseEnter={handleHoverClick}
                      onClick={handleItemClick}
                    >
                      Proyectos
                    </a>
                  </Link>
                </li>
                {/* <Tippy
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
                </Tippy> */}

                <li>
                  <Link href={`/posts`}>
                    <a
                      className="font-medium rounded-full px-3 py-2 transition transition-duration-200 text-white/60 focus:bg-white/20 hover:text-white/80 focus:text-white"
                      href=""
                      onMouseEnter={handleHoverClick}
                      onClick={handleItemClick}
                    >
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between gap-4 mx-9 md:mx-0 w-full md:w-auto">
              <Link href={`/`}>
                <a
                  className="visible md:hidden font-bold font-secundary rounded-xl px-3 py-2 transition transition-duration-200 text-white/60 focus:bg-white/10 hover:text-white/80 focus:text-white"
                  href=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </Link>

              <i
                onClick={() => setIsOpen(true)}
                className="visible md:hidden text-slate-300 text-2xldark:text-white cursor-pointer border border-gray-600/25 bg-gray-400/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200 teams-icon-card--nav"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path
                    d="M10.5 18H20M4 12H20M4 6H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </i>
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
          className="fixed right-0 top-0 w-full lg:w-[30rem] h-full font-semibold bg-[#050505] lg:rounded-l-2xl p-6 z-[1000]"
        >
          <div style={{ zIndex: 999 }}>
            <div className="flex justify-between w-full items-center">
              <p className="text-2xl font-semibold">Menu</p>
              <i
                onClick={() => setIsOpen(false)}
                className="w-8 h-7 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
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
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </i>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-full h-0.5 bg-black/50 dark:bg-white/10" />
              </div>
              {pages.map((page, index) => {
                return (
                  <Link href={page.link} key={index}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 text-xl transition-all duration-200 ${
                        page.active
                          ? "bg-gray-500/5  text-white font-semibold"
                          : "hover:bg-gray-500/10 text-zinc-400 hover:text-white"
                      } py-3 rounded-lg`}
                    >
                      <p>{page.label}</p>
                    </a>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-xs font-medium rounded-xl p-1.5 w-full uppercase text-white/50">
                  Redes Sociales
                </p>
                <div className="w-full h-0.5 bg-white/10" />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/eddysantiagoo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github fab fa-$ text-2xl text-zinc-400 hover:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-2"
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
                  </i>
                </a>
                <a
                  href="https://www.github.com/eddysantiagoo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github fab fa-$ text-2xl text-zinc-400 hover:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10">
                    <svg viewBox="0 0 438.549 438.549" className="p-3">
                      <path
                        fill="currentColor"
                        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                      ></path>
                    </svg>
                  </i>
                </a>
                {/* <Link href="/contact">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                  >
                    <i className="fas fa-envelope text-2xl" />
                    <p className="font-semibold">Contacto</p>
                  </a>
                </Link> */}
                <div className="w-full">
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
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
}
