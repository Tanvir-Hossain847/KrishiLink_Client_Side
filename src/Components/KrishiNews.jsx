import React from 'react';
import SingleNews from './SingleNews';

const KrishiNews = () => {
    const news = [
  {
    id: 1,
    title: "New Government Subsidy for Organic Farming",
    imageUrl: "https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg",
    summary: "The government has announced a nationwide initiative to support farmers transitioning to organic farming, offering subsidies of up to 40% on organic fertilizers and bio-input costs to promote sustainable agriculture and improve soil health.",
    content: "The Ministry of Agriculture has launched a comprehensive subsidy program aimed at accelerating the adoption of organic farming practices across the country. Under the new initiative, eligible farmers will receive financial assistance covering up to 40 percent of the cost of organic fertilizers, bio-pesticides, and soil enhancers.\n\nAccording to ministry officials, the scheme primarily targets small and marginal farmers, who often face financial barriers when transitioning away from chemical-based farming. The subsidy will be distributed through a direct benefit transfer system to ensure transparency and timely access to funds.\n\nGovernment representatives stated that the program aligns with national sustainability goals, including reduced soil degradation, lower groundwater pollution, and improved crop resilience against climate change. In addition to financial aid, the ministry plans to organize regional training workshops and provide access to agricultural experts to guide farmers through organic certification and best practices.\n\nFarmers who have already adopted organic methods welcomed the move, noting that high input costs were one of the biggest challenges. Officials estimate that more than two million farmers could benefit from the program within its first two years, marking a significant step toward environmentally responsible farming.",
    date: "2025-10-28",
    author: "AgroConnect Team"
  },
  {
    id: 2,
    title: "Top 5 Crops with High Profit Margin in 2025",
    imageUrl: "https://images.pexels.com/photos/299113/pexels-photo-299113.jpeg",
    summary: "Agricultural experts highlight five crops expected to deliver strong profits in 2025, driven by rising demand, climate resilience, and improved market access for farmers willing to diversify.",
    content: "As agricultural markets evolve and climate patterns shift, experts are encouraging farmers to diversify into high-value crops with strong profit potential in 2025. Research data and market analysis indicate that crops such as millets, medicinal herbs, ginger, turmeric, and quinoa are expected to generate higher returns compared to traditional staples.\n\nMillets continue to gain popularity due to their nutritional value and drought resistance, making them a reliable option for farmers in water-scarce regions. Medicinal herbs like ashwagandha and aloe vera are seeing increased demand from pharmaceutical and wellness industries, offering significantly higher income per acre.\n\nGinger and turmeric remain profitable choices, particularly for farmers with access to processing and export markets. Improved storage facilities and better supply chain infrastructure have helped stabilize prices and reduce post-harvest losses. Meanwhile, quinoa is emerging as a premium crop among health-conscious consumers, providing strong returns for farmers who adopt proper cultivation techniques.\n\nAgricultural economists emphasize the importance of evaluating soil conditions, water availability, and local market access before switching crops. With informed planning and government support, experts believe crop diversification could play a key role in increasing farm incomes in 2025.",
    date: "2025-09-15",
    author: "Farmers Insight"
  },
  {
    id: 3,
    title: "How AI is Revolutionizing Crop Monitoring",
    imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    summary: "Artificial Intelligence is transforming modern agriculture by enabling farmers to monitor crop health, predict yields, and optimize irrigation using drones, satellites, and smart sensors.",
    content: "Artificial Intelligence is rapidly reshaping the agricultural sector, offering farmers advanced tools to monitor crops with greater precision and efficiency. AI-powered drones and satellite imagery are now widely used to detect crop stress, pest infestations, and nutrient deficiencies long before they are visible to the human eye.\n\nBy combining AI algorithms with Internet of Things sensors, farmers can analyze soil moisture levels, weather forecasts, and crop growth patterns in real time. These systems provide data-driven recommendations for irrigation and fertilizer application, helping reduce water usage while maintaining high yields.\n\nOne of the most significant advantages of AI in agriculture is predictive analytics. By identifying potential risks early, farmers can take preventive action and avoid large-scale crop losses. Researchers note that this proactive approach can significantly improve productivity and profitability.\n\nAlthough AI adoption is currently higher among large-scale farms, governments and agri-tech startups are working to make these technologies more accessible to smallholder farmers through subsidies and simplified mobile platforms. Industry analysts predict that AI-driven farming solutions will see widespread adoption in the coming years, marking a major shift toward data-driven agriculture.",
    date: "2025-08-12",
    author: "AgroTech Today"
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