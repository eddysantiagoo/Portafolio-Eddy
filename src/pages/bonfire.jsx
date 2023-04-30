import React from "react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { NextSeo } from "next-seo";
import Image from "next/image";

const bonfire = () => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const songs = [
    "https://dl.dropboxusercontent.com/s/6tu2v0dcd3c2rn8/Dark%20Souls%20-%20Gwyn%20Lord%20of%20Cinder.mp3",//8
    "https://dl.dropboxusercontent.com/s/a42hwkwco6p2kc1/Dark%20Souls%20-Firelink%20Shrine.mp3", //1
    "https://dl.dropboxusercontent.com/s/272hi7icnblj44f/Dark%20Souls%203%20-%20Main%20Menu%20Theme.mp3",//2
    "https://dl.dropboxusercontent.com/s/ezjc6blef54lfcq/Dark%20Souls%202%20-%20Majula.mp3",//3
    "https://dl.dropboxusercontent.com/s/s7u74ptmip8lj8n/Dark%20Souls%20-%20Menu%20Theme.mp3",//4
    "https://dl.dropboxusercontent.com/s/qo5qzcy60jzx4yq/Dark%20Souls%202%20-%20Longing.mp3",//5
    "https://dl.dropboxusercontent.com/s/2nlcogwzwlh2oex/Dark%20Souls%203%20Unused%20Soundtrack%20-%20Slave%20Knight%20Gael%20Transitory%20Lands.mp3",//6
    "https://dl.dropboxusercontent.com/s/9uqyhkbs6qqyxus/Dark%20Souls%20%20-%20Great%20Grey%20Wolf%20Sif.mp3",//7
  ];

  const togglePlay = () => {
    if (audio && !audio.paused) {
      audio.pause();
      setPlaying(false);
    } else {
      const nextIndex = (currentIndex + 1) % songs.length;
      const newAudio = new Audio(songs[nextIndex]);
      setAudio(newAudio);
      newAudio.play();
      setPlaying(true);
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div>
      {/* SEO CON NEXT */}
      <NextSeo
        title="Welcome to the bonfire"
        titleTemplate=" Eddy | %s"
        description="This is the official radio of the lord Gwyn"
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        openGraph={{
          type: "website",
          title: "Eddy | Welcome to the bonfire",
          description:
            "Just chill and breathe the cinder men! Our lord gwyn demands it",
          images: [
            {
              url: "https://images3.alphacoders.com/669/669303.png",
              width: 1200,
              height: 630,
              alt: "Image of the bonfire in Dark Souls 1",
            },
          ],
        }}
      />

      <article className="mt-3 mb-6 text-center prose-lg dark:prose-invert">
        <div class="neon-text">
          You are in the bonfire, just chill and breathe the cinder
        </div>
        <Tilt tiltReverse={true}>
          <img
            className="rounded-xl mx-auto my-4 drop-shadow-lg"
            src="https://64.media.tumblr.com/3b5440683e71e2d39f998c6ed99c3feb/tumblr_ord7ll2peg1sx56xso1_1280.gif"
            alt="Gif Dark souls with the bonfire!"
          />
        </Tilt>
        <button class="button1" onClick={togglePlay}>
          {playing ? "Stop and continue with the next soundtrack" : "Click here to turn on the bonfire"}
        </button>
        <h4 className="text-xl mb-4 text-zinc-100 select-none">
          What is the bonfire?
        </h4>
        <p className="text-lg mb-0 mx-auto lg:mx-28 text-zinc-400">
          The bonfire it's a simple music player to show and hear the esthetic of the
          Dark Souls video game accompanied of a few soundtracks from the series
          (DS1, DS2 and DS3), I think that the power of music is amazing, and
          sometimes the power of the soundtrack music of movies, series,
          videogames or even classic music can touch fibers of your soul.
          <br />
          <br />
          The music of Dark Souls has been recognized how a really interesting
          soundtrack, if you are interested to learn more about this, you can
          check this video of{" "}
          <a
            href="https://youtu.be/LjKAQ-zI5Ns"
            target="_blank"
            className="text-blue-500 hover:text-[#ff1500] underline underline-offset-2"
          >
            Jaime Altozano explaining more about the theory of this soundtrack
          </a>{" "}
          (The video is in Spanish but has subtitles for English and Russian)
        </p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900" />
        <p className="text-lg mb-0 text-zinc-400 select-none">
          This 8 songs was provided by:
        </p>
        <a href="https://www.dropbox.com" target="_blank">
          <img
            src="/images/LogoDropbox.png"
            alt="Imagen logo Dropbox"
            className="w-42 h-12 mx-auto mt-0 animate-pulse"
          />
        </a>
      </article>
    </div>
  );
};

export default bonfire;
