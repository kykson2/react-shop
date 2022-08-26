import React from 'react';
import MainPageCarousel from '@/components/carousel/MainPageCarousel';
import FashionPage from '@/pages/fashion/FashionPage';
import AccessoriesPage from '@/pages/accessories/AccessoriesPage';
import DigitalPage from '@/pages/digital/DigitalPage';

import HistoryView from '@/components/historyView/HistoryView';

const MainPage: React.FC = () => {
    // 각 카테고리별 보여줄 상품 수
    const limit = 4;
    const addr = '홈';

    return (
        <div className="mainpage-area">
            <MainPageCarousel />
            {/* 미리 보기 */}
            <HistoryView />
            <FashionPage limit={limit} prevAddr={addr} />
            <AccessoriesPage limit={limit} prevAddr={addr} />
            <DigitalPage limit={limit} prevAddr={addr} />
        </div>
    );
};

export default MainPage;
