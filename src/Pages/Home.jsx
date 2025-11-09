import React from 'react';
import Reviews from '../Components/Reviews';
import HeroBanner from '../Components/HeroBanner';
import TopSection from '../Components/TopSection';
import RecentSection from '../Components/RecentSection';


const Home = () => {
    return (
        <div>
                  <div className='min-h-screen'>
                <header className='py-10'>
                    <HeroBanner></HeroBanner>
                </header>

                <main className='py-20'>
                    <div className="">
                        <h1 className='font-bold text-3xl text-black text-center py-10'>Top Section</h1>
                        <TopSection></TopSection>
                    </div>
                    <div className="">
                        <h1 className='font-bold text-3xl text-black text-center pt-20 pb-10'>
                            Recent Sections
                        </h1>
                            <RecentSection></RecentSection>
                    </div>
                    <div className="py-10">
                        <Reviews></Reviews>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;