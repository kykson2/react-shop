import React from 'react';
import MainPageCarousel from '@/components/main/carousel/MainPageCarousel';
import FashionPage from '@/components/fashion/FashionPage';

const MainPage: React.FC = () => {
    const limit = 4;
    return (
        <div className="mainpage-area">
            <MainPageCarousel />
            <FashionPage limit={limit} />
        </div>
    );
};

export default MainPage;
