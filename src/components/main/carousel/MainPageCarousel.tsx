import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselData from '@/components/main/carousel/CarouselData';

const MainPageCarousel: React.FC = () => (
    <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={7000}
        className="relative w-full z-10 mb-10"
    >
        {CarouselData.map((item) => (
            <div key={item.alt}>
                <div className="carousel-description absolute top-1/4 left-1/4 -translate-x-1/4 md:w-3/4 text-left md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4">
                    <h2 className="text-2xl font-bold text-white md:text-4xl">
                        {item.title}
                    </h2>
                    <p className="text-base font-medium text-white my-2 md:text-xl md:text-gray-200">
                        {item.content}
                    </p>
                    <div className="flex bg-neutral-900 w-24 h-8 my-5 text-gray-400 rounded-lg md:w-28 md:h-12 md:text-white md:bg-slate-600 ">
                        <Link
                            to={item.path ? item.path : '/error'}
                            className="btn flex self-center mx-auto font-semibold"
                        >
                            바로가기
                            <FiIcons.FiArrowRight className="flex w-4 h-4 ml-1 self-center" />
                        </Link>
                    </div>
                </div>
                <img
                    src={item.src}
                    alt={item.alt}
                    className="sm:h-56 md:h-4/6 max-h-[40rem]"
                />
            </div>
        ))}
    </Carousel>
);

export default MainPageCarousel;
