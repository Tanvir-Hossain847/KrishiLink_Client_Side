import React from 'react';

const InterestsInfo = ({interest}) => {
    const {name, owner, interests, image, unit} = interest
    const ownerEmail = owner.ownerEmail

    return (
        <div>
            <div className="my-10">
                <h1 className='text-center font-bold text-3xl'>My Interests</h1>
                </div>
            <div className="overflow-x-auto min-h-screen my-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Crop</th>
        <th className='text-center'>Quantity</th>
        <th className='text-center'>Message</th>
        <th className='text-center'>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            interests.map((i, index) => (
      <tr key={index}>
        <th>
          
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                 src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{ownerEmail}</div>
            </div>
          </div>
        </td>
        <td className='text-center'>
          <span className="badge text-white bg-emerald-600 badge-lg">{i.quantity}{unit}</span>
        </td>
        <td className='text-center'>
            <p className='font-bold'>{i.message}</p>
        </td>
        <td className='text-center'>
            <p className='badge bg-gray-600 text-white'>{i.status}</p>
        </td>
        {/* <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th> */}
      </tr>
            ))
        }
      {/* row 1 */}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default InterestsInfo;