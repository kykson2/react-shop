import { setProductReducer } from '@/store/cartSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import StarsRating from 'react-star-ratings';

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

interface Istate {
    product: Iproduct;
}

interface cartDispatch {
    id: number;
    count: number;
}

const Product: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [productDetail, setProductDetail] = useState<Istate>({
        product: {
            id: 0,
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
            rating: {
                rate: 0,
                count: 0,
            },
        },
    });
    useEffect(() => {
        if (location.state) {
            let __state = location.state as Istate;
            setProductDetail({
                product: {
                    id: __state.product.id,
                    title: __state.product.title,
                    price: __state.product.price,
                    description: __state.product.description,
                    category: __state.product.category,
                    image: __state.product.image,
                    rating: {
                        rate: __state.product.rating?.rate,
                        count: __state.product.rating?.count,
                    },
                },
            });
        }
    }, [location.state]);

    return (
        <div className="">
            <div className="flex product-detail-image w-80 h-80 bg-white mt-4 m-auto rounded-xl mb-6">
                <img
                    src={productDetail.product.image}
                    alt={productDetail.product.title}
                    className="flex p-4 w-56 m-auto"
                ></img>
            </div>
            <div className="relative flex flex-col">
                <div className="product-detail-title mt-4">
                    <p className="flex px-10 font-semibold text-xl">
                        {productDetail.product.title}
                        <span className="flex h-5 p-2 text-center ml-4 font-bold text-sm text-white rounded-xl items-center self-center bg-green-400">
                            NEW
                        </span>
                    </p>
                </div>
                <div className="product-detail-description flex items-center mt-4">
                    <p className="px-10">{productDetail.product.description}</p>
                </div>
                <div className="rating-star-area px-9 pt-3">
                    <div className="flex">
                        <StarsRating
                            rating={productDetail.product.rating.rate}
                            starRatedColor="orange"
                            starDimension="25px"
                            starSpacing="2px"
                        />
                        <span className="px-4 self-center text-base font-medium text-gray-700">
                            {productDetail.product.rating.rate} /
                            {productDetail.product.rating.count} 참여
                        </span>
                    </div>
                </div>
                <div className="flex pl-9 pt-3 font-semibold text-3xl">
                    ${Math.round(productDetail.product.price)}
                </div>
                <div className="flex ml-9 mt-3 mb-10">
                    <button
                        type="button"
                        className="product-button bg-indigo-600"
                        onClick={() => {
                            dispatch(
                                setProductReducer({
                                    id: productDetail.product.id,
                                    count: 1,
                                })
                            );
                        }}
                    >
                        장바구니에 담기
                    </button>
                    <Link
                        to={'/cart'}
                        type="button"
                        className="product-button bg-white text-black border-2 border-black"
                    >
                        장바구니로 이동
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
