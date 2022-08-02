import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    return (
        <div className="pt-40 dark:text-gray-400">
            <h1 className="text-9xl font-bold text-center">404</h1>
            <h2 className="text-3xl text-center pt-10">
                페이지를 찾을 수 없습니다.
            </h2>
            <Link
                to={'/'}
                type="button"
                className="product-button w-44 h-20 text-2xl mt-10 bg-indigo-600 m-auto"
            >
                메인으로
            </Link>
        </div>
    );
};

export default ErrorPage;
