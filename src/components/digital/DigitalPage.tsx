import ProductsList from '@/components/product/ProductsList';
import React from 'react';

interface Ilimit {
    limit?: number;
}

const DigitalPage: React.FC<Ilimit> = ({ limit }) => {
    const category: string = 'electronics';

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
