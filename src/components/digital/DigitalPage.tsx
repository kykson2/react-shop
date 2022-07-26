import ProductsList from '@/components/product/ProductsList';
import { setbreadCrumbsReducer } from '@/store/breadCrumbsSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface Ilimit {
    limit?: number;
}

const DigitalPage: React.FC<Ilimit> = ({ limit }) => {
    const category: string = 'electronics';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setbreadCrumbsReducer({
                prev: '홈',
                current: '디지털',
            })
        );
    }, []);

    return (
        <div>
            <div className="pt-4 text-center text-3xl font-bold dark:text-white">
                디지털
            </div>
            <ProductsList category={category} limit={limit} />
        </div>
    );
};

export default DigitalPage;
