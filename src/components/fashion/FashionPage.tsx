import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/product/ProductsList';
import BreadCrumbs from '@/components/breadCrumb/BreadCrumbs';
import { useDispatch } from 'react-redux';
import { setbreadCrumbsReducer } from '@/store/breadCrumbsSlice';

interface Ilimit {
    limit?: number;
}

const FashionPage: FC<Ilimit> = ({ limit }) => {
    const category: string = 'clothing';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setbreadCrumbsReducer({
                prev: '홈',
                current: '패션',
            })
        );
    }, []);

    return (
        <div>
            <div className="pt-4 text-center text-3xl font-bold dark:text-white">
                패션
            </div>
            <ProductsList category={category} limit={limit} />
        </div>
    );
};

export default FashionPage;
