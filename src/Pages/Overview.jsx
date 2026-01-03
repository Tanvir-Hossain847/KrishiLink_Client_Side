import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import Spinner from '../Components/Spinner';

const Overview = () => {
    const { user } = use(AuthContext);
    const [posts, setPosts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;
        
        // Fetch both posts and cart items
        Promise.all([
            fetch(`https://krishi-link-server-side.vercel.app/myposts?email=${user.email}`)
                .then(res => res.json()),
            fetch('https://krishi-link-server-side.vercel.app/myItems')
                .then(res => res.json())
        ])
        .then(([postsData, cartData]) => {
            setPosts(Array.isArray(postsData) ? postsData : []);
            setCartItems(Array.isArray(cartData) ? cartData : []);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            setLoading(false);
        });
    }, [user]);

    if (loading) return <Spinner />;

    const recentPosts = Array.isArray(posts) ? posts.slice(-3).reverse() : [];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600">
                <div className="flex items-center gap-4">
                    <img
                        src={user?.photoURL || 'https://via.placeholder.com/60'}
                        alt={user?.displayName}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h1 className="text-2xl font-bold primary text-gray-800">
                            Welcome back, <span className="text-emerald-600">{user?.displayName}</span>!
                        </h1>
                        <p className="text-gray-500 primary">Here's your dashboard overview</p>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 hover:scale-102 transition-all duration-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm primary">My Posts</p>
                            <h2 className="text-3xl font-bold text-emerald-600">{posts.length}</h2>
                        </div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                    </div>
                    <Link to="/dashboard/my-posts" className="text-emerald-600 text-sm font-bold primary mt-4 inline-block hover:underline">
                        View all posts →
                    </Link>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 hover:scale-102 transition-all duration-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm primary">Cart Items</p>
                            <h2 className="text-3xl font-bold text-emerald-600">{cartItems.length}</h2>
                        </div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                    <Link to="/cart" className="text-emerald-600 text-sm font-bold primary mt-4 inline-block hover:underline">
                        View cart →
                    </Link>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600">
                <h2 className="text-xl font-bold primary text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Link to="/dashboard/add-crop" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:scale-102 transition-all duration-200">
                        <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <span className="text-sm font-bold primary text-gray-700">Add Crop</span>
                    </Link>
                    <Link to="/allcrops" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:scale-102 transition-all duration-200">
                        <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <span className="text-sm font-bold primary text-gray-700">Browse Crops</span>
                    </Link>
                    <Link to="/dashboard/profile" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:scale-102 transition-all duration-200">
                        <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <span className="text-sm font-bold primary text-gray-700">Edit Profile</span>
                    </Link>
                </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold primary text-gray-800">Recent Posts</h2>
                    <Link to="/dashboard/my-posts" className="text-emerald-600 text-sm font-bold primary hover:underline">
                        View all
                    </Link>
                </div>
                {recentPosts.length > 0 ? (
                    <div className="space-y-4">
                        {recentPosts.map(post => (
                            <div key={post._id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:scale-101 transition-all duration-200">
                                <img
                                    src={post.image}
                                    alt={post.name}
                                    className="w-14 h-14 rounded-xl object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="font-bold primary text-gray-800">{post.name}</h3>
                                    <p className="text-sm text-gray-500 primary">₹{post.pricePerUnit} per {post.unit}</p>
                                </div>
                                <span className="badge bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm">
                                    {post.type}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        <p className="primary">No posts yet</p>
                        <Link to="/dashboard/add-crop" className="text-emerald-600 font-bold primary hover:underline">
                            Add your first crop
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Overview;
