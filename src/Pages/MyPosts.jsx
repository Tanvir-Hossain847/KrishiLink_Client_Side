import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import SingleCards from '../Components/SingleCards';
import Spinner from '../Components/Spinner';

const MyPosts = () => {
    const {user} = use(AuthContext)
    const [posts, setPost] = useState([])
    const [loader, setloader] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3000/myposts?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPost(data)
            setloader(false)
        })
    },[user])

    return (
        <div className='min-h-screen'>
            {
                loader ? <Spinner></Spinner>
                :
                <div className="grid grid-cols-3 gap-10 my-20 w-11/12 mx-auto">
                    {
                    posts.map(product => <SingleCards product={product}></SingleCards>)
                    }
                </div>
            }
        </div>
    );
};

export default MyPosts;