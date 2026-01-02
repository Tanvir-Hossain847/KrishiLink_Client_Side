import Spinner from './Spinner';
import { useState } from 'react';

const CropDetail = ({cropDetail}) => {
    const [quantity, setQuantity] = useState(1);
    
    // const {interests} = post
    // console.log(interests);
    

    if(!cropDetail) return <Spinner></Spinner>;
    // console.log(cropDetail);


    const handleAddToCart = async () => {
      
      const data = {
        id: cropDetail._id,
        name: cropDetail.name,
        total: calculateTotalPrice(),
        quantity: quantity,
        type: cropDetail.type,
        image: cropDetail.image
      }

      const response = await fetch('http://localhost:3000/myItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const result = await response.json();
      console.log('Inserted:', result);
      alert('Item added successfully!');
      console.log(cropDetail);
      
    }

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1 && value <= cropDetail.quantity) {
            setQuantity(value);
        }
    };

    const incrementQuantity = () => {
        if (quantity < cropDetail.quantity) {
            setQuantity(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calculateTotalPrice = () => {
        return cropDetail.pricePerUnit * quantity;
    };

    
    return (
        <div className="">
        <div className="">
        <div className='md:flex my-20 w-11/12 mx-auto'>
            <div className="mx-auto">
                <img className='md:w-125 md:h-115 w-11/12 mx-auto rounded-xl object-cover' src={cropDetail.image} alt="" />
            </div>
            <div className="space-y-2 mx-auto md:w-3/6 w-11/12 mt-2">
                <h1 className='text-6xl primary font-bold'>{cropDetail.name}</h1>
                <h1 className='badge bg-emerald-600 text-lg text-white'>{cropDetail.type}</h1>
                <p className='primary text-lg font-bold'>Price Per Unit: ₹{cropDetail.pricePerUnit}</p>
                <p className='primary text-lg font-bold'>Unit: {cropDetail.unit}</p>
                <p className='primary text-lg font-bold'>Quantity Available: {cropDetail.quantity}</p>
                <p className='primary text-lg font-bold'>Description: {cropDetail.description}</p>
                <p className='primary text-lg font-bold'>Location: {cropDetail.location}</p>

                {/* Add to Cart Form */}
                <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <h2 className="text-xl font-bold primary mb-4">Add to Cart</h2>
                    
                    <div className="space-y-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-4">
                            <label className="text-base font-bold primary">Quantity:</label>
                            <div className="flex items-center">
                                <button 
                                    onClick={decrementQuantity}
                                    className="w-9 h-9 bg-emerald-600 text-white rounded-l-xl text-xl font-bold hover:bg-emerald-700 transition-all"
                                >
                                    -
                                </button>
                                <input 
                                    type="number" 
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                    name='quantityReq'
                                    max={cropDetail.quantity}
                                    className="w-16 h-9 text-center text-base font-bold border-y border-gray-300 outline-none"
                                />
                                <button 
                                    onClick={incrementQuantity}
                                    className="w-9 h-9 bg-emerald-600 text-white rounded-r-xl text-xl font-bold hover:bg-emerald-700 transition-all"
                                >
                                    +
                                </button>
                            </div>
                            <span className="text-sm text-gray-500">/ {cropDetail.quantity} available</span>
                        </div>

                        {/* Total Price */}
                        <div className="flex items-center gap-4 py-4 border-t border-gray-200">
                            <span className="text-base font-bold primary">Total Price:</span>
                            <span className="text-2xl font-bold text-emerald-600">
                                ₹{calculateTotalPrice().toLocaleString()}
                            </span>
                        </div>

                        {/* Add to Cart Button */}
                        <button onClick={handleAddToCart} className="w-full py-3 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 hover:scale-102 transition-all duration-200">
                            Add to Cart
                        </button>

                        {/* Buy Now Button */}
                        <button className="w-full py-3 border-2 border-emerald-600 text-emerald-600 text-sm font-bold rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-200">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default CropDetail;