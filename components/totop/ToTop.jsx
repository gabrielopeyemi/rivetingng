import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function ToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <a className={visible && "back-to-top"} onClick={scrollToTop}>
      <BsArrowUp
        fill="#ffffff"
        style={{ width: "20px", height: "20px" }}
      />
    </a>
  );
}
