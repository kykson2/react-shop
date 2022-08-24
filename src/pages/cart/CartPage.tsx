import React, { useEffect, useState } from 'react';
import products from '@/product.json';
import { useDispatch, useSelector } from 'react-redux';
import FilledCart from '@/pages/cart/FilledCartPage';
import EmptyCart from '@/pages/cart/EmptyCartPage';

import { Iproduct, IcartArr } from '@/interface/interface';
import BuyCart from '@/components/cart/BuyCart';
import { setbreadCrumbsReducer } from '@/store/breadCrumbsSlice';

const CartPage: React.FC = () => {
    const [totalProductsPrice, setTotalProductPrice] = useState<number>(0);
    const dispatch = useDispatch();

    const productSelector = useSelector((state: IcartArr) => state.cart);
    let distinctionList: Iproduct[] = [];

    // 리덕스에 저장된 데이터와 json 파일의 데이터중 일치하는 데이터를 배열에 저장
    for (const product of products) {
        for (const cartProduct of productSelector) {
            if (product.id === cartProduct.id) {
                distinctionList.push(product);
            }
        }
    }

    useEffect(() => {
        if (distinctionList.length > 0) {
            setTotalProductPrice(
                distinctionList
                    .map((item: Iproduct) => Number(item.totalPrice))
                    .reduce((acc, cur) => {
                        return (acc += cur);
                    })
            );
        }
        if (!distinctionList.length) {
            setTotalProductPrice(0);
        }
    }, [productSelector]);

    // 이동 경로 처리
    useEffect(() => {
        dispatch(
            setbreadCrumbsReducer({
                prev: '홈',
                current: '장바구니',
            })
        );
    }, []);

    return (
        <div className="relative w-full h-full min-h-[40rem] dark:text-gray-400">
            <div className="mt-8 pl-5 w-full h-full">
                {distinctionList.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <FilledCart
                        distinctionList={distinctionList}
                        productSelector={productSelector}
                    />
                )}
            </div>
            <div className="flex mt-8 ml-5 w-80 items-center lg:absolute lg:right-0 lg:w-64">
                <span className="flex text-2xl">
                    총 : ${Math.round(totalProductsPrice)}
                </span>
                <BuyCart />
            </div>
        </div>
    );
};

export default CartPage;
