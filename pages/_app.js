import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import "../styles/animate.css";
import "../styles/bootstrap.min.css";
import "../styles/global.css";
import "../styles/templatemo-style.css";

// animation library
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
