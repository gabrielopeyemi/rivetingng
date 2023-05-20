import React from "react";
import Ceo from "../img/images/leke.jpg";
import Image from "next/image";

export default function management() {
  return (
    <div>
      <main>
        <section
          style={{
            backgroundColor: "#000",
            paddingBottom: "5%",
            paddingTop: "5% ",
          }}
        >
          <center>
            <h1>CEO</h1>
          </center>
        </section>
        <br />

        {/* <!--============================= BOOKING DETAILS =============================--> */}
        <section className="light-bg booking-details_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 responsive-wrap">
                <div className="booking-checkbox_wrap">
                  <div className="booking-checkbox">
                    <div>
                      <Image
                        src={Ceo}
                        className="img-fluid"
                        style={{ width: "100%", height: "100%" }}
                        alt="#"
                      />
                    </div>
                    <br></br>

                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-md-6 responsive-wrap">
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                  Hello, I am <strong>Leke Akinrowo</strong> studied and
                  obtained a Bachelor of Arts degree in Dramatic Arts from the
                  Obafemi Awolowo University, Ile-Ife in 1989.{" "}
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                  Before then, he attended the Maryland Nursery School at
                  Maryland in Lagos before proceeding to St. Peter’s
                  Demonstration School, Akure, to complete his primary school
                  education.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                  His earliest worldview was shaped by the countless dog and
                  tortoise tales by moonlight which he was regaled with as a
                  little boy. From his early secondary school days at St. Thomas
                  Aquinas College, Akure, he came across deeper intellectual
                  influences in the form of war stories and great military
                  conquests from history books and war movies, and began to
                  incline towards the arts and the humanities, which eventually
                  saw him embarking on his course of study.{" "}
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                  When he started studying Dramatic Arts at Ife, he took
                  interest in the philosophical movements which developed in
                  Europe in the aftermath of the two world wars. As he got
                  introduced to the great philosophies and ideological movements
                  in Europe and Africa, from Plato, Socrates and Aristotle, to
                  Descartes, Freud, Awolowo, Soyinka and Mandela, his world view
                  took a definite slant towards free-thinking humanism; until he
                  got convicted about the Christian pathway to salvation and
                  redemption in the twilight of the 1980s, after which he fell
                  in love with King Solomon’s slant to life and godliness.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                  His beliefs and interests today still allude to these early
                  influences.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                  After schooling, Leke worked briefly with Chuck Mike’s
                  Collective Artistes and the Performance Studio Workshop, Tempo
                  Productions, an oil servicing firm known as Westin Oaks
                  Petroleum, an engineering firm called Oshea Projects Limited,
                  before ending up at Chevron Nigeria Limited in 1995 where he
                  spent 21 years until retirement in 2016.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                  Leke recently produced The Walking Stick, a stage play written
                  and directed by Felix Okolo, and is currently working on his
                  first feature film titled Caged in the Creeks.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                  He is married with children.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <br></br>
    </div>
  );
}
