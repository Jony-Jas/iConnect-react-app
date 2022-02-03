import React from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import AboutStudy from "./components/AboutStudy";
import Accordion from "./components/Accordion";
import Gallery from "./components/Gallery";
import Question from "./components/Question";
import Footer from "./components/Footer";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <AboutStudy />
      <Section2 />
      <Section3 />
      <Accordion />
      <Gallery />
      <Section4 />
      <Question />
      <Footer />
    </>
  );
}

export default App;
