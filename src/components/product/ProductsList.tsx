import React from 'react';
import products from '@/product.json';

interface Iproduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface Icategory {
    category: string;
    limit?: number;
}

const ProductsList: React.FC<Icategory> = ({ category, limit }) => {
    console.log(limit);
    return (
        <div className="">
            {limit ? (
                <div className="flex pt-6 pb-6 overflow-x-auto">
                    {products.slice(0, limit).map(
                        (item: Iproduct) =>
                            item.category.includes(category) && (
                                <div
                                    key={item.id}
                                    className="w-56 mx-4 rounded-lg border-2 bg-white dark:border-0"
                                >
                                    <div className="flex w-56  h-80  ">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="transition w-28 m-auto duration-100 hover:scale-125"
                                        ></img>
                                    </div>
                                    <div className="product-title-area">
                                        <p className="dark:text-gray-400">
                                            {item.title}
                                        </p>
                                        <p className="font-light mt-1 dark:text-gray-400">
                                            $ {item.price}
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            ) : (
                <div className="grid pt-6 pb-6 justify-items-center">
                    {products.map(
                        (item: Iproduct) =>
                            item.category.includes(category) && (
                                <div
                                    key={item.id}
                                    className="w-80 mx-4 mb-6 bg-white  rounded-lg  border-2 dark:border-0 "
                                >
                                    <div className="flex w-80 h-80 ">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="flex transition w-28 mx-auto self-center duration-100 hover:scale-125"
                                        ></img>
                                    </div>
                                    <div className="product-title-area">
                                        <p className="dark:text-gray-400">
                                            {item.title}
                                        </p>
                                        <p className="font-light mt-1 dark:text-gray-400">
                                            $ {item.price}
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductsList;
