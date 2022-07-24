import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

import SideBarData from '@/components/navigation/SideBarData';

import useOnOff from '@/hook/useOnOff';
import useDarkMode from '@/hook/useDarkMode';
import { Icart } from '@/interface/interface';
import { useSelector } from 'react-redux';

const NavBar: React.FC = () => {
    const [sideBarOnOff, sideBarOnOffHandler, sideBarOffHandler] = useOnOff();
    const [searchOnOff, searchOnOffHandler] = useOnOff();
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [totalProductsPrice, setTotalProductPrice] = useState<number>(0);

    const productSelector = useSelector((state: Icart) => state.cart);

    let sum = 0;

    useEffect(() => {
        productSelector.map((cartProduct) => {
            sum += cartProduct.count;
            setTotalProductPrice(sum);
        });
        if (!productSelector.length) {
            setTotalProductPrice(0);
        }
    }, [productSelector]);

    console.log(totalProductsPrice);

    const darkModeHandler = (): void => {
        setTheme(colorTheme);
        colorTheme === 'light' ? setDarkMode(true) : setDarkMode(false);
    };

    return (
        <div className="w-full h-16 z-20">
            <div className="fixed w-full h-16 z-20 shadow-xl">
                <div className="nav-bar flex relative h-16 p-2   items-center bg-white dark:bg-neutral-900 dark:text-white">
                    <button
                        className="flex w-10 h-10 items-center"
                        type="button"
                        onClick={sideBarOnOffHandler}
                    >
                        <AiIcons.AiOutlineMenu className="flex w-5 h-5 m-auto items-center" />
                    </button>

                    <h1 className="nav-goHome w-48 mx-1 text-lg font-bold">
                        <Link to="/">React Shop</Link>
                    </h1>

                    <div className="flex absolute right-0 mr-2">
                        <div
                            role="presentation"
                            className="flex transition icon-darkmode rotate-45 icon-box"
                            onClick={darkModeHandler}
                        >
                            {darkMode ? (
                                <BsIcons.BsMoon className="flex transition  w-5 h-5 m-auto items-center -rotate-45 duration-400" />
                            ) : (
                                <BsIcons.BsFillSunFill className="flex transition  w-6 h-6 rotate-0 m-auto duration-400" />
                            )}
                        </div>
                        <div className="flex">
                            <button
                                type="button"
                                className="nav-search icon-box hover:bg-gray-700"
                                onClick={searchOnOffHandler}
                            >
                                <AiIcons.AiOutlineSearch className="w-6 h-6 m-auto" />
                            </button>
                            <input
                                type="text"
                                className={
                                    searchOnOff
                                        ? 'fixed transition-all w-full h-14 left-0 bg-gray-600 text-gray-200 top-16 duration-200 z-20'
                                        : 'fixed transition-all w-full h-14 left-0 bg-gray-600 text-gray-100 -top-full duration-200 -z-10'
                                }
                                placeholder="검색"
                            />
                        </div>
                        <Link to="/cart">
                            <div className="nav-cart icon-box relative">
                                <BsIcons.BsHandbag className="w-6 h-6 m-auto" />
                            </div>
                            <div className="absolute flex top-0 right-1 w-5 h-5 bg-red-500 text-white rounded-full">
                                <p className="flex items-center mx-auto">
                                    {totalProductsPrice}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <nav
                className={
                    sideBarOnOff
                        ? 'nav-side-menu left-0 bg-blend-screen'
                        : 'nav-side-menu '
                }
            >
                <ul className="nav-side-menu-items">
                    {SideBarData.map((item) => (
                        <li key={item.id} className={`${item.cName} px-4 py-3`}>
                            <Link to={item.path} onClick={sideBarOnOffHandler}>
                                <span className="font-medium text-gray-100">
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <label
                role="presentation"
                aria-label="Freege when sidebar is active"
                className={
                    sideBarOnOff
                        ? 'fixed transition w-full h-screen top-0 bg-gray-700 bg-opacity-75 duration-700 z-20'
                        : 'transition w-full h-screen duration-700'
                }
                onClick={sideBarOffHandler}
            />
        </div>
    );
};

export default NavBar;
