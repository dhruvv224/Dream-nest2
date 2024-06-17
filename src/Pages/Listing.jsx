import React, { useState } from 'react';
import { categories } from '../Data';
import Loader from '../Components/Loader';

const Listing = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    console.log(categories);
    const[isloading,setisLoading]=useState(true)

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
const handleCategory=(category)=>{
    setSelectedCategory(category)

}
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
                       

            <div className='max-w-[1200px]' style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={categoryContainerStyle}>
              
                    {categories.map((item, index) => (
                        <div className={`category1 ${selectedCategory === item.label ? 'text-red-600' : 'text-black'} hover:text-red-600 duration-200 text-black text-[30px]`} style={categoryItemStyle} key={index} onClick={()=>handleCategory(item.label)}>
                        <div className='category_icons ' >
                                {item.icon}
                            </div>
                            <p className='category_label font-bold text-[20px]'>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center '>
            {
                        isloading &&
                        <Loader/>
                    }
            </div>
                  
        </div>
    );
};

export default Listing;
