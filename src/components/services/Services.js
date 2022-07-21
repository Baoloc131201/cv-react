import React from "react";
import "./sevices.css";
import logoService1 from "../../assets/service-1.svg";
import logoService2 from "../../assets/service-2.svg";
import logoService3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: logoService1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: logoService2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: logoService3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
  },
];
const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="services__container">Services</h2>
      <div className="services__container grid">
        {data.map((item, index) => {
          return (
            <div className="services__card" key={item.id}>
              <img src={item.image} alt="" className="services__img" />
              <h3 className="services__title">{item.title}</h3>
              <p className="services__description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
