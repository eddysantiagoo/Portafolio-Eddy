import React from "react";
import { useState } from "react";

const TheBonfire = () => {
  const [playing, setPlaying] = useState(false);
  const TheArt = '"The art of the bonfire"'

  const togglePlay = () => {
    const miAudio = document.getElementById("miAudio");
    if (playing) {
      miAudio.pause();
      setPlaying(false);
    } else {
      miAudio.play();
      setPlaying(true);
    }
  };

  return (
    <div>
      <article className="mt-3 text-center prose-lg dark:prose-invert prose-a:text-blue-500 prose-a:no-underline">
        <h3 className="animate-gradient-text">
          You are in the bonfire, just chill
        </h3>
       <img class="rounded-xl mx-auto my-4" src="https://64.media.tumblr.com/3b5440683e71e2d39f998c6ed99c3feb/tumblr_ord7ll2peg1sx56xso1_1280.gif" alt="" />
        <button className="mb-2 mt-0 button" onClick={togglePlay}>{playing ? "Pause" : `Click here to feel ${TheArt}`}</button>
        <audio
          id="miAudio"
          src="/Dark Souls - Menu Theme.mp3"
          autoPlay
        ></audio>
        
      </article>
    </div>
  );
};

export default TheBonfire;
