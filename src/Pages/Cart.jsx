import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Spinner from '../Components/Spinner';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://krishi-link-server-side.vercel.app/myItems')
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
        const response = await fetch(`https://krishi-link-server-side.vercel.app/myItems/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setCartItems(cartItems.filter(item => item._id !== id));
        }
    };

    const handleCheckout = async () => {
        Swal.fire({
            title: 'Confirm Payment',
            html: `
                <div class="text-left">
                    <p><strong>Items:</strong> ${cartItems.length}</p>
                    <p><strong>Total Amount:</strong> ₹${calculateGrandTotal().toLocaleString()}</p>
                </div>
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#059669',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm Payment',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Delete all cart items from database
                for (const item of cartItems) {
                    await fetch(`https://krishi-link-server-side.vercel.app/myItems/${item._id}`, {
                        method: 'DELETE',
                    });
                }
                // Clear cart state
                setCartItems([]);
                
                Swal.fire({
                    title: 'Order Placed!',
                    text: 'Your delivery is on the way! 🚚',
                    icon: 'success',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });
            }
        });
    };

    if (loading) return <Spinner />;

    return (
        <div className="min-h-screen py-16 bg-base-100">
            <div className="w-11/12 mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold primary text-center mb-12 text-base-content">My Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-base-content/60 mb-4">Your cart is empty</h2>
                        <Link to="/allcrops" className="btn bg-emerald-600 text-white px-8 py-3 rounded-xl">
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    <div className="lg:flex lg:gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3 space-y-4">
                            {cartItems.map(item => (
                                <div key={item._id} className="flex items-center gap-4 p-4 bg-base-100 rounded-2xl shadow-lg border border-base-300">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-24 h-24 object-cover rounded-xl"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold primary text-base-content">{item.name}</h3>
                                        <span className="badge bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm">{item.type}</span>
                                        <p className="text-base-content/70 mt-2">Quantity: {item.quantity}</p>
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
                            <div className="bg-base-200 p-6 rounded-2xl border border-base-300 sticky top-4">
                                <h2 className="text-xl font-bold primary mb-4 text-base-content">Order Summary</h2>
                                
                                <div className="space-y-3 border-b border-base-300 pb-4">
                                    <div className="flex justify-between">
                                        <span className="text-base-content/70">Items ({cartItems.length})</span>
                                        <span className="font-bold text-base-content">₹{calculateGrandTotal().toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-base-content/70">Delivery</span>
                                        <span className="font-bold text-emerald-600">Free</span>
                                    </div>
                                </div>

                                <div className="flex justify-between py-4">
                                    <span className="text-lg font-bold primary text-base-content">Total</span>
                                    <span className="text-2xl font-bold text-emerald-600">₹{calculateGrandTotal().toLocaleString()}</span>
                                </div>

                                <button onClick={handleCheckout} className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all">
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
