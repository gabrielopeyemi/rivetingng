import Link from "next/link";
import React, { useEffect, useState } from "react";

import img1 from "../../img/images/img1.jpeg";
import img8 from "../../img/images/img8.jpeg";
import img3 from "../../img/images/img3.jpg";
import img2 from "../../img/images/img2.jpeg";
import theater from "../../img/Theatre/DSC_0433.jpg";

const images = [
  {
    img: img1,
  },
  {
    img: img8,
  },
  {
    img: img3,
  },
  {
    img: img2,
  },
  {
    img: theater,
  },
];

export default function MainCarousel() {
  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <section id="intro">
      <div className="intro-container">
        <div
          id="introCarousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {images.map((item, i) => (
              <div
                key={i}
                className={`carousel-item ${
                  i === myIndex ? "active" : "carousel-hidden"
                }`}
                style={{ backgroundImage: `url(${item.img.src})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2></h2>
                    <Link href="/service" className="btn-get-started scrollto">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
