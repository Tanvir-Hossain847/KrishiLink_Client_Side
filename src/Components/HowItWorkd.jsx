import React from 'react';
import HIWCard from './HIWCard';

const HowItWorkd = () => {

    const steps = [
  {
    id: 1,
    icon: "👨‍🌾", // You can use emojis or icons from react-icons
    title: "Sign Up / Login",
    description: "Create an account to start trading crops.",
  },
  {
    id: 2,
    icon: "🌱",
    title: "Post or Browse Crops",
    description: "Farmers post their crops; buyers search for crops easily.",
  },
  {
    id: 3,
    icon: "💌",
    title: "Send Interest / Buy",
    description: "Buyers can request crops or purchase directly from farmers.",
  },
  {
    id: 4,
    icon: "✅",
    title: "Confirm & Deliver",
    description: "Sellers approve requests and buyers receive their crops.",
  },
];


    return (
        <div className='grid grid-cols-4 gap-5 w-11/12 mx-auto text-center pt-10'>
            {
                steps.map(step => <HIWCard key={step.id} step={step}></HIWCard>)
            }
        </div>
    );
};

export default HowItWorkd;