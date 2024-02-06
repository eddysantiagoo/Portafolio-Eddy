import Button from "components/Global/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import eddyConfig from "../../../eddy.config";
import "animate.css";

export default function Footer() {
  let [heartColor, setHeartColor] = useState("#f83a3a");

  function randomColor() {
    let color = "#";
    let letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto py-12 border-t border-gray-500/10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-lg text-zinc-400 text-center">
            <p className="font-medium text-center">
              <a
                href="https://github.com/eddysantiagoo/Portafolio-Eddy/blob/main/thank%20u.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:underline"
              >
                Construido con la ayuda de muchas personas y sus contribuciones
              </a>
            </p>{" "}
          </p>
          <div className="text-right">
            <p className="bg-gradient-to-r from-white to-primary font-bold bg-clip-text text-transparent select-none flex">
              Adaptado con{" "}
              <i
                onClick={() => {
                  setHeartColor(randomColor());
                }}
                className="mx-2"
                style={{ color: heartColor, cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </i>{" "}
              por{" "}
              <a
                href="https://youtu.be/dQw4w9WgXcQ"
                target={"_blank"}
                className="text-neutral-6 mx-1 dark:text-white hover:text-primary hover:dark:text-[#b782fa]"
              >
                Eddy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
