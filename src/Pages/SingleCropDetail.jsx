import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../Components/Spinner';
import CropDetail from '../Components/CropDetail';
import { useParams } from 'react-router';

const SingleCropDetail = () => {

    const [cropDetail, setCropdetail] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/myproducts/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setCropdetail(data)
            setLoading(false)
        })
    },[id])

    return (
        <div>
            {
                loading ? <Spinner></Spinner>
                :
                <CropDetail cropDetail={cropDetail}></CropDetail>
            }
        </div>
    );
};

export default SingleCropDetail;