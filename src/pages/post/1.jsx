import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";


function EjemploRuta(){

  const router = useRouter()

  return (
      <div className="max-w-7xl mx-auto py-12 w-full px-6 lg:px-0">
        <div className="relative h-96 w-full">
          <img
            src="https://i.imgur.com/zfMBgr0.jpg"
            alt="Imagen Andres iniesta"
            className="rounded-xl absolute h-full w-full object-cover object-center sm:object-contain"
          />
          <div className="absolute bottom-0 left-0 w-full h-full dark:bg-black/50 shadow-xl" />
        </div>

        <div className="mt-8">
          <p className="text-4xl font-bold mt-8">Locoooo</p>
          <div className="flex items-center gap-4 mt-2">
            <div>
              <i className="fas fa-clock text-zinc-400" />
              <span className="text-zinc-400 ml-2">
                10 minutes of reading
              </span>
            </div>
            <div>
              <i className="fas fa-calendar-alt text-zinc-400" />
              <span className="text-zinc-400 ml-2">
                7 de febereo
              </span>
            </div>
          </div>
          <article className="mt-12 prose prose-sm lg:prose-lg dark:prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline">
            <ReactMarkdown>
            Pruebaasasasa asasa
            </ReactMarkdown>
          </article>
        </div>
      </div>
  );


}


export default EjemploRuta;
