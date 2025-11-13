import React from 'react';
import { TiTick } from "react-icons/ti";

const RecivedInterest = ({interest}) => {
    console.log(interest);
    const {message, quantity, userEmail, userName,status} = interest
    // if (!interest) {
    //     return (
    //         <tr>
    //             <td colSpan={6} className="text-center text-gray-500">
    //                 No Interest For This Product Yet
    //             </td>
    //         </tr>
    //     );
    // }
    return (
        <>
            <tr>
        <td>
            
        </td>
        <td>
          <div className="flex items-center gap-3">
          
            <div>
              <div className="font-bold">{userName}</div>
              <div className="text-sm opacity-50">{userEmail}</div>
            </div>
          </div>
        </td>
        <td className='text-center'>
          <span className="badge text-white bg-emerald-600 badge-lg">{quantity}kg</span>
        </td>
        <td className='text-center'>
            <p className='font-bold'>{message}</p>
        </td>
        <td className='text-center'>
            <p className='badge bg-gray-600 text-white'>{status}</p>
        </td>
        <td className='flex items-center gap-2'>
          <button className='border-3 font-bold border-emerald-600 px-3 py-1.5 rounded-lg text-emerald-600 text-sm hover:scale-110 hover:text-white hover:bg-emerald-600 transition-all duration-200'><TiTick></TiTick></button>
          <button className='border-3 font-bold border-red-500 px-3 py-1 rounded-lg text-red-500 text-xs hover:scale-110 hover:text-white hover:bg-red-500 transition-all duration-200'>X</button>
        </td>
      </tr>
        </>
    );
};

export default RecivedInterest;