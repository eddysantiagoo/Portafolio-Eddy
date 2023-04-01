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
          <div clas>
            <h1 className="text-5xl font-bold">
              ¿Quién{" "}
              <span className="relative whitespace-nowrap text-primary">
                soy?
              </span>
              ?
            </h1>
            <p className="text-xl mt-4">
              Mi nombre es <span className="text-primary"> Eddy Santiago </span>
              y actualmente resido en Colombia. En general, mi interés por la
              tecnología se remonta a cuando era un niño, tenía unos 12 o 13
              años. Recuerdo desde esos momentos estar muy interesado y con
              mucha curiosidad sobre el cómo funcionan muchos de los elementos
              que la componen, como la internet, la ciberseguridad, los
              dispositivos móviles, los videjuegos y las computadoras.
              <br />
              <br />
              En el año 2020, tuve la oportunidad de estudiar Desarrollo de
              Software de manera profesional, la cual no dudé en tomar y hasta
              el día de hoy, siento que no me equivoqué en mi elección. Disfruto
              mucho del desarrollo, aunque como cualquier profesión en el mundo, tiene sus
              altibajos y puede ser estresante. En mi vida, aplico la
              comunicación asertiva, la capacidad de planificación y administración efectiva
              del tiempo, busco estar actualizado sobre las últimas tecnologías,
              veo los problemas como oportunidades para crear soluciones y sobre todo
              trabajo día a día para convertirme en la persona que deseo ser.
            </p>
          </div>

          <div className="relative flex-shrink-0">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQHjfcoCEEJjBA/profile-displayphoto-shrink_800_800/0/1648781520004?e=2147483647&v=beta&t=_6pd5ybebM6yUx5sAfAXqb-RLqncTwmTxXCCf3xC2yE"
              style={{ zIndex: 1 }}
              className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg"
            />
            <div className="-right-3 top-3 absolute w-full h-full lg:h-64 top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
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

          <div className="grid grid-cols-1 justify-start md:grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
                width="65"
                height="65"
                className="bg-white/5 p-1 w-[65px] h-[65px] rounded-md "
              />
              <div className="relative">
                <h2 className="ml-4 font-display text-xl font-medium text-black dark:text-white">
                  Institución Universitaria Digital de Antioquia - Tecnologia en
                  desarrollo de Software ( 2020 -
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-start md:grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <div className="group flex items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQHMgYEnxoVtxw/company-logo_200_200/0/1651508107143?e=2147483647&v=beta&t=ueYquiqI1_dejh2VyS1XzZ2D8Q2W4WjWw2VDBNC5OYU"
                width="65"
                height="65"
                className="bg-white/5 p-1 w-[65px] h-[65px] rounded-md "
              />
              <div className="relative">
                <h2 className="ml-4 justify-start font-display text-xl font-medium text-black dark:text-white">
                  Diplomado en programación web (2022)
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
