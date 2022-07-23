import React, { useEffect, useState } from 'react';
import products from '@/product.json';
import { useSelector } from 'react-redux';
import FilledCart from './FilledCart';
import EmptyCart from './EmptyCart';

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

const Cart: React.FC = () => {
    const [totalProductsPrice, setTotalProductPrice] = useState<number>(0);

    const productSelector = useSelector((state: Icart) => state.cart);
    let distinctionList: Iproduct[] = [];
    let sum = 0;
    let localStorageItems = localStorage.getItem('cart');

    for (const product of products) {
        for (const cartProduct of productSelector) {
            if (product.id === cartProduct.id) {
                distinctionList.push(product);
            }
        }
    }

    useEffect(() => {
        distinctionList.map((item) => {
            sum += Number(item.price) * Number(item.totalCount);
            setTotalProductPrice(sum);
        });
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
                    총 : $
                    {distinctionList.length
                        ? Math.round(totalProductsPrice)
                        : 0}
                </div>
            </div>
        </div>
    );
};

export default Cart;
