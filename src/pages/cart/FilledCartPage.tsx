import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductCount, subProductCount } from '@/store/cartSlice';
import { Icart, Iproduct } from '@/interface/interface';

interface IFilledCart {
    distinctionList: Iproduct[];
    productSelector: Icart[];
}

const FilledCartPage: FC<IFilledCart> = ({
    distinctionList,
    productSelector,
}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {distinctionList.map((item: Iproduct) => {
                for (const cartProduct of productSelector) {
                    if (item.id === cartProduct.id) {
                        item.totalPrice = item.price * cartProduct.count;
                        item.totalCount = cartProduct.count;
                    }
                }
                return (
                    <div key={item.id} className="lg:flex">
                        <div className="lg:flex">
                            <Link
                                to={`/product/${item.id}`}
                                state={{ product: item }}
                                className="flex flex-col lg:flex-row"
                            >
                                <div className="flex w-56 h-56 bg-white mt-4 m-auto rounded-xl mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="flex p-4 max-w-full max-h-full m-auto"
                                    ></img>
                                </div>
                            </Link>
                            <div className="flex flex-col h-full">
                                <div className="flex lg:pt-10 lg:pl-10 font-semibold text-2xl">
                                    {item.title}
                                </div>
                                <div className="flex w-80 lg:pl-10 mt-3 mb-4 font-base text-4xl">
                                    $ {Math.round(Number(item.totalPrice))}
                                    <p className="flex ml-4 items-end text-base">
                                        / 개당 ${Math.round(item.price)}
                                    </p>
                                </div>
                                <div className="flex w-80 lg:pl-10">
                                    <button
                                        type="button"
                                        className="cart-button rounded-l-lg"
                                        onClick={() => {
                                            dispatch(
                                                subProductCount({
                                                    id: item.id,
                                                    title: item.title,
                                                    count: 1,
                                                })
                                            );
                                        }}
                                    >
                                        -
                                    </button>
                                    <div className="flex w-12 h-12 items-center place-content-center text-lg">
                                        {item.totalCount}
                                    </div>
                                    <button
                                        type="button"
                                        className="cart-button rounded-r-lg "
                                        onClick={() => {
                                            dispatch(
                                                addProductCount({
                                                    id: item.id,
                                                    title: item.title,
                                                    count: 1,
                                                })
                                            );
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FilledCartPage;
