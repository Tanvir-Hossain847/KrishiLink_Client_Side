import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Subscribed!',
            text: `Thank you for subscribing with: ${email}`,
            icon: 'success'
        });
        setEmail('');
    };

    return (
        <div className='w-11/12 mx-auto'>
            <div className="bg-white rounded-2xl p-10 lg:p-16 shadow-xl border-y-2 border-emerald-600 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 primary">
                    Stay Updated with <span className="text-emerald-600">KrishiLink</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto primary">
                    Subscribe to our newsletter for the latest agricultural news, market prices, and farming tips.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="flex-1 w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-600 focus:outline-none text-base primary"
                    />
                    <button 
                        type="submit"
                        className="btn bg-emerald-600 text-white px-6 py-3 text-base font-bold rounded-xl hover:bg-emerald-700 hover:scale-105 transition-all duration-200"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 primary">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </div>
    );
};

export default Newsletter;
