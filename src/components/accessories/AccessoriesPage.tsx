import ProductsList from '@/components/product/ProductsList';
import { setbreadCrumbsReducer } from '@/store/breadCrumbsSlice';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface Ilimit {
    limit?: number;
}

const AccessoriesPage: FC<Ilimit> = ({ limit }) => {
    const category: string = 'jewelery';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setbreadCrumbsReducer({
                prev: '홈',
                current: '악세서리',
            })
        );
    }, []);

    return (
        <div>
            <div className="pt-4 text-center text-3xl font-bold dark:text-white">
                악세서리
            </div>
            <ProductsList category={category} limit={limit} />
        </div>
    );
};

export default AccessoriesPage;
