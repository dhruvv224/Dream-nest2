import React, { useState } from 'react'
import { categories,types,facilities } from '../Data'
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";

import Navbar from '../Components/Navbar'
const Createlistings = () => {
    // categories
    const [category,setCategory]=useState('')
    const [type,setType]=useState('')
    console.log(types)
    // form locations 
    const[formLocation,setFormLocation]=useState({
        streetAddress:'',
        aptSuite:'',
        city:'',
        province:'',
        country:''
    })
// handle locations logic
    const handleChangeLocation=(e)=>{
        const {name,value}=e.target;
        setFormLocation({
            ...formLocation,
            [name]:value,
        })
    }
    // basic counts
    const[guestCount,setGuestCount]=useState(1);
    const[bedroomCount,setBedroomCount]=useState(1);
    const[bedCount,setBedCount]=useState(1);
    const[bathroomCount,setBathroomCount]=useState(1);
    
// AMENITIES
const [amenities, setAmenities] = useState([]);

    const handlePost=()=>{

    }
  return (
    <div>
        <Navbar/>
        <div className='create-listing bg-gray-100 pt-10 px-16 pb-32'>
            <h1 className='text-[28px] text-blue-800 font-bold'>Publish Your Place</h1>
            <form onSubmit={handlePost}>
                <div className='create-listings_step1 bg-white pt-[30px] pr-[40px] p-6 rounded-[20px] mt-[40px]'>
                <h2 className='text-[24px] text-red-500 font-bold'>Step 1: Tell us about your place</h2>
                <hr />
                <h3 className='mt-[40px] text-[20px] font-medium mb-5 text-blue-500'>Which of these categories best describes your place?</h3>
                <div className='category-list flex justify-center items-center flex-wrap gap-5'>
                    {
                        categories.map((item,index)=>(
                            <div 
                            className={`category flex flex-col justify-center items-center w-[110px] h-[90px] border border-solid border-gray-300 cursor-pointer hover:bg-gray-200 duration-150 ${category===item.label ? 'text-red-500 bg-gray-100 border-red-500 group:':''}  group` }
                            key={index} 
                            onClick={() => setCategory(item.label)}
                          >
                            <div className={`category_icon text-[30px] text-black group-hover:text-red-500 duration-150 ${category===item.label ? 'text-red-500':''}`}>
                              {item.icon}
                            </div>
                            <p className={`text-black text-center font-bold group-hover:text-red-500 duration-150 ${category===item.label ?'text-red-500':''}`}>
                              {item.label}
                            </p>
                          </div>
                          
                        ))
                    }

                </div>
                <h3 className='mt-[40px] text-[20px] font-medium mb-5 text-blue-500'>What type of place will guests have?</h3>
                    <div className='type-list flex flex-col gap-5'>
                        {
                            types.map((item,index)=>(
                                <div key={index} className={`type flex justify-between items-center max-w-[600px] px-2 py-2 border border-gray-100 rounded-[10px] cursor-pointer ${type===item.name ? 'text-red-500 border-red-500 bg-gray-100' :''} hover:bg-gray-00 hover:text-red-500 duration-150 group`} onClick={()=>setType(item.name)}>
                                    <div className={`type_text max-w-[400px]`}>
                    <h4 className='mb-[5px]'>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className={`type_icon text-[30px] hover:text-red-500 duration-150 ${type===item.name ? 'text-red-500':''}`}>{item.icon}</div>
                                </div>
                            ))
                        }
                    </div>
                    
                    <h3 className='mt-[40px] text-[20px] font-medium mb-5 text-blue-500'>Where's your place located?</h3>
                        <div className="full max-w-[700px] mb-6">
                            <div className="location mb-4">
                                <p className='font-bold mb-2'>Street Address</p>
                                <input
                                    type='text'
                                    placeholder='Street Address'
                                    name='streetAddress'
                                    className='border-[1px] border-solid border-gray-300 rounded-[10px] text-[16px] w-full p-2 focus:outline-none focus:border-red-500'
                                    value={formLocation.streetAddress}
                                    onChange={handleChangeLocation}
                                    required
                                />
                            </div>
                        </div>
                        <div className='half grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6'>
                            <div className='location mb-4'>
                                <p className='font-bold mb-2'>Apartment, Suite, etc. (if applicable)</p>
                                <input
                                    type="text"
                                    placeholder="Apt, Suite, etc. (if applicable)"
                                    name="aptSuite"
                                    value={formLocation.aptSuite}
                                    onChange={handleChangeLocation}
                                    className='border-[1px] border-solid border-gray-300 rounded-[10px] text-[16px] w-full p-2 focus:outline-none focus:border-red-500'
                                />
                            </div>
                            <div className='location mb-4'>
                                <p className='font-bold mb-2'>City</p>
                                <input
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={formLocation.city}
                                    onChange={handleChangeLocation}
                                    required
                                    className='border-[1px] border-solid border-gray-300 rounded-[10px] text-[16px] w-full p-2 focus:outline-none focus:border-red-500'
                                />
                            </div>
                        </div>
                        <div className='half grid grid-cols-1 sm:grid-cols-2 gap-5'>
                            <div className="location mb-4">
                                <p className='font-bold mb-2'>Province</p>
                                <input
                                    type="text"
                                    placeholder="Province"
                                    name="province"
                                    value={formLocation.province}
                                    onChange={handleChangeLocation}
                                    required
                                    className='border-[1px] border-solid border-gray-300 rounded-[10px] text-[16px] w-full p-2 focus:outline-none focus:border-red-500'
                                />
                            </div>
                            <div className="location mb-4">
                                <p className='font-bold mb-2'>Country</p>
                                <input
                                    type="text"
                                    placeholder="Country"
                                    name="country"
                                    value={formLocation.country}
                                    onChange={handleChangeLocation}
                                    required
                                    className='border-[1px] border-solid border-gray-300 rounded-[10px] text-[16px] w-full p-2 focus:outline-none focus:border-red-500'
                                />
                            </div>
                        </div>
                        <h3>Share some basics about your place</h3>
                            <div className='basics flex flex-wrap gap-[40px]'>
                                <div className='basic flex items-center gap-[30px] p-[15px] border-solid border-gray-200 rounded-[10px]'>
                                <p className='font-bold'>Guests</p>
                                <div className="basic_count flex items-center gap-2 text-[20px]">
                                    <RemoveCircleOutline onClick={()=>guestCount>1 && setGuestCount(guestCount-1)} className='text-[25px] cursor-pointer hover:text-red-500 duration-150'/>
                                        <p>{guestCount}</p>
                                        <RemoveCircleOutline onClick={()=>guestCount>1 && setGuestCount(guestCount-1)} className='text-[25px] cursor-pointer hover:text-red-500 duration-150'/>

                                    </div>

                                </div>
                                <div className='basic'>
                                    <p>Bedrooms</p>
                                    <div className="basic_count">
                                    <RemoveCircleOutline onClick={()=>bedroomCount>1 && setBedroomCount(bedroomCount-1)} className='text-[25px] cursor-pointer hover:text-red-500 duration-150'/>
                                        <p>{bedroomCount}</p>
                                        <RemoveCircleOutline onClick={()=>bedroomCount>1 && setBedroomCount(bedroomCount-1)} className='text-[25px] cursor-pointer hover:text-red-500 duration-150'/>

                                    </div>

                                </div>
                                <div className='basic'>
                                    <p>Beds</p>
                                    <div className="basic_count">
                                    <RemoveCircleOutline onClick={()=>bedCount>1 && setBedCount(bedCount-1)} className='text-[25px] cursor-pointer hover:text-red-500 duration-150'/>
                                        <p>{bedCount}</p>
                                        <RemoveCircleOutline onClick={()=>bedCount>1 && setBedCount(bedCount-1)} className='text-[25px] cursor-pointer hover:text-red-500 duration-150'/>

                                    </div>

                                </div>
                            </div>
                            <div className='basic'>
                                    <p>Bathrooms</p>
                                    <div className="basic_count">
                                    <RemoveCircleOutline onClick={()=>bathroomCount>1 && setBathroomCount(bathroomCount-1)} className='text-[25px] cursor-pointer hover:text-red-500 duration-150'/>
                                        <p>{bathroomCount}</p>
                                        <RemoveCircleOutline onClick={()=>bedroomCount>1 && setBathroomCount(bathroomCount-1)} className='text-[25px] cursor-pointer hover:text-red-500 duration-150'/>

                                    </div>

                                </div>
                </div>

            </form>

        </div>
    </div>
  )
}

export default Createlistings