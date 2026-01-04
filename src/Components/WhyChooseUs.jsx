import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: "🌾",
            title: "Direct from Farmers",
            description: "Buy fresh produce directly from verified farmers without any middlemen."
        },
        {
            id: 2,
            icon: "💰",
            title: "Fair Prices",
            description: "Get the best prices for both farmers and buyers with transparent pricing."
        },
        {
            id: 3,
            icon: "🔒",
            title: "Secure Transactions",
            description: "Safe and secure payment methods to protect your transactions."
        },
        {
            id: 4,
            icon: "🚚",
            title: "Fast Delivery",
            description: "Quick and reliable delivery to ensure freshness of your produce."
        }
    ];

    return (
        <div className='w-11/12 mx-auto'>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                {features.map(feature => (
                    <div key={feature.id} className="bg-base-100 rounded-2xl p-8 shadow-xl border-y-2 border-emerald-600 hover:scale-103 transition-all duration-200 text-center">
                        <div className="text-6xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold primary text-base-content mb-3">{feature.title}</h3>
                        <p className="text-base-content/70 primary">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
