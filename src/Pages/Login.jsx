import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const  notify=()=>{
        toast.success('Registration successful', {
            position: 'top-center',
        });
    }
  return (
    <div>
         <Toaster position="top-center" />
         <button onClick={notify}>Click me</button>
        
    </div>
  )
}

export default Login