import React from 'react';
import Slider from './Slider';
import { Link } from 'react-router';

const HeroBanner = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col-reverse md:flex-row lg:justify-between lg:gap-15'>
            <div className="space-y-4">
            <h1 className='font-bold primary text-3xl sm:text-4xl text-emerald-600'>Empowering Farmers, Feeding the Nation</h1>
            <p className='primary sm:text-lg text-sm font-bold'>
                Join a trusted platform where farmers and buyers trade crops directly — no middlemen, no hassle.
            </p>
            <p className='primary'>KrishiLink is a modern agricultural marketplace that bridges the gap between farmers and buyers. Our mission is to make crop trading simple, transparent, and fair. Farmers can showcase their harvests, and buyers can easily discover fresh, quality produce straight from the source — all within a secure, easy-to-use platform.</p>
            <div className="">
                <Link className='btn bg-emerald-600 p-6 text-white text-center mt-3 hover:scale-105 transition-all duration-100' to={'/allcrops'}>Explore All Crops</Link>
            </div>
            </div>
            <div className="py-2">
                <Slider></Slider>
            </div>
        </div>
    );
};

export default HeroBanner;