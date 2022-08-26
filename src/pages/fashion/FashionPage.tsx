import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/product/ProductsList';
import BreadCrumbs from '@/components/breadCrumb/BreadCrumbs';
import { IproductPageProps } from '@/interface/interface';

const FashionPage: FC<IproductPageProps> = ({ limit, prevAddr }) => {
    const category: string = 'clothing';
    const currentPage = '패션';

    return (
        <div>
            {!limit && (
                <BreadCrumbs
                    prevPage={prevAddr as string}
                    currentPage={currentPage}
                />
            )}

            <div className="category">패션</div>
            <ProductsList category={category} limit={limit} />
        </div>
    );
};

export default FashionPage;
