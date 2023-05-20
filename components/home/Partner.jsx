import React from "react";
import img1 from "../../img/clients/client-2.png";
import img2 from "../../img/clients/client-3.jpg";
import img3 from "../../img/clients/logo.png";
import img4 from "../../img/clients/index.jpeg";
import img5 from "../../img/clients/mtn.png";
import img6 from "../../img/clients/chevron.png";
import img7 from "../../img/clients/lagos.png";
import Image from "next/image";

const images = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
  {
    img: img7,
  },
];

export default function Partner() {
  return (
    <section id="clients" className="wow fadeInUp">
      <div className="container">
        <header className="section-header">
          <h3>Partnership Support</h3>
        </header>

        <div className="owl-carousel clients-carousel">
          {images.map((image, i) => (
            <Image
              width={150}
              height={100}
              object-fit="cover"
              key={i}
              src={image.img}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}
