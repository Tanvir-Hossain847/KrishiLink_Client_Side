import React from 'react';
import SingleNews from './SingleNews';

const KrishiNews = () => {
    const news = [
        {
      id: 1,
      title: "New Government Subsidy for Organic Farming",
      imageUrl: "https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg",
      summary:
        "The government announces a new initiative supporting farmers who adopt organic practices with subsidies up to 40% on fertilizer costs.",
      content:
        "The Ministry of Agriculture has launched a new program encouraging farmers to transition to organic farming methods...",
      date: "2025-10-28",
      author: "AgroConnect Team",
    },
    {
      id: 2,
      title: "Top 5 Crops with High Profit Margin in 2025",
      imageUrl: "https://images.pexels.com/photos/299113/pexels-photo-299113.jpeg",
      summary:
        "From millets to medicinal herbs, discover which crops are expected to give farmers the best returns this year.",
      content:
        "According to the Indian Council of Agricultural Research, high-value crops like quinoa, ginger, and turmeric are expected to yield record profits...",
      date: "2025-09-15",
      author: "Farmers Insight",
    },
    {
      id: 3,
      title: "How AI is Revolutionizing Crop Monitoring",
      imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      summary:
        "Farmers are using drones and AI tools to detect crop stress, predict yield, and optimize irrigation with remarkable accuracy.",
      content:
        "In recent years, Artificial Intelligence has transformed traditional agriculture by providing insights derived from satellite imagery and IoT sensors...",
      date: "2025-08-12",
      author: "AgroTech Today",
    }
    ]

    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 w-11/12 mx-auto'>
            {
                news.map(singlenews => <SingleNews key={singlenews.id} singlenews={singlenews}></SingleNews>)
            }
        </div>
    );
};

export default KrishiNews;