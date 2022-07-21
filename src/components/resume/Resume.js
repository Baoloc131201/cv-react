import React from "react";
import { Data } from "./Data";
import Card from "./Card";
import "./resume.css";
const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((item, index) => {
            if (item.category === "education") {
              return (
                <>
                  <Card key={index} item={item} />
                </>
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((item, index) => {
            if (item.category === "experience") {
              return (
                <>
                  <Card key={index} item={item} />
                </>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
