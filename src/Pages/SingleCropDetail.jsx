import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';

const SingleCropDetail = () => {

    const {user} = use(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/myproducts/${user._id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
    },[user])

    return (
        <div>
            hallo
        </div>
    );
};

export default SingleCropDetail;