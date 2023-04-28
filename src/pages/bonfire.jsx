import React from "react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const bonfire = () => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const songs = [
    "https://dl.dropboxusercontent.com/s/6tu2v0dcd3c2rn8/Dark%20Souls%20-%20Gwyn%20Lord%20of%20Cinder.mp3",
    "https://dl.dropboxusercontent.com/s/a42hwkwco6p2kc1/Dark%20Souls%20-Firelink%20Shrine.mp3",
    "https://dl.dropboxusercontent.com/s/s7u74ptmip8lj8n/Dark%20Souls%20-%20Menu%20Theme.mp3",
    "https://dl.dropboxusercontent.com/s/9uqyhkbs6qqyxus/Dark%20Souls%20%20-%20Great%20Grey%20Wolf%20Sif.mp3",
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
      <article className="mt-3 mb-6 text-center prose-lg dark:prose-invert">
        <h3 className="animate-gradient-text">
          You are in the bonfire, just chill
        </h3>
        <Tilt tiltReverse={true}>
          <img
            className="rounded-xl mx-auto my-4 drop-shadow-lg"
            src="https://64.media.tumblr.com/3b5440683e71e2d39f998c6ed99c3feb/tumblr_ord7ll2peg1sx56xso1_1280.gif"
            alt="Gif Dark souls with the bonfire!"
          />
        </Tilt>
        <button class="button1" onClick={togglePlay}>
          {playing ? "Pause" : "Click here to turn on the bonfire"}
        </button>
        <p className="text-lg mb-0 text-zinc-400 select-none">
          This 4 songs was provided by:
        </p>
        <a href="https://www.dropbox.com" target="_blank">
          <img
            src="/images/LogoDropbox.png"
            alt="Imagen logo Dropbox"
            className="w-42 h-12 mx-auto mt-0"
          />
        </a>
      </article>
    </div>
  );
};

export default bonfire;
