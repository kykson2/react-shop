import React, { useState } from 'react';

interface Ipage {
    prevPage?: string;
    currentPage?: string;
}

const CurrentPage: React.FC<Ipage> = ({ prevPage, currentPage }) => {
    return <div>{`${prevPage} > ${currentPage}`}</div>;
};

export default CurrentPage;
