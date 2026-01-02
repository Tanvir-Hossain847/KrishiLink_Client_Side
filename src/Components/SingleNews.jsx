import React from 'react';
import { Link } from 'react-router';


const SingleNews = ({singlenews}) => {
    return (
        <div className='space-y-2 rounded-xl shadow-xl hover:scale-102 transition-all duration-200'>
            <div className="">
                <img className='rounded-xl' src={singlenews.imageUrl} alt="" />
            </div>
            <div className="p-5 space-y-3">
            <h1 className='primary text-3xl font-bold'>{singlenews.title}</h1>
            <h1 className='font-bold primary'>{singlenews.author}</h1>
            <h1 className='font-bold primary'>{singlenews.date}</h1>
            <p>{singlenews.summary}</p>
            <p className='line-clamp-3'>{singlenews.content}</p>
            <Link to={`/news/${singlenews.id}`}><button className='btn bg-emerald-600 text-white'>Read More</button></Link>
            </div>
        </div>
    );
};

export default SingleNews;