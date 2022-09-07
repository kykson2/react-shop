import useOnOff from '@/hook/useOnOff';
import { FC, useEffect, useState } from 'react';
import SideBarData from '@/components/navigation/SideBarData';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as AiIcons from 'react-icons/ai';

import { getAuth } from 'firebase/auth';
import { userLogoutReducer } from '@/store/loginSlice';

interface Iuser {
    loginInformation: {
        email: string;
    };
}

const SideBar: FC = () => {
    const [sideBarOnOff, sideBarOnOffHandler, sideBarOffHandler] = useOnOff();

    const dispatch = useDispatch();

    const { loginInformation } = useSelector((state: Iuser) => state);

    const [userEmail, setUserEmail] = useState<string>('');
    useEffect(() => {
        setUserEmail(loginInformation.email);
    }, [loginInformation.email]);
    console.log(userEmail);

    const logOutHandler = () => {
        const auth = getAuth();
        dispatch(userLogoutReducer());
        alert('로그아웃 되었습니다.');

        auth.signOut();
    };
    return (
        <div>
            <button
                className="flex w-10 h-10 items-center md:hidden"
                type="button"
                onClick={sideBarOnOffHandler}
            >
                <AiIcons.AiOutlineMenu className="flex w-5 h-5 m-auto items-center" />
            </button>
            {sideBarOnOff && (
                <div className={'nav-side-menu left-0 bg-blend-screen visible'}>
                    <ul className="">
                        {SideBarData.map((item) => (
                            <li
                                key={item.id}
                                className={`${item.cName} px-4 py-6`}
                            >
                                <Link
                                    to={item.path}
                                    onClick={sideBarOffHandler}
                                >
                                    <span className="font-semibold text-gray-100 text-xl text-white">
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                        <div className="absolute bottom-10 right-10 text-xl">
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
                                    className="font-semibold"
                                    onClick={sideBarOffHandler}
                                >
                                    로그인
                                </Link>
                            )}
                        </div>
                    </ul>
                </div>
            )}
            <label
                role="presentation"
                aria-label="Freege when sidebar is active"
                className={`${
                    sideBarOnOff
                        ? 'fixed transition w-full h-screen top-0 bg-gray-700 bg-opacity-75 duration-700 z-20'
                        : 'transition w-full h-screen duration-700'
                } 
                        `}
                onClick={sideBarOffHandler}
            />
        </div>
    );
};

export default SideBar;
