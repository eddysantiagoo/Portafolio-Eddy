import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      class="scrollArrow text-white"
      style={{ display: showScroll ? "flex" : "none" }}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollArrow;
