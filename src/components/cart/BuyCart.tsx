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
                    <div className="cart-buy-modal transition-all duration-200">
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
                                className="product-button text-base bg-indigo-600 "
                                onClick={sideBarOnOffHandler}
                            >
                                아니오
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="cart-buy-modal transition-all duration-200 -bottom-full md:top-0 md:bottom-full md:duration-[0ms]"></div>
                )}
            </div>
            <label
                role="presentation"
                aria-label="Freege when sidebar is active"
                className={
                    sideBarOnOff
                        ? 'fixed transition w-full h-screen top-0 bg-gray-700 bg-opacity-75 duration-700 z-20'
                        : 'transition w-full h-screen duration-700'
                }
            />
        </div>
    );
};

export default Buy;
