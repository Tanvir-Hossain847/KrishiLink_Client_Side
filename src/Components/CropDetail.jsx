import React, { use } from 'react';
import Spinner from './Spinner';
import InterestForm from './InterestForm';
import { AuthContext } from '../Context/AuthContext';

const CropDetail = ({cropDetail}) => {
    const {user} = use(AuthContext)
    if(!cropDetail) return <Spinner></Spinner>;
    console.log(cropDetail);
    
    return (
        <div className="">
        <div className='flex my-20 w-11/12 mx-auto'>
            <div className="mx-auto">
                <img className='w-125 h-115 rounded-xl' src={cropDetail.image} alt="" />
            </div>
            <div className="space-y-2 mx-auto w-3/6">
                <h1 className='text-6xl primary font-bold'>{cropDetail.name}</h1>
                <h1 className='badge bg-emerald-600 text-lg text-white'>{cropDetail.type}</h1>
                <p className='primary text-lg font-bold'>Price Per Unit: {cropDetail.pricePerUnit}</p>
                <p className='primary text-lg font-bold'>Unit: {cropDetail.unit}</p>
                <p className='primary text-lg font-bold'>Quantity: {cropDetail.quantity}</p>
                <p className='primary text-lg font-bold'>Description: {cropDetail.description}</p>
                <p className='primary text-lg font-bold'>Location: {cropDetail.location}</p>
            </div>
        </div>
        {
            user?.email !== cropDetail?.owner?.ownerEmail ? (
                <>
                <div className="w-11/12 mx-auto flex justify-around">
                    <div className=" space-y-3">
                       <h1 className='pt-10 text-4xl font-bold'>Interested In Buying?</h1>
                       <div className="space-y-1">
                       <p>Fill Out The Form Place Your Interest.</p>
                       <p>Once Approved The Prouct Will Be Delivered To Your Door Step.</p>
                       </div>
                    </div>
                <InterestForm cropDetail={cropDetail}></InterestForm>
                </div>
                </>
            ) : <p className='text-red-500 font-bold text-center primary my-5'>You Can't Send Interest On Your Own Crops</p>
        }
        </div>
    );
};

export default CropDetail;