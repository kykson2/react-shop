import { IhistoryProduct } from '@/interface/interface';
import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Preview: FC = () => {
    const dispatch = useDispatch();

    const hitoryProducts = useSelector(
        (state: IhistoryProduct) => state
    ).historyProduct;

    console.log(hitoryProducts);
    return (
        <div className="w-full h-72 bg-gray-100 dark:bg-gray-600 ">
            <div className="mx-4 pb-4 overflow-x-auto">
                <p className="pt-4 text-lg font-semibold dark:text-gray-200">
                    내가 봤던 상품
                </p>
                {hitoryProducts.length > 0 ? (
                    <div className="flex h-56 gap-10 items-center">
                        {hitoryProducts.map((product) => {
                            return (
                                <Link
                                    to={`/product/${product.id}`}
                                    className="flex flex-col w-32 h-56 pt-5 "
                                >
                                    <div className="flex h-52 bg-white  rounded-lg items-center place-content-center">
                                        <img
                                            className="h-40"
                                            src={product.image}
                                            alt={product.title}
                                        ></img>
                                    </div>
                                    <p className="w-32 pt-2 truncate dark:text-gray-200">
                                        {product.title}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
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
