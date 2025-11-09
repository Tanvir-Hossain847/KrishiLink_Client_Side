import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext)

    return (
        <div className='flex gap-20 min-h-screen mx-auto w-3/4 items-center'>
            <div className="">
                <img className='w-150 rounded-lg' src={user.photoURL} alt="" />
            </div>
            <div className="space-y-2">
                <h1 className='primary text-2xl text-emerald-700 font-bold'>{user.displayName}</h1>
                <p className='primary '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nulla repellendus sunt quaerat soluta laboriosam accusantium cum eaque unde aut.</p>
            </div>
        </div>
    );
};

export default Profile;