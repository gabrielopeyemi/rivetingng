import React from "react";
import { useRouter } from "next/router";
import { BsSpeedometer2 } from "react-icons/bs";
import { TfiEye } from "react-icons/tfi";
import { HiOutlineNewspaper } from "react-icons/hi";

export default function WhoWeAre() {
  const router = useRouter();
  return (
    <section className="container" id={router === "/" ? "who-we-are" : "about"}>
      <header className="section-header">
        <h3>Who we are</h3>
        <p style={{ fontSize: "15px" }}>
          Riveting Integrated Entertainment Limited (RIEL) is a Nigerian
          production company with interests in film, live theatre, music, TV,
          publishing, events promotion, artiste management and art distribution.
        </p>
      </header>

      <div className="row about-cols">
        <div className="col-md-4 wow fadeInUp">
          <div className="about-col">
            <div className="img">
              <div className="icon">
                <BsSpeedometer2
                  fill="#ffffff"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <br></br>
            </div>
            <h2 className="title">
              <a href="#">Our Mission</a>
            </h2>
            <p>
              Provide highest quality entertainment experiences that inspire and
              stir the soul.
            </p>
          </div>
        </div>

        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
          <div className="about-col">
            <div className="img">
              <div className="icon">
                <TfiEye
                  fill="#ffffff"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <br></br>
            </div>
            <h2 className="title">
              <a href="#">Our Vision</a>
            </h2>
            <p>
              To be the Nigerian integrated entertainment company most
              recognized for its world-className entertainment products and
              services, leading to continuous improvement and profitable growth.
            </p>
          </div>
        </div>

        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="about-col">
            <div className="img">
              <div className="icon">
                <HiOutlineNewspaper
                  fill="#ffffff"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <br></br>
            </div>
            <h2 className="title">
              <a href="#">Our Plan</a>
            </h2>
            <p>
              RIEL is set to tour the six universities in six geo-political
              zones in the country. They are: Obafemi Awolowo Unversity, Ile-ife
              (O.A.U), University of Port Harcourt, University of Nigeria,
              Nsukka, University if Ilorin, Ahmadu Bello University, Zaria and
              the University of Jos. with a stage play to enlighten and
              sensitize the public about drug abuse and addiction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
