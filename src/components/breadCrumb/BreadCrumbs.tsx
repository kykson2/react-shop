import { IbreadCrumbsSelector } from '@/interface/interface';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BreadCrumbs: React.FC = () => {
    const breadCrumbsSelector = useSelector(
        (state: IbreadCrumbsSelector) => state.breadCrumbs
    );

    const [prevPage, setPrevPage] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<string>('');

    useEffect(() => {
        setPrevPage(breadCrumbsSelector.prev);
        setCurrentPage(breadCrumbsSelector.current);
    }, [breadCrumbsSelector]);

    return (
        <>
            {prevPage !== '' && (
                <ul className="flex mx-12 pt-6 items-center overflow-x-auto whitespace-nowrap text-sm pb-3 dark:text-gray-400">
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
            )}
        </>
    );
};

export default BreadCrumbs;
