import React, { useState } from 'react';
import { categories } from '../Data';

const Listing = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    console.log(categories);

    const categoryContainerStyle = {
        padding: '50px 60px',
      
        display: 'flex',
        flexWrap: 'wrap',
       
        justifyContent: 'center',
        gap: '60px',
    };

    const categoryItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
    };

    return (
        <div className='max-w-[1200px]'>

       
        <div style={categoryContainerStyle}>
            {categories.map((item, index) => (
                <div className='category1' style={categoryItemStyle} key={index}>
                    <div className='category_icons' style={{ color: 'black', fontSize: '30px' }}>
                        {item.icon}
                    </div>
                    <p className='category_label' style={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Listing;
