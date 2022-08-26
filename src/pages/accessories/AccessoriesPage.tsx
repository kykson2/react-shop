import BreadCrumbs from '@/components/breadCrumb/BreadCrumbs';
import ProductsList from '@/components/product/ProductsList';
import { IproductPageProps } from '@/interface/interface';
import { FC } from 'react';

const AccessoriesPage: FC<IproductPageProps> = ({ limit, prevAddr }) => {
    const category: string = 'jewelery';
    const currentPage = '악세서리';

    return (
        <div>
            {!limit && (
                <BreadCrumbs
                    prevPage={prevAddr as string}
                    currentPage={currentPage}
                />
            )}
            <div className="category">악세서리</div>
            <ProductsList category={category} limit={limit} />
        </div>
    );
};

export default AccessoriesPage;
