import { Iproduct } from '@/interface/interface';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Icategory {
    distinctionList: Iproduct[];
    category: string;
    limit: number;
}

const MainPageProductList: FC<Icategory> = ({
    distinctionList,
    category,
    limit,
}) => {
    return (
        <div>
            <div className="flex overflow-x-auto md:grid grid-cols-2 lg:grid-cols-4">
                {distinctionList.slice(0, limit).map(
                    (item: Iproduct) =>
                        item.category.includes(category) && (
                            <Link
                                to={`/product/${item.id}`}
                                key={item.id}
                                className="flex flex-col border border-1 bg-white rounded-xl flex-1 dark:border-0 dark:border-slate-700 group m-4"
                            >
                                <div className="product-image-area">
                                    <div className="flex m-auto h-80 ">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="transition w-24 m-auto object-cover duration-300 group-hover:scale-125"
                                        ></img>
                                    </div>
                                </div>
                                <div className="product-title-area">
                                    <div className="flex dark:text-gray-400">
                                        {item.title}
                                    </div>
                                    <p className="flex font-normal pt-3   dark:text-gray-400">
                                        $ {Math.round(item.price)}
                                    </p>
                                </div>
                            </Link>
                        )
                )}
            </div>
        </div>
    );
};

export default MainPageProductList;
