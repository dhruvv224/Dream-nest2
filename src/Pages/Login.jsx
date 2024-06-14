import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    // const  notify=()=>{
    //     toast.success('Registration successful', {
    //         position: 'top-center',
    //     });
    // }
    const[email,setEmail]=useState('');
    console.log(email)
    const[password,setPassword]=useState('')
    const loginStyle={
      backgroundImage: "url('/assets/login.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const handleSubmit=()=>{

    }
  return (
    <div className='mx-auto'>
      <Toaster/>
      <div className='login-container flex content-center items-center h-[100vh]' style={loginStyle}>
        <div className='md:max-w-[1200px] max-w-[400px] mx-auto'> 
            <div className='p-8 rounded-3xl bg-black bg-opacity-50'>
            <h2 className="text-white text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="bg-black bg-opacity-50 text-white text-[18px] rounded-lg px-4 py-2 mb-4 block w-full" name='email'  onChange={(e)=>setEmail(e.target.value)} />
            <input type="email" placeholder="Passsword" className="bg-black bg-opacity-50 text-white text-[18px] rounded-lg px-4 py-2 mb-4 block w-full" name='email'  onChange={(e)=>setPassword(e.target.value)} />
            <button className='bg-red-500 hover:bg-red-600 duration-200 text-white text-[18px] rounded-lg px-4 py-2 block w-full'></button>


            </form>

            </div>
        </div>
        
        </div>
      </div>
   
  )
}

export default Login