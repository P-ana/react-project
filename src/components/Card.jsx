import React from "react";

function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.src} alt={props.alt} />
      </div>
      <div className="bottom">
        <p className="skill">
          {props.skills.map((skill, index) => (
            <span key={index}>
              {skill}
              {index < props.skills.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p className="info">{props.quote}</p>
      </div>
    </div>
  );
}

export default Card;
