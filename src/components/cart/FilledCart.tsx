import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductCount, subProductCount } from '@/store/cartSlice';

interface IcartState {
    id: number;
    count: number;
}

interface Icart {
    cart: IcartState[];
}

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
    totalCount?: number;
    totalPrice?: number;
}

interface IFilledCart {
    distinctionList: Iproduct[];
    productSelector: IcartState[];
}

const FilledCart: FC<IFilledCart> = ({ distinctionList, productSelector }) => {
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
                    <div key={item.id}>
                        <Link
                            to={`/product/${item.id}`}
                            state={{ product: item }}
                            className="flex flex-col"
                        >
                            <div className="flex w-80 h-80 bg-white mt-4 m-auto rounded-xl mb-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="flex p-4 w-52 m-auto"
                                ></img>
                            </div>
                            <div className="flex">
                                <div className="flex w-80 mx-auto font-semibold text-2xl">
                                    {item.title}
                                </div>
                            </div>
                        </Link>
                        <div className="flex w-80 m-auto mt-3 mb-4 font-base text-4xl">
                            $ {Math.round(Number(item.totalPrice))}
                            <p className="flex ml-4 items-end text-base">
                                / 개당 ${Math.round(item.price)}
                            </p>
                        </div>
                        <div className="flex w-80 m-auto">
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
                );
            })}
        </div>
    );
};

export default FilledCart;
