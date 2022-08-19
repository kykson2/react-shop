import React, { useEffect } from 'react';
import MainPageCarousel from '@/components/main/carousel/MainPageCarousel';
import FashionPage from '@/components/fashion/FashionPage';
import AccessoriesPage from '@/components/accessories/AccessoriesPage';
import DigitalPage from '@/components/digital/DigitalPage';
import { useDispatch } from 'react-redux';
import { setbreadCrumbsReducer } from '@/store/breadCrumbsSlice';
import HistoryView from '@/components/historyView/HistoryView';

const MainPage: React.FC = () => {
    const dispatch = useDispatch();
    // 각 카테고리별 보여줄 상품 수
    const limit = 4;

    // 이동 경로 처리
    useEffect(() => {
        dispatch(
            setbreadCrumbsReducer({
                prev: '',
                current: '',
            })
        );
    }, []);

    return (
        <div className="mainpage-area">
            <MainPageCarousel />
            {/* 미리 보기 */}
            <HistoryView />
            <FashionPage limit={limit} />
            <AccessoriesPage limit={limit} />
            <DigitalPage limit={limit} />
        </div>
    );
};

export default MainPage;
