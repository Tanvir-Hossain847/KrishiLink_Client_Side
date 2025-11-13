import React from 'react';

const RecivedInterest = () => {
    return (
        <div>
            <tr>
        <td>
            
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{}</div>
              <div className="text-sm opacity-50">{}</div>
            </div>
          </div>
        </td>
        <td className='text-center'>
          <span className="badge text-white bg-emerald-600 badge-lg">{}{}</span>
        </td>
        <td className='text-center'>
            <p className='font-bold'>{}</p>
        </td>
        <td className='text-center'>
            <p className='badge bg-gray-600 text-white'>{}</p>
        </td>
        <td>
          <button className='border-3 font-bold border-red-500 px-3 py-1 rounded-lg text-red-500 text-xs hover:scale-110 hover:text-white hover:bg-red-500 transition-all duration-200'>X</button>
        </td>
      </tr>
        </div>
    );
};

export default RecivedInterest;