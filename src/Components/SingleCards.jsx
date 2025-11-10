import React from 'react';
import { Link } from 'react-router';
import Spinner from './Spinner';

const SingleCards = ({product}) => {
  if(!product) return <Spinner></Spinner>
    
   const {_id ,name, type, pricePerUnit, quantity, description, location, image} = product
    
    return (
        <div>
            <div className="">
            <div className="card bg-base-100 w-full mx-auto h-125 shadow-2xl hover:scale-103 transition-all duration-200">
               <figure>
                 <img
                   src={image}
                   alt="" />
               </figure>
               <div className="card-body">
                <div className="flex  items-center gap-3">
                 <h2 className="card-title text-2xl flex-5">{name}</h2>
                 <p className='badge text-white bg-emerald-600'>{type}</p>
                </div>
                 <p className='primary'>{description}</p>
                 <p className='font-bold primary'>Price per Unit :{pricePerUnit}</p>
                 <p className='primary font-bold'>Available: {quantity}</p>
                 <p className='primary font-bold'>From: {location}</p>
                 <div className="card-actions justify-end">
                   <Link to={`/allcrops/${_id}`} className="btn bg-emerald-600 text-white">View Detail</Link>
                 </div>
               </div>
              </div>
            </div>
        </div>
    );
};

export default SingleCards;


