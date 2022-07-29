import React, { FC, useEffect, useState } from 'react';
import products from '@/product.json';
import { Iproduct } from '@/interface/interface';

interface ISearch {
    searchOnOff: boolean;
}

const Search: FC<ISearch> = ({ searchOnOff }) => {
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<Iproduct[]>([]);
    const [list, setList] = useState<Iproduct[]>([]);

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        let searchList: Iproduct[] = [];
        value !== ''
            ? ((searchList = products.filter((item) =>
                  item.title.toLowerCase().includes(value.toLowerCase())
              )),
              setData(searchList))
            : setData([]);
    }, [value]);

    return (
        <>
            <input
                type="text"
                className={
                    searchOnOff
                        ? 'fixed transition-all w-full h-12 left-0 bg-gray-600 text-gray-200 top-16 p-2 duration-200 z-20'
                        : 'fixed transition-all w-full h-14 left-0 bg-gray-600 text-gray-100 -top-full duration-200 -z-10'
                }
                placeholder="검색"
                onChange={searchHandler}
            />
            {searchOnOff && value !== '' && (
                <ul className="fixed  top-28  left-0 bg-white w-full h-56 p-2 overflow-y-auto  z-40 ">
                    {data.map((item) => (
                        <li className="w-full">
                            <p className="w-80 md:w-56 text-ellipsis overflow-hidden">
                                {item.title}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Search;
