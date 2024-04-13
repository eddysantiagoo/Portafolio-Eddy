import React, { useState, useEffect } from "react";

function TimeZone() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = { hour: "numeric", minute: "numeric", second: "numeric" };
      const formatter = new Intl.DateTimeFormat("en-US", {
        ...options,
        timeZone: "America/Bogota",
      });
      setTime(formatter.format(date));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <article className="h-[100px] overflow-hidden relative rounded-2xl my-2">
      <div className="grid absolute top-1/4 left-[20px]">
        <span className="font-bold text-lg">Medellin, COL</span>
        <span className="font-thin text-sm text-[#7e7e7e]">{time} Local Time</span>
      </div>
      <img
        decoding="async"
        className="absolute top-0 left-0 w-full h-full object-cover img-map"
        srcset="https://framerusercontent.com/images/HFLO9jxwhZXs3FhX4jM8zPTcs.png?scale-down-to=512 512w,https://framerusercontent.com/images/HFLO9jxwhZXs3FhX4jM8zPTcs.png 760w"
        src="https://framerusercontent.com/images/HFLO9jxwhZXs3FhX4jM8zPTcs.png"
        alt="Mapa"
      />
        <span className="animate-pulse inline-flex h-3 w-3 rounded-full bg-white shadow-2xl opacity-75 absolute top-1/4 right-[150px]"></span>      
    </article>
  );
}

export default TimeZone;
