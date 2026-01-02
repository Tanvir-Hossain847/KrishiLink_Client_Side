import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Spinner from '../Components/Spinner';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/myItems')
            .then(res => res.json())
            .then(data => {
                setCartItems(data);
                setLoading(false);
            })
    }, []);

    const calculateGrandTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.total, 0);
    };

    const handleRemoveItem = async (id) => {
        const response = await fetch(`http://localhost:3000/myItems/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setCartItems(cartItems.filter(item => item._id !== id));
        }
    };

    if (loading) return <Spinner />;

    return (
        <div className="min-h-screen py-16">
            <div className="w-11/12 mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold primary text-center mb-12">My Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-gray-600 mb-4">Your cart is empty</h2>
                        <Link to="/allcrops" className="btn bg-emerald-600 text-white px-8 py-3 rounded-xl">
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    <div className="lg:flex lg:gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3 space-y-4">
                            {cartItems.map(item => (
                                <div key={item._id} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-24 h-24 object-cover rounded-xl"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold primary">{item.name}</h3>
                                        <span className="badge bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm">{item.type}</span>
                                        <p className="text-gray-600 mt-2">Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-emerald-600">₹{item.total?.toLocaleString()}</p>
                                        <button 
                                            onClick={() => handleRemoveItem(item._id)}
                                            className="text-red-500 text-sm font-bold mt-2 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3 mt-8 lg:mt-0">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 sticky top-4">
                                <h2 className="text-xl font-bold primary mb-4">Order Summary</h2>
                                
                                <div className="space-y-3 border-b border-gray-200 pb-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Items ({cartItems.length})</span>
                                        <span className="font-bold">₹{calculateGrandTotal().toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Delivery</span>
                                        <span className="font-bold text-emerald-600">Free</span>
                                    </div>
                                </div>

                                <div className="flex justify-between py-4">
                                    <span className="text-lg font-bold primary">Total</span>
                                    <span className="text-2xl font-bold text-emerald-600">₹{calculateGrandTotal().toLocaleString()}</span>
                                </div>

                                <button className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
