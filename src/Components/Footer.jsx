import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_left max-w-[400px]'>
            <Link to='/'><img src='/assets/logo.png' alt='logo'/>
            </Link>
            
        </div>

    </div>
  )
}

export default Footer