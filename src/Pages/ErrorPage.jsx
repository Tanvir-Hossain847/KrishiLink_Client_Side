import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen text-center'>
            <img className='w-120 mx-auto mt-10' src="https://i.ibb.co.com/7d9KrTYM/sad-farmer-with-harvested-vegetables.png" alt="" />
            <h1 className='text-8xl font-bold text-emerald-600'>404</h1>
            <h3 className='font-bold text-2xl'>Page Not Found</h3>
            <Link className='btn bg-emerald-600 text-white my-2' to={'/'}>Go Back</Link>
        </div>
    );
};

export default ErrorPage;