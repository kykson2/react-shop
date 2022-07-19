import { FC } from 'react';
import ProductsList from '@/components/product/ProductsList';

interface Ilimit {
    limit?: number;
}

const FashionPage: FC<Ilimit> = ({ limit }) => {
    const category: string = 'clothing';

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
