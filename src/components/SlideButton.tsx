import React from "react";
import "./slide-button.css";

const SlideButton: React.FC<any> = ({ slideBox }) => {
  return (
    <div className="slider">
      <p
        className="slider__btn slider__btn--left"
        onClick={() => slideBox("dec")}
      >
        {"<"}
      </p>
      <p
        className="slider__btn slider__btn--right"
        onClick={() => slideBox("inc")}
      >
        {">"}
      </p>
    </div>
  );
};

export default SlideButton;
