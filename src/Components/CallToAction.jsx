import React from 'react';
import { Link } from 'react-router';

const CallToAction = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="bg-emerald-600 rounded-2xl p-10 lg:p-16 text-center shadow-xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 primary">
                    Ready to Start Trading?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto primary">
                    Join thousands of farmers and buyers who trust KrishiLink for their agricultural needs. 
                    Start selling your crops or find fresh produce today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   
                    <Link 
                        to="/allcrops" 
                        className="btn border-2 border-white bg-transparent text-white px-8 py-3 text-lg font-bold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-200"
                    >
                        Browse Crops
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
