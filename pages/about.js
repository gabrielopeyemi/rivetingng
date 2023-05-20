import React from "react";
import WhoWeAre from "../components/home/WhoWeAre";
import Services from "../components/home/Services";
import Partner from "../components/home/Partner";
import img1 from "../img/images/img8.jpeg";

export default function about() {
  return (
    <div>
      <section
        id="facts"
        style={{ backgroundImage: `url(${img1.src})` }}
        class="wow fadeIn"
      >
        <div className="container">
          <header className="section-header">
            <h1
              style={{
                fontSize: " 72px",
                fontWeight: "700",
                fontFamily: "futura-pt",
                color: "white",
                backgroundColor: "black",
                opacity: " 0.2",
              }}
            >
              ABOUT US
            </h1>
            <p></p>
          </header>
        </div>
      </section>
      <WhoWeAre />
      <Services />
      <Partner />
    </div>
  );
}
