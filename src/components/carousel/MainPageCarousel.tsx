import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CarouselData } from "./CarouselData";

const MainPageCarousel: React.FC = () => {
  return (
    <div className="w-full z-10">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={7000}
      >
        {CarouselData.map((item) => {
          return (
            <div key={item.alt}>
              <img src={item.src} alt={item.alt}></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MainPageCarousel;
