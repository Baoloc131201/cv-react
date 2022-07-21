import React from "react";

const Card = ({ item }) => {
  return (
    <div className="timeline__item">
      <i className={item.icon}></i>
      <span className="timeline__date">{item.year}</span>
      <h3 className="timeline__title">{item.title}</h3>
      <p className="timeline__text">{item.desc}</p>
    </div>
  );
};

export default Card;
