import React, { use, useEffect, useState } from 'react';
import InterestsInfo from '../Components/InterestsInfo';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../Components/Spinner';

const MyInterests = () => {

    const {user} = use(AuthContext)
    const [loading, setLoading] = useState(true)
    const [interestsData, setInterestsData] = useState([])

    useEffect(() => {
        if(!user?.email) return

        fetch(`http://localhost:3000/interests?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setInterestsData(data)
            setLoading(false)
        })
    },[user])

    const handleDelete = (interestId) => {
      setInterestsData(prev => prev.map(crop => ({
        ...crop,
        interests: crop.interests.filter(i => i._id !== interestId)
      })))
    }

    return (
        <div className='min-h-screen my-20'>
            {
               loading ? <Spinner></Spinner>
               :
                <div className="overflow-x-auto">
  <table className="table">
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
               interestsData.map(interest => <InterestsInfo 
                key={interest._id} 
                interest={interest}
                onDelete={handleDelete}
                >
                </InterestsInfo>)
        }
        
    </tbody>
  </table>
</div>
            }
        </div>
    );
};

export default MyInterests;