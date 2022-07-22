import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RatingStar from '@/components/product/RatingStar';

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

const Product: React.FC = () => {
    const location = useLocation();
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
            <div className="flex product-detail-image w-80 h-80 bg-white mt-4 m-auto rounded-xl">
                <img
                    src={productDetail.product.image}
                    alt={productDetail.product.title}
                    className="flex p-4 w-56 m-auto"
                ></img>
            </div>
            <div className="relative flex flex-col">
                <div className="product-detail-title mt-4">
                    <p className="flex px-10 font-medium text-2xl">
                        {productDetail.product.title}
                        <span className="flex h-5 px-1 ml-4 text-base text-white rounded-xl items-center self-center bg-green-400">
                            new
                        </span>
                    </p>
                </div>
                <div className="product-detail-description flex items-center mt-4">
                    <p className="px-10">{productDetail.product.description}</p>
                </div>
                <div className="rating-star-area flex px-9 pt-3">
                    <RatingStar
                        rating={productDetail.product.rating.rate}
                        count={productDetail.product.rating.count}
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;
