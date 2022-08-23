import React from 'react';
import { Link } from 'react-router-dom';
import products from '@/product.json';
import { Iproduct } from '@/interface/interface';
import MainPageProductList from '@/components/product/MainPageProductList';
import ProductPageProductList from '@/components/product/ProductPageProductList';

// interface Iproduct {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
// }

interface Icategory {
    category: string;
    limit?: number;
}

const ProductsList: React.FC<Icategory> = ({ category, limit }) => {
    let distinctionList: Iproduct[] = [];
    products.map(
        (item: Iproduct) =>
            item.category.includes(category) && distinctionList.push(item)
    );

    return (
        <div className="sm:flex md:grid lg:grid">
            {limit ? (
                <MainPageProductList
                    distinctionList={distinctionList}
                    limit={limit}
                    category={category}
                ></MainPageProductList>
            ) : (
                <ProductPageProductList
                    distinctionList={distinctionList}
                    category={category}
                />
            )}
        </div>
    );
};

export default ProductsList;
