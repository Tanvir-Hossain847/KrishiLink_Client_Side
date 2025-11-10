import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleCards from '../Components/SingleCards';
import { FaSearch } from 'react-icons/fa';
import Error from '../Components/Error';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../Components/Spinner';

const AllProducts = () => {

    const data = useLoaderData()
    const [searchData, setSearchData] = useState('')
    const {loading} = use(AuthContext)
    const [searchLoading,  setSearchLoading] = useState(false)

    const filteredData = data.filter(product => product.name.toLowerCase().includes(searchData.toLowerCase()))
    
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
            <div className="pt-10 flex w-11/12 mx-auto items-center justify-between">
                <h1 className='font-bold text-4xl primary text-emerald-600'>All Produce Section</h1>
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
        {
            searchLoading ? <Spinner></Spinner> :
        <div className="w-11/12 mx-auto space-y-6 py-6">
            <h1 className='font-bold text-xl'>Total {filteredData.length} Produce Found</h1>
        <div >
            {
                loading ? <Spinner></Spinner> :
                filteredData.length > 0 ?
                <div className="grid grid-cols-3 gap-5 pb-10 mx-auto">
                    {
                filteredData.map(product => <SingleCards key={product._id} product={product}></SingleCards>)
                    }
                </div> : <Error></Error>
            }
        </div>
        </div>
        }
        </div>
    );
};

export default AllProducts;








