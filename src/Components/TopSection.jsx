import React from 'react';
import { Link } from 'react-router';

const TopSection = () => {
    return (
        <div className='text-center'>
            <div className="flex w-11/12 mx-auto justify-between">
                            <img className='w-80 rounded-2xl' src="https://i.ibb.co.com/nqdhSNYx/2259129.jpg" alt="" />
                            <img className='w-80 rounded-2xl' src="https://i.ibb.co.com/nqdhSNYx/2259129.jpg" alt="" />
                            <img className='w-80 rounded-2xl' src="https://i.ibb.co.com/nqdhSNYx/2259129.jpg" alt="" />
                        </div>
                <Link to={'/products'} className='btn mt-8 bg-emerald-700 text-white'>Show All</Link>
        </div>
    );
};

export default TopSection;