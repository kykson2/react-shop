import useOnOff from '@/hook/useOnOff';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { removeCart, setProductReducer } from '@/store/cartSlice';

const Buy: FC = () => {
    const [sideBarOnOff, sideBarOnOffHandler] = useOnOff();
    const dispatch = useDispatch();

    const buyhandler = () => {};

    const purchaseHandler = (): void => {
        dispatch(removeCart());
        sideBarOnOffHandler();
    };

    return (
        <div className="">
            <button
                type="button"
                className="product-button text-sm ml-4 bg-indigo-600 "
                onClick={sideBarOnOffHandler}
            >
                구매하기
            </button>
            <div className="">
                {sideBarOnOff ? (
                    <div className="cart-buy-modal transition-all duration-200 sm:right-0 visible">
                        <span className="block pt-5">
                            정말로 구매하시겠습니까?
                        </span>
                        <span className="block pt-5">
                            장바구니의 모든 상품들이 삭제됩니다.
                        </span>
                        <div className="absolute flex bottom-6 right-3">
                            <button
                                type="button"
                                className="product-button text-base  bg-indigo-600"
                                onClick={purchaseHandler}
                            >
                                네
                            </button>
                            <button
                                type="button"
                                className="product-button text-black text-base bg-inherit border border-gray-400 dark:text-white"
                                onClick={sideBarOnOffHandler}
                            >
                                아니오
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="cart-buy-modal transition-all duration-200 -bottom-full   md:duration-[0ms] invisible"></div>
                )}
            </div>
            <label
                role="presentation"
                aria-label="Freege when sidebar is active"
                className={
                    sideBarOnOff
                        ? 'fixed transition w-full h-full top-0 left-0 bg-gray-700 bg-opacity-75 duration-700 z-20 visible'
                        : 'transition w-full h-full duration-700 invisible'
                }
            />
        </div>
    );
};

export default Buy;
