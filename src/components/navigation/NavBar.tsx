import React, { useState, useRef, useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

import { SideBarData } from "./SideBarData";

const NavBar: React.FC = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);
  const sideBarRef = useRef<HTMLElement>(null);
  const showSideBar = (): void => {
    setSideBar(!sideBar);
  };

  const closeSideBarhandler = () => {
    if (sideBar) {
      setSideBar(!sideBar);
    }
  };

  return (
    <>
      <div className="navbar w-full flex h-14 p-2  bg-neutral-800 text-white">
        <div className="flex self-center">
          <Link to="#" className="menu-bars" onClick={showSideBar}>
            <AiIcons.AiOutlineMenu className="w-6 h-6"></AiIcons.AiOutlineMenu>
          </Link>
          <div>React Shop</div>
        </div>
      </div>
      <nav
        className={sideBar ? "nav-menu left-0" : "nav-menu "}
        ref={sideBarRef}
      >
        <ul className="nav-menu-items" onClick={showSideBar}>
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
          sideBar
            ? "absolute transition w-full h-screen top-0 bg-gray-500 bg-opacity-75 duration-700"
            : "absolute transition w-full h-screen duration-700 "
        }
        onClick={closeSideBarhandler}
      ></div>
    </>
  );
};

export default NavBar;
