import React from 'react';
import { ReactTyped } from 'react-typed';

const Slide = () => {
    const slideStyle = {
        backgroundImage: "url('/assets/slide.jpg')",
        height: '80vh',
        width: '100vw',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center',
        color: '#ffffff', // Example text color
    };

    return (
        <div className='slide' style={slideStyle}>
            <h1 className='text-[40px] font-bold pt-10 pr-5 text-center'>
                Welcome Home! Anywhere you roam <br /> 
                <ReactTyped className='pl-3' strings={['Stay in the moment.', 'Make your memories.']} typeSpeed={100} backSpeed={60} loop/>
             
            </h1>
        </div>
    );
};

export default Slide;
