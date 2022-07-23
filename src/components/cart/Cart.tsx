import React, { useState } from 'react';
import products from '@/product.json';
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
}

interface Icategory {
    category: string;
    limit?: number;
}

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const productSelector = useSelector((state: Icart) => state.cart);
    let distinctionList: Iproduct[] = [];
    let totalPrice = 0;
    let count = 0;

    for (const product of products) {
        for (const cartProduct of productSelector) {
            if (product.id === cartProduct.id) {
                distinctionList.push(product);
            }
        }
    }

    return (
        <div>
            <div className="mt-8">
                {distinctionList.map((item: Iproduct) => {
                    for (const cartProduct of productSelector) {
                        if (item.id === cartProduct.id) {
                            totalPrice = item.price * cartProduct.count;
                            count = cartProduct.count;
                        }
                    }
                    return (
                        <div>
                            <Link
                                to={`/product/${item.id}`}
                                state={{ product: item }}
                                key={item.id}
                                className="flex flex-col pb-8"
                            >
                                <div className="product-image-area">
                                    <div className="flex">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="flex p-4 w-40 m-auto"
                                        ></img>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="">{item.title}</div>
                                </div>
                            </Link>
                            <div className="mt-4 mb-4">$ {totalPrice}</div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="product-button bg-indigo-600"
                                    onClick={() => {
                                        dispatch(
                                            addProductCount({
                                                id: item.id,
                                                count: 1,
                                            })
                                        );
                                    }}
                                >
                                    장바구니에 담기
                                </button>
                                {count}
                                <button
                                    type="button"
                                    className="product-button bg-indigo-600"
                                    onClick={() => {
                                        dispatch(
                                            subProductCount({
                                                id: item.id,
                                                count: 1,
                                            })
                                        );
                                    }}
                                >
                                    장바구니에 담기
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;
