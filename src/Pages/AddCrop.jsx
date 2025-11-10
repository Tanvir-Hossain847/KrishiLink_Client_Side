import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const AddCrop = () => {

    const {user} = use(AuthContext)

    const handlePost = (e) => {
        e.preventDefault()

        const inputData = {
            name: e.target.name.value,
            type: e.target.cropType.value,
            pricePerUnit: e.target.price.value,
            unit: e.target.unit.value,
            quantity: e.target.quantity.value,
            description: e.target.description.value,
            location: e.target.location.value,
            image: e.target.image.value,
            owner: {
                ownerEmail: user.email,
                ownerName: user.displayName
            }
        }
        // console.log(inputData);

        fetch("http://localhost:3000/myproducts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            
        })
        
        
    }

    return (
        <div>
            <form onSubmit={handlePost}>
            <fieldset className="fieldset my-20 border-y-5 border-emerald-600 rounded-xl w-lg p-4 shadow-xl mx-auto">
             
             <h1 className='text-center font-bold text-3xl'>Add Crops</h1>

               <label className="label text-emerald-600 font-bold text-sm">Name</label>
               <input 
               type="text" 
               name='name'
               className="input w-full focus:outline- mb-2" 
               placeholder="Name" />
             
               <label className="label text-emerald-600 font-bold text-sm">Type</label>
               <select 
               name="cropType" 
               id="type"
               className='select w-full focus:outline- mb-2'
               >
                <option value="">Select Type</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vagetables</option>
               </select>

               <label className="label text-emerald-600 font-bold text-sm">Price Per Unit (TK)</label>
               <input 
               type="number"
               name='price' 
               className="input w-full focus:outline- mb-2" 
               placeholder="Price Per Unit (TK)"
               />

               <label className="label text-emerald-600 font-bold text-sm">Unit</label>
               <select 
               name="unit" 
               id="type"
               className='select w-full focus:outline- mb-2'
               >
                <option value="">Select Unit</option>
                <option value="kg">kg</option>
                <option value="Ton">Ton</option>
                <option value="Pound">Pound</option>
               </select>

               <label className="label text-emerald-600 font-bold text-sm">Estimated Quantity</label>
               <input 
               type="number" 
               name='quantity'
               min="1"
               className="input w-full focus:outline- mb-2" 
               placeholder="Estimated Quantity" /> 

               <label className="label text-emerald-600 font-bold text-sm">Description</label>
               <textarea 
               name="description" 
               id=""
               rows="3"
               placeholder="Short details about your crop (e.g., variety, harvest time, quality)"
               className="textarea textarea-bordered w-full focus:outline- mb-2"
               >
               </textarea>

               <label className="label text-emerald-600 font-bold text-sm">Location</label>
               <input 
               type="text" 
               name='location'
               className="input w-full focus:outline- mb-2" 
               placeholder="Location" />

               <label className="label text-emerald-600 font-bold text-sm">Image URL</label>
               <input 
               type="text" 
               name='image'
               className="input w-full focus:outline- mb-2" 
               placeholder="Image" />

               <button className="btn bg-emerald-600 mt-4 text-white">Submit</button>
             </fieldset>
             </form>
        </div>
    );
};

export default AddCrop;