import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '@/components/navigation/NavBar';
import MainPage from '@/pages/main/MainPage';
import FashionPage from '@/pages/fashion/FashionPage';
import AccessoriesPage from '@/pages/accessories/AccessoriesPage';
import DigitalPage from '@/pages/digital/DigitalPage';
import Cart from '@/pages/cart/CartPage';
import ErrorPage from '@/pages/error/ErrorPage';
import Product from '@/pages/product/ProductPage';
import BreadCrumbs from '@/components/breadCrumb/BreadCrumbs';
import Footer from '@/components/footer/Footer';
import SignIn from '@/pages/loginLogout/SignIn';
import SignUp from '@/pages/loginLogout/SignUp';

import ScrollTop from '@/components/scrollTop/ScrollTop';

import { getStoregyCartListReducer } from '@/store/cartSlice';
import { IgetStorageCartList } from '@/interface/interface';

import firebase from '@/firebase';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        firebase;
        const getItem = localStorage.getItem('cart');

        if (getItem) {
            const getCartList = JSON.parse(getItem);
            getCartList.map((item: IgetStorageCartList) => {
                dispatch(getStoregyCartListReducer(item));
            });
        }
    }, []);

    return (
        <div className="w-full h-full dark:bg-slate-800 overflow-x-auto">
            <Router>
                <ScrollTop />
                {/* 네비게이션 바 */}
                <NavBar />

                <div className="relative w-full h-full pb-32">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="fashion" element={<FashionPage />} />
                        <Route
                            path="signIn"
                            element={<SignIn></SignIn>}
                        ></Route>
                        <Route
                            path="accessories"
                            element={<AccessoriesPage />}
                        />
                        <Route path="digital" element={<DigitalPage />} />
                        <Route path="cart" element={<Cart />} />
                        <Route
                            path="product/:productId"
                            element={<Product />}
                        />
                        <Route path="signUp" element={<SignUp />} />
                        <Route path="/*" element={<ErrorPage />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
