import React, { useEffect, useState } from 'react';
import products from '@/product.json';
import { useDispatch, useSelector } from 'react-redux';
import FilledCart from '@/components/cart/FilledCart';
import EmptyCart from '@/components/cart/EmptyCart';

import { Iproduct, Icart } from '@/interface/interface';
import BuyCart from '@/components/cart/BuyCart';
import { setbreadCrumbsReducer } from '@/store/breadCrumbsSlice';

const Cart: React.FC = () => {
    const [totalProductsPrice, setTotalProductPrice] = useState<number>(0);
    const dispatch = useDispatch();

    const productSelector = useSelector((state: Icart) => state.cart);
    let distinctionList: Iproduct[] = [];
    let sum = 0;

    // 리덕스에 저장된 데이터와 json 파일의 데이터중 일치하는 데이터를 배열에 저장
    for (const product of products) {
        for (const cartProduct of productSelector) {
            if (product.id === cartProduct.id) {
                distinctionList.push(product);
            }
        }
    }

    // 총 금액 계산
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
