import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from '@/components/navigation/NavBar';
import MainPage from '@/components/main/MainPage';
import FashionPage from '@/components/fashion/FashionPage';
import AccessoriesPage from '@/components/accessories/AccessoriesPage';
import DigitalPage from '@/components/digital/DigitalPage';
import Cart from '@/components/cart/Cart';
import ErrorPage from '@/components/error/ErrorPage';
import Product from '@/components/product/Product';
import BreadCrumbs from '@/components/breadCrumb/BreadCrumbs';
import Footer from '@/components/footer/Footer';
import SignIn from '@/components/loginLogout/SignIn';
import SignUp from '@/components/loginLogout/SignUp';

import ScrollTop from '@/components/scrollTop/ScrollTop';

import { getStoregyCartListReducer } from '@/store/cartSlice';
import { IgetStorageCartList } from '@/interface/interface';

import firebase from '@/firebase';

const App = () => {
    console.log(firebase);
    const getItem = localStorage.getItem('cart');
    const dispatch = useDispatch();

    if (getItem) {
        const getCartList = JSON.parse(getItem);
        getCartList.map((item: IgetStorageCartList) => {
            dispatch(getStoregyCartListReducer(item));
        });
    }

    return (
        <div className="w-full h-full dark:bg-slate-800 overflow-x-auto">
            <Router>
                <ScrollTop />
                {/* 네비게이션 바 */}
                <NavBar />
                {/* 이동 경로 */}
                <BreadCrumbs />

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
                        <Route path="product/*" element={<Product />} />
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
