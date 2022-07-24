import React, { useEffect, useState } from 'react';
import products from '@/product.json';
import { useSelector } from 'react-redux';
import FilledCart from './FilledCart';
import EmptyCart from './EmptyCart';

import { Iproduct, Icart } from '@/interface/interface';

const Cart: React.FC = () => {
    const [totalProductsPrice, setTotalProductPrice] = useState<number>(0);

    const productSelector = useSelector((state: Icart) => state.cart);
    let distinctionList: Iproduct[] = [];
    let sum = 0;

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
                <div className="w-80 m-auto text-xl mt-4 mb-4">
                    총 : ${Math.round(totalProductsPrice)}
                </div>
            </div>
        </div>
    );
};

export default Cart;
