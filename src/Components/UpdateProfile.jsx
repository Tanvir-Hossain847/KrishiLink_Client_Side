import React, { use } from 'react';
import { useNavigate } from 'react-router';
import Spinner from './Spinner';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const UpdateProfile = () => {
    const {user, loading, updateUserProfile} = use(AuthContext)
    const navigate = useNavigate()

    if(loading){
        return <Spinner></Spinner>
    }

    const handleUpdateUser = (event) => {
      event.preventDefault()
      const Name = event.target.Name.value
      const photo = event.target.photo.value
      updateUserProfile(Name, photo)
      .then(() => {
        Swal.fire({
          title: "Updated",
          icon: "success"
        })
        navigate('/profile')
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          icon: "error"
        })
      })
    }

    return (
        <div>
            <div className=' py-20'>
            <div className="card w-full mx-auto border-y-4 border-emerald-500 max-w-md shrink-0 shadow-2xl">
                  <div className="card-body">
                   <form onSubmit={handleUpdateUser}> 
                     <fieldset className="fieldset space-y-1">
                        <img className='mx-auto rounded-4xl' src={user.photoURL} alt="" />
                        <h1 className='mx-auto text-xl'>{user.displayName}</h1>
                      <label className="label text-green-500">Your Name</label>
                      <input name='Name' defaultValue={user.displayName} type="text" className="input h-12 w-full focus:outline-none focus:border-none" placeholder="Your Name" />
                      <label className="label text-green-500">Photo_URL</label>
                      <input name='photo' defaultValue={user.photoURL} type="text" className="input h-12 w-full focus:outline-none focus:border-none" placeholder="Your Photo_URL" />
                      <button className="btn bg-emerald-600 text-white mt-4">Update Profile</button>
                    </fieldset>
                   </form>
                  </div>
                </div>
        </div>
        </div>
    );
};

export default UpdateProfile;