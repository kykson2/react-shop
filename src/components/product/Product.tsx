import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import StarsRating from 'react-star-ratings';

import { setProductReducer } from '@/store/cartSlice';
import { Iproduct, Istate } from '@/interface/interface';
import { setbreadCrumbsReducer } from '@/store/breadCrumbsSlice';

import products from '@/product.json';

const Product: React.FC = () => {
    const location = useLocation();

    const path = location.pathname;
    const pathSplit = path.split('/product/');
    const productNumber = Number(pathSplit[1]);

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

    const [category, setCategory] = useState<string>('');

    // 선택된 상품의 자세한 정보를 가져온다
    // useEffect(() => {
    //     if (location.state) {
    //         let __state = location.state as Istate;
    //         setProductDetail({
    //             product: {
    //                 id: __state.product.id,
    //                 title: __state.product.title,
    //                 price: __state.product.price,
    //                 description: __state.product.description,
    //                 category: __state.product.category,
    //                 image: __state.product.image,
    //                 rating: {
    //                     rate: __state.product.rating?.rate,
    //                     count: __state.product.rating?.count,
    //                 },
    //             },
    //         });
    //     }
    // }, [location.state]);

    useEffect(() => {
        products.map(
            (item: Iproduct) =>
                Number(item.id) === productNumber &&
                setProductDetail({
                    product: {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        description: item.description,
                        category: item.category,
                        image: item.image,
                        rating: {
                            rate: item.rating.rate,
                            count: item.rating.count,
                        },
                    },
                })
        );
    }, [productNumber]);

    useEffect(() => {
        if (productDetail.product.category.includes('clothing')) {
            setCategory('패션');
        }
        if (productDetail.product.category === 'electronics') {
            setCategory('디지털');
        }
        if (productDetail.product.category === 'jewelery') {
            setCategory('악세서리');
        }
        dispatch(
            setbreadCrumbsReducer({
                prev: category,
                current: productDetail.product.title,
            })
        );
    }, [productDetail, category]);

    return (
        <div className="lg:flex">
            <div className="flex product-detail-image w-80 h-80 bg-white mt-4 m-auto rounded-xl mb-6 lg:ml-12 lg:mt-14">
                <img
                    src={productDetail.product.image}
                    alt={productDetail.product.title}
                    className="p-6 max-w-full max-h-full m-auto"
                ></img>
            </div>
            <div className="relative lg:w-9/12 lg:ml-2 lg:mt-12">
                <div className="product-detail-title mt-4">
                    <p className="flex px-10 font-semibold text-xl lg:text-2xl dark:text-gray-400">
                        {productDetail.product.title}
                        <span className="flex h-5 p-2 text-center ml-4 font-bold text-sm text-white rounded-xl items-center self-center bg-green-400">
                            NEW
                        </span>
                    </p>
                </div>
                <div className="product-detail-description flex items-center mt-4 lg:text-base dark:text-gray-400">
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
                        <span className="flex px-4 self-center text-base font-medium text-gray-700 dark:text-gray-400">
                            {productDetail.product.rating.rate} /
                            {productDetail.product.rating.count} 참여
                        </span>
                    </div>
                </div>
                <div className="flex pl-9 pt-3 font-semibold text-3xl dark:text-gray-400">
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
                                    title: productDetail.product.title,
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
                        className="product-button bg-white text-black border-2 border-black dark:text-gray-400 dark:bg-inherit dark:border-gray-400"
                    >
                        장바구니로 이동
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
