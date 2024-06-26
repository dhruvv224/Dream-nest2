import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
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
                    <hr/>
                    <div className='profile'>
                        <h3 className='text-[18px] font-normal'>Hosted by {listing.creator}</h3>

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
