import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListingsCard = () => {
    const { id } = useParams();
    const [listing, setListing] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/listings/${id}`);
            const data = response.data.listing;
            console.log("data is", data);
            console.log(response);
            setListing(data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div>
            <div>
                {listing && listing.length > 0 ? (
                    listing.map((item, index) => (
                        <div className='' key={index}>
                            <div className='description'>
                                {item.description}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No listings available.</p>
                )}
                hello
            </div>
        </div>
    );
}

export default ListingsCard;
