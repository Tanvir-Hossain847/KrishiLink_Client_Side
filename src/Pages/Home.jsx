import React from 'react';
import Reviews from '../Components/Reviews';
import HeroBanner from '../Components/HeroBanner';
import TopSection from '../Components/TopSection';
import { useLoaderData } from 'react-router';
import HowItWorkd from '../Components/HowItWorkd';
import KrishiNews from '../Components/KrishiNews';
import PartnerSlider from '../Components/PartnerSlider';
import WhyChooseUs from '../Components/WhyChooseUs';
import CallToAction from '../Components/CallToAction';
import Newsletter from '../Components/Newsletter';


const Home = () => {
    const data = useLoaderData()
    return (
        <div>
                  <div className='min-h-screen bg-base-100'>
                <header className='pb-10 lg:pt-25 pt-15'>
                    <HeroBanner></HeroBanner>
                </header>

                <main className='py-18'>
                    <div className="">
                        <h1 className='font-bold text-3xl text-base-content text-center py-10'>Latest Produce</h1>
                        <TopSection data={data}></TopSection>
                    </div>
                    <div className="py-18">
                        <h1 className='font-bold text-3xl text-base-content text-center pb-10'>
                            Why Choose Us ?
                        </h1>
                        <WhyChooseUs></WhyChooseUs>
                    </div>
                    <div className="py-18">
                        <h1 className='font-bold text-3xl text-base-content text-center pb-10'>
                            How It Works ?
                        </h1>
                            <HowItWorkd></HowItWorkd>
                    </div>
                    <div className="py-18">
                        <CallToAction></CallToAction>
                    </div>
                    <div className="py-18">
                        <h1 className='font-bold text-3xl text-base-content text-center pb-10'>Krishi News</h1>
                        <KrishiNews></KrishiNews>
                    </div>
                    <div className="py-18">
                        <h1 className='font-bold text-3xl text-base-content text-center pb-10'>Reviews</h1>
                        <Reviews></Reviews>
                    </div>
                    <div className="py-18">
                        <Newsletter></Newsletter>
                    </div>
                      <div className="py-18">
                        <h1 className='font-bold text-3xl text-base-content text-center pb-10'>Our Partners</h1>
                        <PartnerSlider></PartnerSlider>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;