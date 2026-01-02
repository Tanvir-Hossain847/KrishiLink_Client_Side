import Spinner from './Spinner';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const CropDetail = ({cropDetail}) => {
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);
    
    // const {interests} = post
    // console.log(interests);
    

    if(!cropDetail) return <Spinner></Spinner>;
    // console.log(cropDetail);

    useEffect(() => {
        // Fetch related products of same type
        fetch('http://localhost:3000/myproducts')
            .then(res => res.json())
            .then(data => {
                const related = data.filter(product => 
                    product.type === cropDetail.type && product._id !== cropDetail._id
                ).slice(0, 4);
                setRelatedProducts(related);
            });
    }, [cropDetail]);


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

    const transportSteps = [
        {
            id: 1,
            icon: "📦",
            title: "Order Confirmation",
            description: "Your order is confirmed and the farmer is notified"
        },
        {
            id: 2,
            icon: "🌾",
            title: "Harvesting & Packing",
            description: "Fresh produce is harvested and carefully packed"
        },
        {
            id: 3,
            icon: "🚚",
            title: "Shipping",
            description: "Your order is shipped via our trusted delivery partners"
        },
        {
            id: 4,
            icon: "✅",
            title: "Delivery",
            description: "Fresh produce delivered to your doorstep"
        }
    ];

    
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

        {/* Transportation Procedure Section */}
        <div className="w-11/12 mx-auto my-20">
            <h2 className="text-3xl font-bold text-black text-center mb-10 primary">Transportation Procedure</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {transportSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                        <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 hover:scale-103 transition-all duration-200 text-center">
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-lg font-bold primary text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600 primary text-sm">{step.description}</p>
                        </div>
                        {index < transportSteps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                <div className="w-6 h-0.5 bg-emerald-600"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
            <div className="w-11/12 mx-auto my-20">
                <h2 className="text-3xl font-bold text-black text-center mb-10 primary">Related Products</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                    {relatedProducts.map(product => (
                        <div key={product._id} className="bg-white rounded-2xl shadow-xl border-y-2 border-emerald-600 hover:scale-103 transition-all duration-200 overflow-hidden">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 space-y-2">
                                <h3 className="text-xl font-bold primary text-gray-800">{product.name}</h3>
                                <span className="badge bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm">{product.type}</span>
                                <p className="text-emerald-600 font-bold primary">₹{product.pricePerUnit} / {product.unit}</p>
                                <p className="text-gray-500 text-sm primary">{product.location}</p>
                                <Link 
                                    to={`/allcrops/${product._id}`}
                                    className="block w-full text-center py-2 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all duration-200 mt-3"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        </div>
        </div>
    );
};

export default CropDetail;