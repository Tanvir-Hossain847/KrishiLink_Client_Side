import React from 'react';

const InterestForm = () => {
    return (
        <div>
            <form>
            <fieldset className="fieldset border-y-5 border-emerald-600 rounded-xl w-lg p-4 shadow-xl mb-20 mt-10 mx-auto">
             
             <h1 className='text-center font-bold text-3xl'>Interest Form</h1>

               <label className="label text-emerald-600 font-bold text-sm">Email</label>
               <input 
               type="email" 
               name='email'
               className="input w-full focus:outline- mb-2" 
               placeholder="User Email" />
             
               <label className="label text-emerald-600 font-bold text-sm">Name</label>
               <input 
               type="text"
               name='name' 
               className='input w-full focus:outline- mb-2'
               placeholder='Name'/>

               <label className="label text-emerald-600 font-bold text-sm">Quantity</label>
               <input 
               type="number"
               name='quantity' 
               className="input w-full focus:outline- mb-2" 
               placeholder="Quantity"
               />

               <label className="label text-emerald-600 font-bold text-sm">Unit</label>
               <textarea 
               name="description" 
               id=""
               rows="3"
               placeholder="Please Enter Your Message Here"
               className="textarea textarea-bordered w-full focus:outline- mb-2"
               >
               </textarea>

               <button className="btn bg-emerald-600 mt-4 text-white">Submit</button>
             </fieldset>
             </form>
        </div>
    );
};

export default InterestForm;