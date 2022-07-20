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
    let distinctionList: Iproduct[] = [];
    products.map(
        (item: Iproduct) =>
            item.category.includes(category) && distinctionList.push(item)
    );

    return (
        <div className="sm:flex md:grid lg:grid ">
            {limit ? (
                <div className="flex overflow-x-auto md:grid grid-cols-2 xl:grid-cols-4">
                    {distinctionList.slice(0, limit).map(
                        (item: Iproduct) =>
                            item.category.includes(category) && (
                                <div
                                    key={item.id}
                                    className="flex lg:flex flex-col border-2 bg-white rounded-xl flex-1 dark:border-slate-700 group m-4"
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
                                        <p className="flex font-light pt-3   dark:text-gray-400">
                                            $ {item.price}
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            ) : (
                <div className="sm:flex flex-wrap md:grid grid-cols-2 lg:grid-cols-4">
                    {distinctionList.map(
                        (item: Iproduct) =>
                            item.category.includes(category) && (
                                <div
                                    key={item.id}
                                    className="flex flex-col border-2 bg-white rounded-xl flex-1 dark:border-slate-700 group m-4"
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
                                        <p className="flex font-light pt-3   dark:text-gray-400">
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
