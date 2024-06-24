import React, { useState, useEffect } from 'react';
import { categories } from '../Data';
import Loader from '../Components/Loader';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setListings } from '../Store/Slice';
import { BiArrowBack } from 'react-icons/bi';
import {
    ArrowForwardIos,
    ArrowBackIosNew,
    Favorite,
  } from "@mui/icons-material";
const Listing = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [categoryNotFound, setCategoryNotFound] = useState(false);
    const[currentIndex,setCurrentIndex]=useState(0);
    const goToPrevSlide=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex-1+listings.listingPhotoPaths.length)%listings.listingPhotoPaths.length)
    }
    const goToNextSlide=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex+1)%listings.listingPhotoPaths.length)
    }
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
                            listings.map((item, index) => {
                                const [currentIndex, setCurrentIndex] = useState(0);

                                const goToPrevSlide = () => {
                                    setCurrentIndex((prevIndex) => (prevIndex - 1 + item.listingPhotoPaths.length) % item.listingPhotoPaths.length);
                                }

                                const goToNextSlide = () => {
                                    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.listingPhotoPaths.length);
                                }

                                return (
                                    <div className='relative' key={index}>
                                        <div className='slide-container overflow-hidden'>
                                            <div className='slider flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                                {
                                                    item.listingPhotoPaths.map((photoPath, photoIndex) => (
                                                        <div className='min-w-full h-full' key={photoIndex}>
                                                            <img src={`http://localhost:8000/${photoPath}`} className='w-full h-full object-cover rounded-[15px]' alt={`${item.creator}`} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <button onClick={goToPrevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2">
                                                <ArrowBackIosNew />
                                            </button>
                                            <button onClick={goToNextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2">
                                                <ArrowForwardIos />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {categoryNotFound && <div>No listings found for selected category.</div>}
                </div>
            </div>
        </div>
    );
};

export default Listing;
