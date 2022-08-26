import { IbreadCrumbsSelector } from '@/interface/interface';
import React, { useEffect, useState } from 'react';

interface IBreadCrumbsProps {
    prevPage: string;
    currentPage: string;
}

const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({
    prevPage,
    currentPage,
}) => {
    if (prevPage === undefined) prevPage = '홈';

    return (
        <>
            <ul className="flex ml-6 pt-6 items-center overflow-x-auto whitespace-nowrap text-sm pb-3 dark:text-gray-400">
                <li className="flex ">{prevPage}</li>

                <li
                    className='flex before:content-[""] 
                        before:self-center
                        before:w-2
                        before:h-2
                        before:border-t-2
                        before:border-r-2
                        before:border-gray-300
                        before:rotate-45
                        before:ml-2
                        before:mr-4
                        '
                >
                    {currentPage}
                </li>
            </ul>
        </>
    );
};

export default BreadCrumbs;
