import ProductsList from '@/components/product/ProductsList';
import { FC } from 'react';

interface Ilimit {
    limit?: number;
}

const AccessoriesPage: FC<Ilimit> = ({ limit }) => {
    const category: string = 'jewelery';

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
