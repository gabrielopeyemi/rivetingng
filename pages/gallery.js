import React, { useState } from "react";
import eventImg from "../img/event/img08.jpg";
import { data } from "../img";
import Categories from "../components/categories/Categories";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { TfiEye } from "react-icons/tfi";
import PortfolioOverlay from "../components/portfolioOverlay/PortfolioOverlay";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

export default function gallery() {
  const [galleryItems, setGalleryItems] = useState(data);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);
  const [show, setShow] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const filterItems = (category) => {
    if (category === "all") {
      setGalleryItems(data);
      return;
    } else {
      const newItems = data.filter((item) => item.category === category);
      setGalleryItems(newItems);
    }
    setActiveCategory(category);
  };

  const toggleProject = (image) => {
    setActiveImage(image);
    show ? setShow(false) : setShow(true);
  };

  return (
    <div>
      <section
        id="facts"
        style={{ backgroundImage: `url(${eventImg.src})` }}
        className="wow fadeIn"
      >
        <div className="container">
          <header className="section-header">
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "700",
                fontFamily: "futura-pt",
                color: "white",
                backgroundColor: " black",
                opacity: " 0.2",
              }}
            >
              GALLERY
            </h1>
            <p></p>
          </header>
        </div>
      </section>
      {/* <!-- #facts -->


        <!--==========================
      Portfolio Section
    ============================--> */}
      <section id="portfolio" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3 className="section-title">Our Gallery</h3>
          </header>
          <Categories
            categories={allCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filterItems={filterItems}
          />

          <div className="row portfolio-container">
            {galleryItems.map((gallery, i) => {
              const { name, content, img, category } = gallery;

              return (
                <>
                  <div
                    key={i}
                    data-aos={`slide-up`}
                    className={`col-lg-4 col-md-6 portfolio-item filter-app  `}
                  >
                    <div className="portfolio-wrap">
                      <figure>
                        <Image
                          src={img}
                          style={{ width: "100%", height: "100%" }}
                          className="img-fluid"
                          object-fit="contain"
                          alt=""
                        />
                        <p
                          onClick={() => toggleProject(img)}
                          className="link-preview"
                        >
                          <TfiEye
                            fill="#000000"
                            style={{ width: "18px", height: "18px" }}
                          />
                        </p>
                        <a
                          href="#"
                          className="link-details"
                          title="More Details"
                        >
                          <GoLinkExternal
                            fill="#000000"
                            style={{ width: "18px", height: "18px" }}
                          />
                        </a>
                      </figure>

                      <div className="portfolio-info">
                        <h4>
                          <p>{name}</p>
                        </h4>
                        <p>{content}</p>
                      </div>
                    </div>
                  </div>
                  {/* {show && (
                    <PortfolioOverlay
                      toggleProject={toggleProject}
                      image={gallery.img}
                    />
                  )} */}
                </>
              );
            })}
            {show && (
              <PortfolioOverlay
                toggleProject={toggleProject}
                image={activeImage}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
