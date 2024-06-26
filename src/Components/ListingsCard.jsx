import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <div className='listing-details md:pt-[40px] md:pr-[130px] md:pb-[120px] pt-[40px] pr-[20px] pb-[120px]'>
            {listing ? (
              
                <div>
                  <div className='title flex justify-between items-center sm:flex-col sm:items-start sm:gap-[15px]'>
                  <h1 className='sm:text-[26px] text-[26px]'>{listing.title}</h1>
                  </div>
                  
                    <p>{listing.description}</p>
                    <p><strong>Category:</strong> {listing.category}</p>
                    <p><strong>Type:</strong> {listing.type}</p>
                    <p><strong>Address:</strong> {listing.streetAddress}, {listing.city}, {listing.province}, {listing.country}</p>
                    <p><strong>Creator:</strong> {listing.creator}</p>
                    <p><strong>Guests:</strong> {listing.guestCount}</p>
                    <p><strong>Bedrooms:</strong> {listing.bedroomCount}</p>
                    <p><strong>Beds:</strong> {listing.bedCount}</p>
                    <p><strong>Bathrooms:</strong> {listing.bathroomCount}</p>
                    <p><strong>Price:</strong> ${listing.price}</p>
                    <p><strong>Amenities:</strong> {listing.amenities.join(', ')}</p>
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
    );
}

export default ListingsCard;
