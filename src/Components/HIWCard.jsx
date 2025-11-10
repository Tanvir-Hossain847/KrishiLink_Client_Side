import React from 'react';

const HIWCard = ({step}) => {

    const {icon, title, description} = step
    return (
        <div className='space-y-2 border-y-2 border-emerald-600 shadow-xl p-7 rounded-xl hover:scale-103 transition-all duration-200'>
            <h1 className='text-6xl'>{icon}</h1>
            <p className='font-bold primary text-2xl'>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default HIWCard;