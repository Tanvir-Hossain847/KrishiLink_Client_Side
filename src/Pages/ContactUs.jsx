import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen py-20">
            {/* Hero Section */}
            <div className="w-11/12 mx-auto text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold primary text-gray-800 mb-4">
                    Contact <span className="text-emerald-600">Us</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto primary">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border-y-2 border-emerald-600">
                        <h2 className="text-2xl font-bold primary text-gray-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="label text-emerald-600 font-bold text-sm primary">Your Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input w-full border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-600 primary"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="label text-emerald-600 font-bold text-sm primary">Email Address</label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input w-full border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-600 primary"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="label text-emerald-600 font-bold text-sm primary">Subject</label>
                                <input 
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="input w-full border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-600 primary"
                                    placeholder="Enter subject"
                                />
                            </div>
                            <div>
                                <label className="label text-emerald-600 font-bold text-sm primary">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="textarea w-full border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-600 primary"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="btn w-full bg-emerald-600 text-white py-3 font-bold rounded-xl hover:bg-emerald-700 hover:scale-102 transition-all duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 hover:scale-102 transition-all duration-200">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <span className="text-3xl">📍</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold primary text-gray-800">Our Address</h3>
                                    <p className="text-gray-600 primary">123 Agriculture Road, Farming District, India - 400001</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 hover:scale-102 transition-all duration-200">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <span className="text-3xl">📞</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold primary text-gray-800">Phone Number</h3>
                                    <p className="text-gray-600 primary">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 hover:scale-102 transition-all duration-200">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <span className="text-3xl">✉️</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold primary text-gray-800">Email Address</h3>
                                    <p className="text-gray-600 primary">support@krishilink.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 hover:scale-102 transition-all duration-200">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <span className="text-3xl">🕐</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold primary text-gray-800">Working Hours</h3>
                                    <p className="text-gray-600 primary">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
