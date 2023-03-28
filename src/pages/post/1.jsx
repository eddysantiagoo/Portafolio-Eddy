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
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte002b5f67a4cd5a8/60dd28f276a3de39ad1aee79/918da727f3f3faa1831f875fbe4f34c7e0e537d8.jpg"
            alt="{data.title}"
            className="rounded-lg absolute h-full w-full"
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
