import React, { useEffect, useState } from "react";
import Link from "next/link";
import Img1 from "../../img/event/img06.jpg";
import Img2 from "../../img/event/img25.jpg";
import Img3 from "../../img/event/img30.jpg";
import Image from "next/image";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import {
  RiFacebookFill,
  RiGoogleFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import ToTop from "../totop/ToTop";

const images = [
  {
    img: Img1,
  },
  {
    img: Img2,
  },
  {
    img: Img3,
  },
];

export default function Footer() {
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
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>
                  <Link
                    style={{ fontFamily: "Butcherman", color: "white" }}
                    href="/"
                  >
                    Riveting<span style={{ color: "#138bd3" }}>ng</span>
                  </Link>
                </h3>
                <p>
                  Riveting Integrated Entertainment Limited (RIEL) is a Nigerian
                  production company with interests in film, live theatre,
                  music, TV, publishing, events promotion, artiste management
                  and art distribution
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="ion-ios-arrow-right"></i>{" "}
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="ion-ios-arrow-right"></i>{" "}
                    <a href="https://tawk.to/chat/5b785d25afc2c34e96e7b24f/1clehdbv3">
                      Chat us
                    </a>
                  </li>
                  <li>
                    <i className="ion-ios-arrow-right"></i>{" "}
                    <a href="http://www.rivetingng.com/blog/">Blog</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  4B Plot 127, Road B2, <br />
                  Carllton Gate Estate, Chevron Drive, Lekki Peninsula, Lagos{" "}
                  <br />
                  <strong>Phone:</strong>
                  <a href="tel:+2349034498422">(+234) 903 4498 422</a>
                  <br></br>
                  <strong>Email:</strong> hello@rivetingng.com<br></br>
                </p>

                <div className="social-links">
                  <a href="https://twitter.com/rivetingng/" className="twitter">
                    <GrTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/RivetingNg/"
                    className="facebook"
                  >
                    <RiFacebookFill />
                  </a>
                  <a
                    href="https://www.instagram.com/rivetingng/"
                    className="instagram"
                  >
                    <RiInstagramFill />
                  </a>
                  <a href="#" className="google-plus">
                    <RiGoogleFill />
                  </a>
                  <a href="#" className="linkedin">
                    <RiLinkedinFill />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Gallery</h4>
                <div>
                  <div
                    className="w3-content w3-section"
                    style={{ maxWidth: "500px" }}
                  >
                    {images.map((item, i) => (
                      <div
                        key={i}
                        className={`carousel-item ${
                          i === myIndex ? "active" : "carousel-hidden"
                        }`}
                      >
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          className="mySlides"
                          object-fit="cover"
                          src={item.img}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ToTop />
    </>
  );
}
