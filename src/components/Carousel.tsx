import React, { useEffect, useState, useRef } from "react";
import axios from "service/Axios";
import "./carousel.css";
import Slide from "./Slide";
import SlideButton from "./SlideButton";
import SlideTitle from "./SlideTitle";

type ICarousel = {
  slides: number;
  infinite: boolean;
};

type ISlide = {
  image: string;
  title: string;
  subTitle: string;
};

const Carousel: React.FC<ICarousel> = (props: ICarousel) => {
  const [slides, setSlides] = useState<ISlide[]>([]);
  const [index, SetIndex] = useState<number>(0);

  const ref = useRef<any>(null);

  useEffect(() => {
    axios
      .get(`api/carousel?slides=${props.slides}`)
      .then((res) => {
        setSlides(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.infinite, props.slides]);

  useEffect(() => {
    ref.current?.querySelectorAll(".slide").forEach((slide: any, i: number) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  }, [index]);

  const slideBox = (action: string) => {
    if (props.infinite === true) {
      if (action === "inc") {
        if (index === props.slides - 1) {
          SetIndex(0);
        } else {
          SetIndex(index + 1);
        }
      } else if (action === "dec") {
        if (index === 0) {
          SetIndex(props.slides - 1);
        } else {
          SetIndex(index - 1);
        }
      }
    } else {
      if (action === "inc") {
        if (index === props.slides - 1) {
        } else {
          SetIndex(index + 1);
        }
      } else if (action === "dec") {
        if (index === 0) {
        } else {
          SetIndex(index - 1);
        }
      }
    }
  };

  return (
    <div className="Carousel-container" ref={ref}>
      {slides.map((slide) => (
        <div className="slide" key={slide.title}>
          <Slide src={slide.image} alt={slide.title} />
          <SlideTitle title={slide.title} subTitle={slide.subTitle} />
        </div>
      ))}
      {props.slides > 1 && <SlideButton slideBox={slideBox} />}
    </div>
  );
};

export default Carousel;
