import React from 'react';
import Reviews from '../Components/Reviews';
import HeroBanner from '../Components/HeroBanner';
import TopSection from '../Components/TopSection';
import { useLoaderData } from 'react-router';
import HowItWorkd from '../Components/HowItWorkd';
import KrishiNews from '../Components/KrishiNews';
import PartnerSlider from '../Components/PartnerSlider';


const Home = () => {
    const data = useLoaderData()
    return (
        <div>
                  <div className='min-h-screen'>
                <header className='pb-10 pt-25'>
                    <HeroBanner></HeroBanner>
                </header>

                <main className='py-18'>
                    <div className="">
                        <h1 className='font-bold text-3xl text-black text-center py-10'>Leatest Produce</h1>
                        <TopSection data={data}></TopSection>
                    </div>
                    <div className="py-18">
                        <h1 className='font-bold text-3xl text-black text-center'>
                            How It Works ?
                        </h1>
                            <HowItWorkd></HowItWorkd>
                    </div>
                    <div className="py-18">
                        <h1 className='font-bold text-3xl text-black text-center pb-10'>Krishi News</h1>
                        <KrishiNews></KrishiNews>
                    </div>
                    <div className="py-18">
                        <h1 className='font-bold text-3xl text-black text-center pb-10'>Reviews</h1>
                        <Reviews></Reviews>
                    </div>
                      <div className="py-18">
                        <h1 className='font-bold text-3xl text-black text-center pb-10'>Our Partners</h1>
                        <PartnerSlider></PartnerSlider>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;