import React, { useState } from 'react'
import { categories,types,facilities } from '../Data'
import Navbar from '../Components/Navbar'
const Createlistings = () => {
    const [category,setCategory]=useState('')
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
                            className={`category flex flex-col justify-center items-center w-[110px] h-[90px] border border-solid border-gray-600 cursor-pointer hover:bg-gray-200 duration-150 ${category===item.label ? 'text-red-500 bg-gray-100':''}  group` }
                            key={index} 
                            onClick={() => setCategory(item.label)}
                          >
                            <div className="category_icon text-[30px] text-black group-hover:text-red-500 duration-150">
                              {item.icon}
                            </div>
                            <p className='text-black text-center font-bold group-hover:text-red-500 duration-150'>
                              {item.label}
                            </p>
                          </div>
                          
                        ))
                    }

                </div>
                </div>

            </form>

        </div>
    </div>
  )
}

export default Createlistings