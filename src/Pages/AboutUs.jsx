import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen py-20 bg-base-100">
            {/* Hero Section */}
            <div className="w-11/12 mx-auto text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold primary text-base-content mb-4">
                    About <span className="text-emerald-600">KrishiLink</span>
                </h1>
                <p className="text-lg text-base-content/70 max-w-3xl mx-auto primary">
                    Bridging the gap between farmers and buyers through technology
                </p>
            </div>

            {/* Mission Section */}
            <div className="w-11/12 mx-auto mb-16">
                <div className="bg-base-100 rounded-2xl p-10 shadow-xl border-y-2 border-emerald-600">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold primary text-base-content mb-4">Our Mission</h2>
                            <p className="text-base-content/70 primary text-lg leading-relaxed mb-4">
                                KrishiLink was founded with a simple yet powerful mission: to empower farmers by connecting them directly with buyers, eliminating middlemen, and ensuring fair prices for their hard work.
                            </p>
                            <p className="text-base-content/70 primary text-lg leading-relaxed">
                                We believe that technology can transform agriculture, making it more efficient, transparent, and profitable for everyone involved in the supply chain.
                            </p>
                        </div>
                        <div>
                            <img 
                                src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg" 
                                alt="Farmers working"
                                className="rounded-2xl w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="w-11/12 mx-auto">
                <h2 className="text-3xl font-bold primary text-base-content text-center mb-10">Our Values</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="bg-base-100 rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 text-center hover:scale-103 transition-all duration-200">
                        <div className="text-5xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold primary text-base-content mb-2">Trust</h3>
                        <p className="text-base-content/70 primary">Building lasting relationships through transparency</p>
                    </div>
                    <div className="bg-base-100 rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 text-center hover:scale-103 transition-all duration-200">
                        <div className="text-5xl mb-4">⚖️</div>
                        <h3 className="text-xl font-bold primary text-base-content mb-2">Fairness</h3>
                        <p className="text-base-content/70 primary">Ensuring fair prices for farmers and buyers</p>
                    </div>
                    <div className="bg-base-100 rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 text-center hover:scale-103 transition-all duration-200">
                        <div className="text-5xl mb-4">🌱</div>
                        <h3 className="text-xl font-bold primary text-base-content mb-2">Sustainability</h3>
                        <p className="text-base-content/70 primary">Promoting eco-friendly farming practices</p>
                    </div>
                    <div className="bg-base-100 rounded-2xl p-6 shadow-xl border-y-2 border-emerald-600 text-center hover:scale-103 transition-all duration-200">
                        <div className="text-5xl mb-4">💡</div>
                        <h3 className="text-xl font-bold primary text-base-content mb-2">Innovation</h3>
                        <p className="text-base-content/70 primary">Using technology to solve real problems</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
