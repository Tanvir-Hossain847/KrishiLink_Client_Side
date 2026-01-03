import React from 'react';
import { Link } from 'react-router';
import SingleCards from './SingleCards';

const TopSection = ({data}) => {
    // console.log(data)
    
    // Safety check - ensure data is an array before slicing
    const letestSix = Array.isArray(data) ? data.slice(-8).reverse() : []

    return (
        <div className='mx-auto'>
            <div className="w-11/12 mx-auto grid lg:grid-cols-4 grid-cols-1 gap-10">
                           {
                            letestSix.map(product => <SingleCards product={product}></SingleCards>)
                           }
                        </div>
                <div className="text-center">
                <Link to={'/allcrops'} className='btn mt-20 bg-emerald-600 text-white'>Show All</Link>
                </div>
        </div>
    );
};

export default TopSection;