import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Profile = () => {
    const {user, updateUserProfile} = use(AuthContext)
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(user?.displayName || '')
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '')

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        updateUserProfile(name, photoURL)
        .then(() => {
            Swal.fire({
                title: "Profile Updated",
                icon: "success"
            })
            setIsEditing(false)
        })
        .catch(() => {
            Swal.fire({
                title: "Error updating profile",
                icon: "error"
            })
        })
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center py-10'>
            <h1 className='text-3xl font-bold primary mb-8 text-center'>My Profile</h1>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
                {!isEditing ? (
                    // View Mode
                    <div className="flex flex-col items-center text-center">
                        <img 
                            className='w-32 h-32 rounded-full object-cover shadow-lg mb-6' 
                            src={user?.photoURL || 'https://via.placeholder.com/150'} 
                            alt={user?.displayName} 
                        />
                        <div className="space-y-3 mb-6">
                            <h2 className='text-2xl font-bold text-gray-800'>{user?.displayName}</h2>
                            <p className='text-gray-500'>{user?.email}</p>
                        </div>
                        <button 
                            onClick={() => setIsEditing(true)}
                            className='btn bg-emerald-600 text-white px-8 rounded-xl hover:bg-emerald-700'
                        >
                            Edit Profile
                        </button>
                    </div>
                ) : (
                    // Edit Mode
                    <form onSubmit={handleUpdateProfile} className="space-y-5">
                        <div className="flex flex-col items-center mb-4">
                            <img 
                                className='w-28 h-28 rounded-full object-cover shadow-lg mb-2' 
                                src={photoURL || 'https://via.placeholder.com/150'} 
                                alt="Preview" 
                            />
                            <p className="text-sm text-gray-400">Image Preview</p>
                        </div>
                        
                        <div>
                            <label className="label text-emerald-600 font-bold text-sm">Full Name</label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input w-full border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500" 
                                placeholder="Your Name" 
                            />
                        </div>
                        
                        <div>
                            <label className="label text-emerald-600 font-bold text-sm">Profile Image URL</label>
                            <input 
                                type="text" 
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="input w-full border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500" 
                                placeholder="https://example.com/image.jpg" 
                            />
                        </div>
                        
                        <div>
                            <label className="label text-gray-400 font-bold text-sm">Email (cannot be changed)</label>
                            <input 
                                type="email" 
                                value={user?.email}
                                disabled
                                className="input w-full border border-gray-200 rounded-xl bg-gray-50 text-gray-400" 
                            />
                        </div>
                        
                        <div className="flex gap-3 pt-2">
                            <button 
                                type="submit"
                                className='btn flex-1 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700'
                            >
                                Save Changes
                            </button>
                            <button 
                                type="button"
                                onClick={() => {
                                    setIsEditing(false)
                                    setName(user?.displayName || '')
                                    setPhotoURL(user?.photoURL || '')
                                }}
                                className='btn flex-1 border-2 border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50'
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Profile;