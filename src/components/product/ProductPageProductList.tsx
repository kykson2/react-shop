import { Iproduct } from '@/interface/interface';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Icategory {
    distinctionList: Iproduct[];
    category: string;
}

const ProductPageProductList: FC<Icategory> = ({
    distinctionList,
    category,
}) => {
    return (
        <div>
            <div className="sm:flex flex-wrap overflow-x-auto md:grid grid-cols-2 lg:grid-cols-4">
                {distinctionList.map(
                    (item: Iproduct) =>
                        item.category.includes(category) && (
                            <Link
                                to={`/product/${item.id}`}
                                key={item.id}
                                className="flex flex-col border bg-white rounded-xl flex-1 dark:border-0 dark:border-slate-700 group m-4"
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
                                <div className="product-title-area border-slate-700">
                                    <div className="flex dark:text-gray-400 border-slate-700 ">
                                        {item.title}
                                    </div>
                                    <p className="flex font-light pt-3   dark:text-gray-400">
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

export default ProductPageProductList;
