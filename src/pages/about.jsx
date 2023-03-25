import { usePage } from "context/page";
import useSWR from "hooks/useSWR";
import Head from "next/head";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import clquConfig from "../../eddy.config";
import Button from "components/Global/Button";
import Carousel from "react-multi-carousel";

export default function About() {
  const { page } = usePage();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
          <div>
            <h1 className="text-5xl font-bold">
              ¿Quién{" "}
              <span className="relative whitespace-nowrap text-primary">
                soy?
              </span>
              ?
            </h1>
            <p className="text-2xl mt-5">En esta sección encontraras</p>
          </div>

          <div className="relative flex-shrink-0">
            <img
              src="data:image/jpeg;base64,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"
              style={{ zIndex: 1 }}
              className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg"
            />
            <div className="-right-3 top-3 absolute w-full h-full top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
          </div>
        </div>

        {/* SECCION EDUCACIÓN */}

        <div className="mx-auto max-w-7xl mb-8">
        <h1 className="mt-1 text-4xl font-bold">
              {"Educación"}
              <span className="relative whitespace-nowrap text-primary">
                {/* VACIO */}
              </span>
            </h1>
        
        <div className="grid grid-cols-1 justify-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-8">
          <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
              width="65"
              height="65"
              className="bg-white/5 p-1 w-[65px] h-[65px] rounded-md "
            />
            <div className="relative">
              <h2 className="ml-4 font-display text-xl font-medium text-black dark:text-white">
              Institución Universitaria Digital de Antioquia 2020 -
              </h2>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 justify-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-8">
          <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
              width="65"
              height="65"
              className="bg-white/5 p-1 w-[65px] h-[65px] rounded-md "
            />
            <div className="relative">
              <h2 className="ml-4 justify-start font-display text-xl font-medium text-black dark:text-white">
                Diplomado en programación web 2022
              </h2>
            </div>
          </div>

        </div>
      </div>

      </div>
    </>
  );
}
