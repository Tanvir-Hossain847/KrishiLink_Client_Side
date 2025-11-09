import React from 'react';
import Reviews from '../Components/Reviews';
import HeroBanner from '../Components/HeroBanner';
import TopSection from '../Components/TopSection';
import { useLoaderData } from 'react-router';
import HowItWorkd from '../Components/HowItWorkd';


const Home = () => {
    const data = useLoaderData()
    return (
        <div>
                  <div className='min-h-screen'>
                <header className='py-10'>
                    <HeroBanner></HeroBanner>
                </header>

                <main className='py-20'>
                    <div className="">
                        <h1 className='font-bold text-3xl text-black text-center py-10'>Leatest Produce</h1>
                        <TopSection data={data}></TopSection>
                    </div>
                    <div className="py-20">
                        <h1 className='font-bold text-3xl text-black text-center'>
                            Recent Sections
                        </h1>
                            <HowItWorkd></HowItWorkd>
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