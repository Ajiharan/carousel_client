import React from "react";

type Image = {
  src: string;
  alt: string;
};
const Slide: React.FC<Image> = (props: Image) => {
  return (
    <React.Fragment>
      <img {...props} />
    </React.Fragment>
  );
};

export default Slide;
