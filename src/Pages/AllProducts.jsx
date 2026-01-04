import React, { useEffect, useState } from 'react';
import SingleCards from '../Components/SingleCards';
import { FaSearch } from 'react-icons/fa';
import Error from '../Components/Error';
import Spinner from '../Components/Spinner';

const AllProducts = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchData, setSearchData] = useState('')
    const [searchLoading,  setSearchLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [sortOrder, setSortOrder] = useState('default')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch('https://krishi-link-server-side.vercel.app/myproducts')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
    },[])

    // Get unique categories from data (filter out empty/undefined)
    const categories = ['All', ...new Set(data.map(product => product.type).filter(type => type))];

    // Filter by search and category
    let filteredData = data.filter(product => 
        product.name.toLowerCase().includes(searchData.toLowerCase()) &&
        (selectedCategory === 'All' || product.type === selectedCategory)
    );

    // Sort by price
    if (sortOrder === 'low-to-high') {
        filteredData = [...filteredData].sort((a, b) => a.pricePerUnit - b.pricePerUnit);
    } else if (sortOrder === 'high-to-low') {
        filteredData = [...filteredData].sort((a, b) => b.pricePerUnit - a.pricePerUnit);
    }

    // Calculate items per page to fit all products in exactly 2 pages
    const itemsPerPage = Math.ceil(filteredData.length / 2) || 1;
    
    // Pagination - always 2 pages if there are products
    const totalPages = filteredData.length > 0 ? 2 : 0;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchData, selectedCategory, sortOrder]);
    
    const handleInput = (e) => {
        const value = e.target.value
        setSearchData(value)
        setSearchLoading(true)
    }

    setTimeout(() =>{
        setSearchLoading(false)
    }, 400)

    return (
        <div className="">
            <div className="pt-10 md:flex space-y-2 w-11/12 mx-auto items-center justify-between">
                <h1 className='font-bold sm:text-4xl text-3xl primary text-emerald-600'>All Produce Section</h1>
                <div className="flex items-center gap-2">
                    <FaSearch className='text-2xl text-emerald-600'></FaSearch>
                <input 
                type="text" 
                placeholder='Search Crops By Name'
                value={searchData} 
                onChange ={handleInput}
                className='w-70 px-5 text-gray-500 py-2 bg-base-200 border-2 border-emerald-600 rounded-2xl focus:w-90 transition-all duration-300'
                />
                </div>
            </div>

            {/* Category and Sort Section */}
            <div className="w-11/12 mx-auto py-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-xl font-bold primary transition-all duration-200 ${
                                    selectedCategory === category
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-base-200 text-base-content hover:bg-emerald-100'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2">
                        <span className="font-bold primary text-base-content">Sort by:</span>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="px-4 py-2 border-2 border-emerald-600 rounded-xl font-bold primary text-base-content bg-base-100 focus:outline-none"
                        >
                            <option value="default">Default</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

        {
            loading ? <Spinner></Spinner> :
        <div className="w-11/12 mx-auto space-y-6 pb-10">
            <h1 className='font-bold text-xl text-base-content'>Total {filteredData.length} Produce Found</h1>
        <div >
            {
                searchLoading ? <Spinner></Spinner> :
                filteredData.length > 0 ?
                <>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 pb-10 mx-auto">
                    {
                paginatedData.map(product => <SingleCards key={product._id} product={product}></SingleCards>)
                    }
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 pb-10">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-xl font-bold primary transition-all duration-200 ${
                                currentPage === 1
                                    ? 'bg-base-300 text-base-content/40 cursor-not-allowed'
                                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                            }`}
                        >
                            Previous
                        </button>
                        
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`w-10 h-10 rounded-xl font-bold primary transition-all duration-200 ${
                                    currentPage === index + 1
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-base-200 text-base-content hover:bg-emerald-100'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-xl font-bold primary transition-all duration-200 ${
                                currentPage === totalPages
                                    ? 'bg-base-300 text-base-content/40 cursor-not-allowed'
                                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}
                </>
                : <Error></Error>
            }
        </div>
        </div>
        }
        </div>
    );
};

export default AllProducts;








