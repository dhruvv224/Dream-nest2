import React, { useState, useEffect } from 'react';
import { categories } from '../Data';
import Loader from '../Components/Loader';
import axios from 'axios';
import { setListings } from '../Store/Slice';
import { useDispatch } from 'react-redux';
const Listing = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const dispatch=useDispatch()
    // Simulating data fetching or loading time
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleCategory = (category) => {
        setSelectedCategory(category);
    };
const getFeedListings=async()=>
{
        try {
            console.log(selectedCategory)
            const response = await axios.get(selectedCategory === "All" 
                ? "http://localhost:8000/api/listings" 
                : `http://localhost:8000/api/listings/${selectedCategory}`);
            const data=response.data
            console.log(data)
            console.log("founded listings are",data.listings)   
            dispatch(setListings({data}))
        } catch (error) {
            console.log(error)

            
        }

}
    useEffect(()=>{
        getFeedListings();
    },[selectedCategory])

    const categoryContainerStyle = {
        padding: '50px 60px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '55px',
    };

    const categoryItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
           
                <div className="max-w-[1200px] w-full mx-auto">
                    <div style={categoryContainerStyle}>
                        {categories.map((item, index) => (
                            <div className={`category1 ${selectedCategory === item.label ? 'text-red-600' : 'text-black'} hover:text-red-600 duration-200 text-black text-[30px]`} style={categoryItemStyle} key={index} onClick={() => handleCategory(item.label)}>
                                <div className='category_icons'>
                                    {item.icon}
                                </div>
                                <p className='category_label font-bold text-[20px]'>
                                    {item.label}
                                </p>
                            </div>
                        ))}
                        <div>
                        <Loader/>
                        </div>
                    </div>
                </div>
         
        </div>
    );
};

export default Listing;
