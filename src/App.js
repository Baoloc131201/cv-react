import React from "react";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Back from "./components/Back.js/Back";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
        <Back />
      </main>
    </>
  );
}

export default App;
