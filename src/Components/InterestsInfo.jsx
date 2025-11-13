import React from 'react';
import Swal from 'sweetalert2';

const InterestsInfo = ({interest, onDelete}) => {
    const {name, owner, interests, image, unit} = interest
    const ownerEmail = owner.ownerEmail


    const handleDelete = (interestId) => {
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to undo this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (!result.isConfirmed) return;


      fetch('http://localhost:3000/interests',{
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({interestId})
      }) 
      .then(res => res.json())
      .then(data => {
        if(data.error){
          Swal.fire({ icon: 'error', title: 'Error', text: data.error });
        }else{
          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Interest deleted successfully.',
              timer: 2000,
              showConfirmButton: false
            });
            if (onDelete) onDelete(interestId)
        }
      })
    });
  };

    return (
        <>          
        {
            interests.map((i, index) => (
      <tr key={index}>
        <td>
            
        </td>
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
        <td>
          <button onClick={() => handleDelete(i._id)} className='border-3 font-bold border-red-500 px-3 py-1 rounded-lg text-red-500 text-xs hover:scale-110 hover:text-white hover:bg-red-500 transition-all duration-200'>X</button>
        </td>
      </tr>
            ))
        }
        </>
    );
};

export default InterestsInfo;