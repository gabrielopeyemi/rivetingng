import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <header id="header" className={scrolled && "header-scrolled"}>
      <div className="container-fluid">
        <div id="logo" className="pull-left">
          <h1>
            <Link
              href="/"
              className="scrollto"
              style={{ fontFamily: "Butcherman" }}
            >
              Riveting<span style={{ color: "#138bd3" }}>ng</span>
            </Link>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>--> */}
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Who we are</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/management">Management</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a href="https://tawk.to/chat/5b785d25afc2c34e96e7b24f/1clehdbv3">
                Mail us
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- #nav-menu-container --> */}
      </div>
    </header>
  );
}
