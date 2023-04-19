import React from "react";
import { useState } from "react";

const TheBonfire = () => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const songs = [
    "https://dl.dropboxusercontent.com/s/6tu2v0dcd3c2rn8/Dark%20Souls%20-%20Gwyn%20Lord%20of%20Cinder.mp3",
    "https://dl.dropboxusercontent.com/s/a42hwkwco6p2kc1/Dark%20Souls%20-Firelink%20Shrine.mp3",
    "https://dl.dropboxusercontent.com/s/s7u74ptmip8lj8n/Dark%20Souls%20-%20Menu%20Theme.mp3",
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
      <article className="mt-3 mb-6 text-center prose-lg dark:prose-inver ">
        <h3 className="animate-gradient-text">
          You are in the bonfire, just chill
        </h3>
        <img
          class="rounded-xl mx-auto my-4"
          src="https://64.media.tumblr.com/3b5440683e71e2d39f998c6ed99c3feb/tumblr_ord7ll2peg1sx56xso1_1280.gif"
          alt=""
        />
        <button className=" mb-8 button" onClick={togglePlay}>
          {playing ? "Pause" : "Click here to turn on the bonfire"}
        </button>
        <p className="text-lg mb-0 text-zinc-400 select-none">
          This 3 songs was provided by:
        </p>
        <a
          className="text-[#28679c] hover:text-white"
          href="https://www.dropbox.com/home"
          target="_blank"
        >
          Dropbox
        </a>
      </article>
    </div>
  );
};

export default TheBonfire;
