import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const EmptyCart: FC = () => {
    return (
        <div className="flex flex-col">
            <h1 className="w-80 text-2xl">장바구니에 물품이 없습니다.</h1>

            <Link
                to={'/'}
                type="button"
                className="product-button w-28 h-12 text-base mt-10 bg-indigo-600"
            >
                담으러 가기
            </Link>
        </div>
    );
};

export default EmptyCart;
