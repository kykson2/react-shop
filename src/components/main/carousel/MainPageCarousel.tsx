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
                <div className="carousel-description absolute w-full top-12 left-0 text-left m-4">
                    <h2 className="text-2xl font-bold text-white">
                        {item.title}
                    </h2>
                    <p className="text-base font-medium text-white my-2">
                        {item.content}
                    </p>
                    <div className="flex bg-neutral-900 w-24 h-8 my-5 text-gray-400 rounded-lg">
                        <Link
                            to={item.path ? item.path : '/error'}
                            className="btn flex self-center mx-auto font-semibold"
                        >
                            바로가기
                            <FiIcons.FiArrowRight className="flex w-4 h-4 ml-1 self-center" />
                        </Link>
                    </div>
                </div>
                <img src={item.src} alt={item.alt} className="h-56" />
            </div>
        ))}
    </Carousel>
);

export default MainPageCarousel;
