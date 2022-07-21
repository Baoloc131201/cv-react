import React from "react";
import "./about.css";
import logoAbout from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={logoAbout} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello, my name is Huynh Bao Loc, I live in Ho Chi Minh City, I
              have a bit of experience in website design and some programming
              languages, libraries to complete a small project
            </p>
            <a
              href="https://www.topcv.vn/xem-cv/VAAFU1EGBVFWU1QGWVMABw4BD1NVUwBTW1FVAQ0493"
              className="btn"
              target="black"
            >
              Download CV
            </a>
          </div>

          <div className="about__skill grid">
            <div className="skill__data">
              <div className="skill__titles">
                <h3 className="skill__name">HTML</h3>
                <span className="skill__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage html"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skill__titles">
                <h3 className="skill__name">CSS</h3>
                <span className="skill__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage css"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skill__titles">
                <h3 className="skill__name">JavaScript</h3>
                <span className="skill__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage javascript"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skill__titles">
                <h3 className="skill__name">UX/UI Design</h3>
                <span className="skill__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage UX__UI"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skill__titles">
                <h3 className="skill__name">ReactJS</h3>
                <span className="skill__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage reactjs"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skill__titles">
                <h3 className="skill__name">Java</h3>
                <span className="skill__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage java"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skill__titles">
                <h3 className="skill__name">NodeJS</h3>
                <span className="skill__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage nodejs"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
