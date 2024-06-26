import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { facilities } from '../Data';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
const ListingsCard = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/listings/${id}`);
            const data = response.data.listing;
            console.log("Fetched data:", data);
            setListing(data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    useEffect(() => {
        console.log("Updated listing state:", listing);
    }, [listing]);

    return (
      <div className=''>

      <Navbar/>
        <div className='listing-details p-12 mt-[20px] pt-[40px] mx-auto'>
            {listing ? (
              
                <div>
                  <div className='title flex justify-between items-center sm:flex-col sm:items-start sm:gap-[15px]'>
                  <h1 className=' text-[36px] font-semibold'>{listing.title}</h1>
                  </div>
                  <div className="photos flex flex-wrap  gap-3 mt-[12px]">
                    {
                        listing.listingPhotoPaths.map((item)=>(
                            <img src={`http://localhost:8000/${item}`} className='max-w-[290px] '/>
                        ))
                    }


                    </div>
                    <h2 className='text-[20px] font-semibold mt-4'>
                        {listing.type} in {listing.city},{listing.province},{" "}{listing.country}
                    </h2>
                    <p className='text-[18px] font-normal mt-4'>
                    {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
                    {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
                    </p>
                    <hr className='mt-4 mb-4'/>
                    <div className='profile'>
                        <h3 className='text-[18px] font-medium'>Hosted by {listing.creator}</h3>

                        </div>
                        <hr className='mt-4 mb-4'/>

                        <h3 className='text-[18px] font-medium'>Description</h3>
                        <p className='mt-4 max-w-[800px]'>{listing.description}</p>
                        <hr className='mt-4 mb-4'/>
                        <h3 className='text-[18px] font-normal'>{listing.highlight}</h3>
                        <p className='mt-4 max-w-[800px]'>{listing.highlight.Desc}</p>
                        <hr className='mt-4 mb-4'/>
                    <div className='booking flex justify-between'>
                        <div>
                            <h2 className='text-[22px] font-medium'>What this place offers?</h2>
                            <div className='amenties grid grid-cols-2 max-w-[700px]'>
                                {listing.amenities[0].split(",").map((item,index)=>(
                                    <div className='facility flex items-center gap-5 text-[18px] font-semibold mb-[20px] m-4' key={index}>
                                        <div className='facility-icon text-[30px]'>
                                            {
                                                facilities.find((facility)=>facility.name===item)?.icon
                                            }
                                        </div>
                                        <p>{item}</p>
                                    </div>
                                ))}

                            </div>
                            </div>
                                <div>
                                    <h2 className='text-[22px] font-medium'>How long do you want to stay?</h2>
                                    <div className='date-range-caledar'>
                                    </div>
                                    </div>
                    </div>
                    {/* <p>{listing.description}</p>
                    <p><strong>Category:</strong> {listing.category}</p>
                    <p><strong>Type:</strong> {listing.type}</p>
                    <p><strong>Address:</strong> {listing.streetAddress}, {listing.city}, {listing.province}, {listing.country}</p>
                    <p><strong>Creator:</strong> {listing.creator}</p>
                    <p><strong>Guests:</strong> {listing.guestCount}</p>
                    <p><strong>Bedrooms:</strong> {listing.bedroomCount}</p>
                    <p><strong>Beds:</strong> {listing.bedCount}</p>
                    <p><strong>Bathrooms:</strong> {listing.bathroomCount}</p>
                    <p><strong>Price:</strong> ${listing.price}</p>
                    <p><strong>Amenities:</strong> {listing.amenities.join(', ')}</p> */}
                    <div>
                        <strong>Photos:</strong>
                        {listing.listingPhotoPaths.map((path, index) => (
                            <img key={index} src={path} alt={`Listing Photo ${index + 1}`} />
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </div>
    );
}


export default ListingsCard;
