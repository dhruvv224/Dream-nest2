import React, { useState, useEffect } from 'react';
import { categories } from '../Data';
import Loader from '../Components/Loader';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setListings } from '../Store/Slice';
const Listing = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [categoryNotFound, setCategoryNotFound] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleCategory = (category) => {
        setSelectedCategory(category);
    };

    const getFeedListings = async () => {
        try {
            const response = await axios.get(selectedCategory === 'All'
                ? 'http://localhost:8000/api/listings'
                : `http://localhost:8000/api/listings/${selectedCategory}`);
            const data = response.data;
            const data2 = data.listings;
            console.log("Fetched Listings:",data2);
            dispatch(setListings({ listings:data2 })); // Ensure this matches the reducer's expected structure

            setCategoryNotFound(data2.length === 0);
        } catch (error) {
            console.error(error);
        }
    };

    const listings = useSelector((state) => state.user.listings);
    console.log("Listings from Redux store:", listings);

    useEffect(() => {
        getFeedListings();
    }, [selectedCategory]);

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
                        <div
                            className={`category1 ${selectedCategory === item.label ? 'text-red-600' : 'text-black'} hover:text-red-600 duration-200 text-black text-[30px] md:text-[30px]`}
                            style={categoryItemStyle}
                            key={index}
                            onClick={() => handleCategory(item.label)}
                        >
                            <div className='category_icons'>
                                {item.icon}
                            </div>
                            <p className='category_label font-bold text-[20px]'>
                                {item.label}
                            </p>
                        </div>
                    ))}
                    <div>
                        {isLoading ? <Loader /> :
                            listings.map((item, index) => (
                                <div className='' key={index}>
                                    <div className='photo-galary'>
                                        {
                                            item.listingPhotoPaths.map((photoPath,photoIndex)=>(
                                                <div className='photo-galary'>
                                        <img src={`http://localhost:8000/${photoPath.listingPhotoPaths}`} className='rounded-[15px]' alt={`${item.creator}`}/>

                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {categoryNotFound && <div>No listings found for selected category.</div>}
                </div>
            </div>
        </div>
    );
};

export default Listing;
