import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    // const  notify=()=>{
    //     toast.success('Registration successful', {
    //         position: 'top-center',
    //     });
    // }
    const loginStyle={
      backgroundImage: "url('/assets/login.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div className='login-container' style={loginStyle}>
        
        
    </div>
  )
}

export default Login