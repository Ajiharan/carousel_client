import React from "react";

type Title = {
  title: string;
  subTitle: string;
};
const SlideTitle: React.FC<Title> = ({ title, subTitle }: Title) => {
  return (
    <div className="slide__title">
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  );
};

export default SlideTitle;
