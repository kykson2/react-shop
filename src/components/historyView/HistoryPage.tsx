import { IhistoryProduct } from '@/interface/interface';
import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import HistoryProducsList from '@/components/historyView/HistoryProductsList';

const Preview: FC = () => {
    const hitoryProducts = useSelector(
        (state: IhistoryProduct) => state
    ).historyProduct;

    console.log(hitoryProducts);
    return (
        <div className="w-full h-72 bg-gray-100 dark:bg-gray-600 ">
            <div className="mx-4 pb-4 overflow-x-auto">
                <p className="pt-4 text-lg font-semibold dark:text-gray-200">
                    내가 본 상품
                </p>
                {hitoryProducts.length > 0 ? (
                    <HistoryProducsList hitoryProducts={hitoryProducts} />
                ) : (
                    <div className="grid h-56 place-content-center">
                        <p className="text-center dark:text-gray-200">
                            봤던 상품이 없습니다.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Preview;
