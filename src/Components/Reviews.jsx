import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Reviews = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 p-">
            <div className="bg- border-y-3 border-emerald-600 shadow-xl p-3 space-y-2 rounded-xl hover:scale-102 transition-all duration-200">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 space-y-1">
                        <img className='w-15 rounded-4xl' src="https://images.pexels.com/photos/45852/farmer-smile-man-person-45852.jpeg" alt="" />
                        <h1 className='primary text-xl'>Ramesh Patel</h1>
                    </div>
                    <div className="flex gap-1 text-emerald-600">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                </div>
                <p className='font-bold primary text-emerald-600'>Smallholder Farmer, Gujarat</p>
                <p className='primary'>Date: 2025-10-30</p>
                <h1 className='font-bold primary'>Helped me sell directly — faster payments</h1>
                <p>This platform connected me to buyers I couldn't reach before. Posting crops is simple and payment came through the same week. Highly recommended for small farmers.</p>
            </div>

            <div className="bg- border-y-3 border-emerald-600 shadow-xl p-3 space-y-2 rounded-xl hover:scale-102 transition-all duration-200">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <img className='w-15 rounded-4xl' src="https://images.pexels.com/photos/5529606/pexels-photo-5529606.jpeg" alt="" />
                        <h1 className='primary text-xl'>Kabita Das</h1>
                    </div>
                    <div className="flex gap-1 text-emerald-600">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </div>
                </div>
                <p className='font-bold primary text-emerald-600'>Organic Producer, Punjab</p>
                <p className='primary'>Date: 2025-09-12</p>
                <h1 className='font-bold primary'>Great visibility for organic crops</h1>
                <p>My millet and herbs reached new wholesale buyers. Fees are fair; customer support resolved my listing question quickly.</p>
            </div>

            <div className="bg- border-y-3 border-emerald-600 shadow-xl p-3 space-y-2 rounded-xl hover:scale-102 transition-all duration-200">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <img className='w-15 rounded-4xl' src="https://images.pexels.com/photos/4199043/pexels-photo-4199043.jpeg" alt="" />
                        <h1 className='primary text-xl'>AgroBazaar</h1>
                    </div>
                    <div className="flex gap-1 text-emerald-600">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                </div>
                <p className='font-bold primary text-emerald-600'>Vegetable Wholesaler, Bengaluru</p>
                <p className='primary'>Date: 2025-08-03</p>
                <h1 className='font-bold primary'>Good supply variety</h1>
                <p>Reliable listings and clear contact info. Would like more filtering options, but overall a useful marketplace for sourcing produce.</p>
            </div>
            </div>
        </div>
    );
};

export default Reviews;