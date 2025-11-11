import React from 'react';
import Spinner from './Spinner';
import InterestForm from './InterestForm';

const CropDetail = ({cropDetail}) => {
    return (
        <div className="">
        <div className='flex my-20 w-11/12 mx-auto'>
            <div className="mx-auto">
                <img className='w-130 rounded-xl' src={cropDetail.image} alt="" />
            </div>
            <div className="space-y-2 mx-auto">
                <h1 className='text-6xl primary font-bold'>{cropDetail.name}</h1>
                <h1 className='badge bg-emerald-600 text-lg text-white'>{cropDetail.type}</h1>
                <p className='primary text-lg font-bold'>Price Per Unit: {cropDetail.pricePerUnit}</p>
                <p className='primary text-lg font-bold'>Unit: {cropDetail.unit}</p>
                <p className='primary text-lg font-bold'>Quantity: {cropDetail.quantity}</p>
                <p className='primary text-lg font-bold'>Description: {cropDetail.description}</p>
                <p className='primary text-lg font-bold'>Location: {cropDetail.location}</p>
            </div>
        </div>
        <h1 className='text-center text-4xl font-bold'>Interest Section</h1>
        <InterestForm></InterestForm>
        </div>
    );
};

export default CropDetail;