import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const InterestForm = ({cropDetail}) => {
    
    const {user} =use(AuthContext)
    const [quantity, setQuantity] = useState(1)
    const [alreadyInterested, setAlreadyInterested] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const totalPrice = quantity * cropDetail.pricePerUnit
    
    useEffect(() => {
        if(cropDetail?.interests?.some(r => r.userEmail === user?.email)){
            setAlreadyInterested(true)
        }
    },[cropDetail,user])
    
    const handleInterest = async(e) => {
        e.preventDefault()
        
        
        if(quantity < 1){
            Swal.fire({
                title: 'Error',
                text: 'The Minimum Quantity Must Be 1',
                icon: 'error'
            });
            return
        }
        
        if(alreadyInterested){
            Swal.fire({
                title: 'Already Interested',
                text: 'You Have Already Placed Interest',
                icon: 'warning'
            });
            return
        }

        const formData = {
            cropId: cropDetail._id,
            userEmail: user.email,
            userName: user.displayName,
            quantity: parseInt(quantity),
            message: e.target.message.value
        }

        // console.log(formData);

        setLoading(true)
        fetch('https://krishi-link-server-side.vercel.app/interests', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setAlreadyInterested(true)
            setLoading(false)
            Swal.fire({
                title: 'Success',
                text: 'Interest submitted successfully!',
                icon: 'success'
            });
        })
        .catch(err => {
            console.log(err);
        })


        
    }


    return (
        <div>
            <form onSubmit={handleInterest}>
            <fieldset className="fieldset border-y-5 border-emerald-600 rounded-xl w-xs md:w-lg p-4 shadow-2xl mb-20 mt-10 mx-auto">
             
             <h1 className='text-center font-bold text-3xl'>Interest Form</h1>

               <label className="label text-emerald-600 font-bold text-sm">Quantity</label>
               <input 
               type="number"
               name='quantity'
               value={quantity}
               onChange={(e) => setQuantity(e.target.value)}
               className="input w-full focus:outline- mb-2" 
               placeholder="Quantity"
               />

               <label className="label text-emerald-600 font-bold text-sm">Message</label>
               <textarea 
               name="message" 
               id=""
               rows="3"
               placeholder="Please Enter Your Message Here"
               className="textarea textarea-bordered w-full focus:outline- mb-2"
               >
               </textarea>

               <p className='text-emerald-600 font-bold text-lg'>
                Total Price: {isNaN(totalPrice)? 0 : totalPrice} TK
               </p>

               <button 
               className="btn bg-emerald-600 mt-4 text-white">
                {
                    loading ? <span className="loading loading-spinner loading-xl"></span> : "Submit"
                }
                </button>
             </fieldset>
             </form>
        </div>
    );
};

export default InterestForm;