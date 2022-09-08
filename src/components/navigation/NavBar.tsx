import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

import useOnOff from '@/hook/useOnOff';
import useDarkMode from '@/hook/useDarkMode';
import { Icart, IcartArr } from '@/interface/interface';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutReducer } from '@/store/loginSlice';
import Search from './Search';
import SideBar from './SideBar';

import SideBarData from '@/components/navigation/SideBarData';

import { getAuth } from 'firebase/auth';

interface Iuser {
    loginInformation: {
        email: string;
    };
}

interface IsideBarData {
    title: string;
    id: string;
    path: string;
    cName: string;
}

const NavBar: React.FC = () => {
    const [searchOnOff, searchOnOffHandler] = useOnOff();
    const [changeTheme, setTheme] = useDarkMode();
    const [totalProductsPrice, setTotalProductPrice] = useState<number>(0);

    const dispatch = useDispatch();

    const thisProductsInCart = useSelector((state: IcartArr) => state.cart);

    const loginInformation = useSelector(
        (state: Iuser) => state.loginInformation.email
    );

    const [userEmail, setUserEmail] = useState<string>('');
    useEffect(() => {
        if (loginInformation !== '') setUserEmail(loginInformation);
    }, [loginInformation]);

    useEffect(() => {
        if (thisProductsInCart.length)
            setTotalProductPrice(
                thisProductsInCart
                    .map((product: Icart) => Number(product.count))
                    .reduce((acc, cur) => {
                        return (acc += cur);
                    })
            );

        if (!thisProductsInCart.length) {
            setTotalProductPrice(0);
        }
    }, [thisProductsInCart]);

    const darkModeHandler = (): void => {
        setTheme(changeTheme);
    };

    const logOutHandler = () => {
        const auth = getAuth();
        dispatch(userLogoutReducer());
        alert('로그아웃 되었습니다.');

        auth.signOut();
    };

    return (
        <nav className="relative w-full h-16 z-20 ">
            <div className="fixed w-full h-16 z-20 shadow-xl ">
                <div className="nav-bar flex relative h-16 p-2   items-center bg-white dark:bg-neutral-900 dark:text-white overflow-x-auto">
                    <div className="flex items-center">
                        <SideBar />

                        <h1 className="mx-1 text-xl font-bold whitespace-nowrap">
                            <Link to="/">React Shop</Link>
                        </h1>
                        <ul className="hidden my-auto font-bold text-lg ml-4 items-center gap-4 md:flex">
                            {SideBarData.map((item: IsideBarData) => (
                                <li key={item.id}>
                                    <Link to={item.path}>
                                        <span className="font-medium text-gray-100 md:font-bold md:text-black md:dark:text-white">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="ml-auto ">
                        <div className="flex mr-2">
                            {userEmail ? (
                                <button
                                    className="items-center"
                                    onClick={logOutHandler}
                                >
                                    로그아웃
                                </button>
                            ) : (
                                <Link
                                    to="/signIn"
                                    className="font-semibold md:inline md:m-auto md:text-lg md:mr-3 hidden"
                                >
                                    로그인
                                </Link>
                            )}

                            <div
                                role="presentation"
                                className="flex transition icon-darkmode rotate-45 icon-box"
                                onClick={darkModeHandler}
                            >
                                {changeTheme === 'dark' ? (
                                    <BsIcons.BsMoon className="flex transition  w-5 h-5 m-auto items-center -rotate-45 duration-400" />
                                ) : (
                                    <BsIcons.BsFillSunFill className="flex transition  w-6 h-6 rotate-0 m-auto duration-400" />
                                )}
                            </div>
                            <div className="flex">
                                <div className="sm:relative sm:w-52 sm:mr-2">
                                    <button
                                        type="button"
                                        className="nav-search icon-box hover:sm:bg-gray-700"
                                        onClick={searchOnOffHandler}
                                    >
                                        <AiIcons.AiOutlineSearch className="w-6 h-6 m-auto sm:hidden" />
                                    </button>

                                    <Search
                                        searchOnOff={searchOnOff}
                                        searchOnOffHandler={searchOnOffHandler}
                                    />
                                </div>
                                <Link to="/cart">
                                    <div className="nav-cart icon-box relative ">
                                        <BsIcons.BsHandbag className="w-6 h-6 m-auto" />
                                        <div className="absolute flex top-0 right-0 w-5 h-5 bg-red-500 text-white rounded-full">
                                            <p className="flex items-center mx-auto">
                                                {totalProductsPrice}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
