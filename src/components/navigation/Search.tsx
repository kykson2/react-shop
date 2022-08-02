import React, { FC, useEffect, useRef, useState } from 'react';
import products from '@/product.json';
import { Iproduct } from '@/interface/interface';
import { Link } from 'react-router-dom';

interface ISearch {
    searchOnOff: boolean;
    searchOnOffHandler: () => void;
}

const Search: FC<ISearch> = ({ searchOnOff, searchOnOffHandler }) => {
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<Iproduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>();

    const el = useRef<HTMLDivElement>(null);

    // 검색 영역 클릭 시 결과 값 영역 열기
    const searchClickHandler = () => {
        setIsOpen(true);
    };

    // 검색 값
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    // 결과값 클릭 시 이동
    const handlerSubmit = () => {
        history.pushState(data, '이동', `/product/${data[0].id}`);
        setIsOpen(false);
    };

    // 검색 값에 따른 결과 값
    useEffect(() => {
        let searchList: Iproduct[] = [];
        value !== ''
            ? ((searchList = products.filter((item) =>
                  item.title.toLowerCase().includes(value.toLowerCase())
              )),
              setData(searchList))
            : setData([]);
    }, [value]);

    // 결과 값 영역 외 클릭 시 결과값 창 끄기
    const onOffHandler = (e: Event) => {
        if (
            isOpen &&
            e.target &&
            (!el.current || !el.current.contains(e.target as HTMLButtonElement))
        ) {
            setIsOpen(false);
        }
    };

    // 결과 값 누르면 검색 창 결과값 창 끄기
    const searchOffHandler = () => {
        setIsOpen(false);
        searchOnOffHandler();
    };

    // 영역외 클릭 감지
    useEffect(() => {
        window.addEventListener('click', onOffHandler);
        return () => {
            window.removeEventListener('click', onOffHandler);
        };
    }, [isOpen]);

    return (
        <div ref={el}>
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    className={`${
                        searchOnOff
                            ? 'fixed transition-all w-full h-12 left-0 bg-gray-400 text-gray-600 top-16 p-2 duration-200 z-20 dark:bg-gray-600'
                            : 'fixed transition-all w-full h-14 left-0 bg-gray-400 text-gray-600 dark:bg-gray-600 -top-full duration-200 -z-10'
                    }
                            sm:absolute sm:w-52 sm:h-10 sm:top-0 sm:dark:bg-gray-600 sm:left-0 sm:z-30 sm:rounded-sm p-2 text-gray-800  bg-gray-200 dark:text-gray-400`}
                    placeholder="검색"
                    onClick={searchClickHandler}
                    onChange={searchHandler}
                />
                {isOpen && value !== '' && (
                    <ul className="fixed top-28 left-0 bg-white w-full h-80 p-2 overflow-y-auto z-40  sm:top-[60px] sm:w-64 sm:h-96 sm:right-9 sm:left-auto sm:shadow-md sm:rounded dark:bg-gray-600 dark:text-gray-200">
                        {data.map((item) => (
                            <Link
                                to={`/product/${item.id}`}
                                state={{ product: item }}
                                key={item.id}
                                className=""
                                onClick={searchOffHandler}
                            >
                                <li className="w-full ">
                                    <p className="w-80 m-auto pt-5 text-ellipsis overflow-hidden sm:w-56 text-ellipsis">
                                        {item.title}
                                    </p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
};

export default Search;
