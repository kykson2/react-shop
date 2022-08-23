import React, { FC } from 'react';
import { IhistoryProductState } from '@/interface/interface';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeProduct } from '@/store/historyProductSlice';

import * as AiIcons from 'react-icons/ai';

interface Ihistory {
    hitoryProducts: IhistoryProductState[];
}

const HistoryProductsList: FC<Ihistory> = ({ hitoryProducts }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="flex h-56 gap-10 items-center">
                {hitoryProducts.map((product: IhistoryProductState) => {
                    return (
                        <div className="relative">
                            <Link
                                to={`/product/${product.id}`}
                                className="relative flex flex-col w-32 h-56 pt-5 z-10"
                                id={product.title}
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
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch(
                                        removeProduct({
                                            id: product.id,
                                            title: product.title,
                                            image: product.image,
                                        })
                                    );
                                }}
                                className="absolute top-5 right-0 w-7 h-7 m-auto z-10"
                            >
                                <AiIcons.AiFillCloseCircle className="bg-white rounded-3xl w-7 h-7 text-red-700" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HistoryProductsList;
