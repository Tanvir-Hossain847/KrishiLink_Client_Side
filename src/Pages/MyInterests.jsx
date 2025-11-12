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

    return (
        <div>
            {
               loading ? <Spinner></Spinner>
               :
               interestsData.map(interest => <InterestsInfo 
                key={interest._id} 
                interest={interest}
                >

                </InterestsInfo>)
            }
        </div>
    );
};

export default MyInterests;