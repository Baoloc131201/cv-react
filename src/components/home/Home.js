import React from "react";
import "./home.css";
import logome from "../../assets/avatar-1.svg";
import logome1 from "../../assets/149264761_1873162592839223_5188686004286087758_n.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Services from "../services/Services";
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={logome1} alt="" className="imghome" />
        <h1 className="home__name">Huỳnh Bảo Lộc</h1>
        <span className="home__education">I'm Front-End developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire me
        </a>
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
