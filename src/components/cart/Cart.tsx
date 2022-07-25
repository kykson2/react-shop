import React, { useEffect, useState } from 'react';
import products from '@/product.json';
import { useSelector } from 'react-redux';
import FilledCart from './FilledCart';
import EmptyCart from './EmptyCart';

import { Iproduct, Icart } from '@/interface/interface';
import BuyCart from './BuyCart';

const Cart: React.FC = () => {
    const [totalProductsPrice, setTotalProductPrice] = useState<number>(0);

    const productSelector = useSelector((state: Icart) => state.cart);
    let distinctionList: Iproduct[] = [];
    let sum = 0;

    useEffect(() => {});
    for (const product of products) {
        for (const cartProduct of productSelector) {
            if (product.id === cartProduct.id) {
                distinctionList.push(product);
            }
        }
    }

    useEffect(() => {
        distinctionList.map((item: Iproduct) => {
            if (item) {
                sum += Number(item.price) * Number(item.totalCount);
                setTotalProductPrice(sum);
            }
        });
        if (!distinctionList.length) {
            setTotalProductPrice(0);
        }
    }, [productSelector, distinctionList]);

    return (
        <div>
            <div className="mt-8 ml-5">
                {distinctionList.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <FilledCart
                        distinctionList={distinctionList}
                        productSelector={productSelector}
                    />
                )}
            </div>
            <div className="mt-8 ml-5 w-80 items-center ">
                <span className="text-xl mb-4 items-center">
                    총 : ${Math.round(totalProductsPrice)}
                </span>
            </div>
            <BuyCart />
        </div>
    );
};

export default Cart;
