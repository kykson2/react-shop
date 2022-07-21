import { FC, useState } from 'react';
import ProductsList from '@/components/product/ProductsList';
import BreadCrumbs from '@/components/breadCrumb/BreadCrumbs';

interface Ilimit {
    limit?: number;
}

const FashionPage: FC<Ilimit> = ({ limit }) => {
    const category: string = 'clothing';

    const [prevPage, setPrevPage] = useState<string>('홈');
    const [currentPage, setCurrentPage] = useState<string>('패션');

    return (
        <div>
            {limit === undefined && (
                <BreadCrumbs prevPage={prevPage} currentPage={currentPage} />
            )}
            <div className="pt-4 text-center text-3xl font-bold dark:text-white">
                패션
            </div>
            <ProductsList category={category} limit={limit} />
        </div>
    );
};

export default FashionPage;
