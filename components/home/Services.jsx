import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../img/gallery/music.jpeg";
import img2 from "../../img/event/img21.jpg";
import img3 from "../../img/gallery/theatre.jpg";
import img4 from "../../img/images/img3.jpg";
import Link from "next/link";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Image from "next/image";

const data = [
  {
    link: "/music",
    name: "Muic Production",
    img: img1,
  },
  {
    link: "/event",
    name: "Events promotion",
    img: img2,
  },
  {
    link: "/theatre",
    name: "Theatre Production",
    img: img3,
  },
  {
    link: "/tv-production",
    name: "Tv Production",
    img: img4,
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header wow fadeInUp">
          <h3>Services</h3>
          <p style={{ fontSize: "15px" }}>
            Riveting Integrated Entertainment Limited (RIEL) is a Nigerian
            production company with interests in film, live theatre, music, TV,
            publishing, events promotion, artiste management and art
            distribution
          </p>
        </div>

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <Carousel
              autoPlay={true}
              interval={3500}
              showStatus={false}
              showThumbs={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <div
                  onClick={onClickHandler}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    color: "white",
                    padding: "5px",
                    zIndex: "10",
                  }}
                >
                  <GrFormPrevious
                    fill="#ffffff"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
              )}
              //
              renderArrowNext={(onClickHandler, hasNext, label) => (
                <div
                  onClick={onClickHandler}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    color: "white",
                    padding: "5px",
                    zIndex: "10",
                  }}
                >
                  <GrFormNext
                    fill="#ffffff"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
              )}
              infiniteLoop={true}
            >
              {data.map((item, i) => (
                <>
                  <div key={i} className="item">
                    <Link href={item.link}>
                      <Image
                        src={item.img}
                        object-fit="contain"
                        alt={`carousel-${i}`}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Link>
                    <div className="carousel-caption">
                      <h2>
                        <Link
                          style={{ color: "aliceblue", fontWeight: " bold" }}
                          href={item.link}
                        >
                          {item.name}
                        </Link>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
