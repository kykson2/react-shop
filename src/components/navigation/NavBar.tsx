import React, { useRef } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

import { SideBarData } from "./SideBarData";

import useOnOff from "../../hook/useOnOff";

const NavBar: React.FC = () => {
  const sideBarRef = useRef<HTMLElement>(null);
  const [sideBarOnOff, sideBarOnOffHandler, sideBarOffHandler] = useOnOff();
  const [searchOnOff, searchOnOffHandler] = useOnOff();

  return (
    <nav>
      <div className="nav-bar flex w-full h-16 p-2  bg-neutral-800 text-white items-center">
        <div className="flex">
          <Link
            to="#"
            className="nav-side-bar-toggle flex w-10 h-10 "
            onClick={sideBarOnOffHandler}
          >
            <AiIcons.AiOutlineMenu className="w-6 h-6 m-auto "></AiIcons.AiOutlineMenu>
          </Link>
        </div>
        <h1 className="nav-goHome w-48 mx-1 text-xl font-bold">
          <Link to="/">React Shop</Link>
        </h1>

        <div className="flex px-2 ">
          <div className="flex icon-box">
            <BsIcons.BsFillSunFill className="w-6 h-6 m-auto"></BsIcons.BsFillSunFill>
          </div>
          <div>
            <button
              type="button"
              className="nav-search icon-box hover:bg-gray-700"
              onClick={searchOnOffHandler}
            >
              <AiIcons.AiOutlineSearch className="w-6 h-6 m-auto"></AiIcons.AiOutlineSearch>
            </button>
            <input
              type="text"
              className={
                searchOnOff
                  ? "fixed transition-all w-full h-14 left-0 bg-gray-600 text-gray-200 top-16 duration-200 z-10"
                  : "fixed transition-all w-full h-14 left-0 bg-gray-600 text-gray-100 top-0 duration-200 -z-10"
              }
              placeholder="검색"
            ></input>
          </div>
          <Link to="/cart">
            <div className="nav-cart flex icon-box">
              <BsIcons.BsHandbag className="w-6 h-6 m-auto"></BsIcons.BsHandbag>
            </div>
          </Link>
        </div>
      </div>
      <nav
        className={sideBarOnOff ? "nav-side-menu left-0" : "nav-side-menu "}
        ref={sideBarRef}
      >
        <ul className="nav-side-menu-items" onClick={sideBarOnOffHandler}>
          {SideBarData.map((item) => {
            return (
              <li key={item.id} className={`${item.cName} px-4 py-3`}>
                <Link to={item.path}>
                  <span className="font-medium text-gray-100">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={
          sideBarOnOff
            ? "fixed transition w-full h-screen top-0 bg-gray-700 bg-opacity-75 duration-700 z-20"
            : "fixed transition w-full h-screen top-0 duration-700 -z-10"
        }
        onClick={sideBarOffHandler}
      ></div>
    </nav>
  );
};

export default NavBar;
