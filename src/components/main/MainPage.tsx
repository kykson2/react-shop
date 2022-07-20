import React from 'react';
import MainPageCarousel from '@/components/main/carousel/MainPageCarousel';
import FashionPage from '@/components/fashion/FashionPage';
import AccessoriesPage from '@/components/accessories/AccessoriesPage';
import DigitalPage from '@/components/digital/DigitalPage';

const MainPage: React.FC = () => {
    const limit = 4;
    return (
        <div className="mainpage-area">
            <MainPageCarousel />
            <FashionPage limit={limit} />
            <AccessoriesPage limit={limit} />
            <DigitalPage limit={limit} />
        </div>
    );
};

export default MainPage;
