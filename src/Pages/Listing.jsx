import React, { useState, useEffect } from 'react';
import { categories } from '../Data';
import Loader from '../Components/Loader';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setListings } from '../Store/Slice';
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";

const Listing = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(false);
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
            const data2 = data.listings.map(listing => ({ ...listing, currentIndex: 0 })); // Initialize currentIndex for each listing
            console.log("Fetched Listings:", data2);
            dispatch(setListings({ listings: data2 }));

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

    const goToPrevSlide = (index) => {
        const updatedListings = [...listings];
        updatedListings[index].currentIndex = (listings[index].currentIndex - 1 + listings[index].listingPhotoPaths.length) % listings[index].listingPhotoPaths.length;
        dispatch(setListings({ listings: updatedListings }));
    };

    const goToNextSlide = (index) => {
        const updatedListings = [...listings];
        updatedListings[index].currentIndex = (listings[index].currentIndex + 1) % listings[index].listingPhotoPaths.length;
        dispatch(setListings({ listings: updatedListings }));
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
                    <div className='grid grid-cols-4 gap-4 '>
                    {isLoading ? <Loader /> :
                            listings.map((item, index) => (
                                <div className='relative cursor-pointer p-[10px] hover:border border-solid border-gray-200 rounded-2xl duration-150' key={index}>
                                    <div className='slide-container mb-[10px] mt-[10px] overflow-hidden'>
                                        <div className='slider flex transition-transform duration-500 ease-in-out ' style={{ transform: `translateX(-${item.currentIndex * 300}px)` }}>
                                            {
                                                item.listingPhotoPaths.map((photoPath, photoIndex) => (
                                                    <div className='w-[300px] h-[270px] flex-shrink-0' key={photoIndex}>
                                                        <img src={`http://localhost:8000/${photoPath}`} className='w-full h-full object-cover  ' alt={`${item.creator}`} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <button onClick={() => goToPrevSlide(index)} className="flex items-center justify-center cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 border-none  text-white p-2">
                                            <ArrowBackIosNew />
                                        </button>
                                        <button onClick={() => goToNextSlide(index)} className="flex items-center justify-center cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 border-none  text-white p-2">
                                            <ArrowForwardIos />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {categoryNotFound && <div>No results found for selected category.</div>}
                </div>
            </div>
        </div>
    );
};

export default Listing;
