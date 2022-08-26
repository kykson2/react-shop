import BreadCrumbs from '@/components/breadCrumb/BreadCrumbs';
import ProductsList from '@/components/product/ProductsList';
import { IproductPageProps } from '@/interface/interface';
import React from 'react';

const DigitalPage: React.FC<IproductPageProps> = ({ limit, prevAddr }) => {
    const category: string = 'electronics';
    const currentPage = '디지털';

    return (
        <div>
            {!limit && (
                <BreadCrumbs
                    prevPage={prevAddr as string}
                    currentPage={currentPage}
                />
            )}
            <div className="category">디지털</div>
            <ProductsList category={category} limit={limit} />
        </div>
    );
};

export default DigitalPage;
