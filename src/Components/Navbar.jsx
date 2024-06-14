import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
    const[dropdownMenu,setDropdownMenu]=useState(false)
    const[search,setSearch]=useState('')
    console.log(search)
    const alert2 =()=>
        {
            alert(search)
        }
  return (
    <div className='mx-auto '>
        <div className='navbar flex md:py-[10px] md:px-[60px] justify-between items-center relative shadow-2xl'>
            <Link to='/'>
            <img src='/assets/logo.png' alt='Trip-go' className='w-[100px] h-full cursor-pointer'/>

            </Link>
            <div className='navbar_search border border-gray-400 rounded-[30px] h-[50px] flex items-center md:w-1/4 gap-10  p-4 hover:shadow-xl duration-100'>
                <input type='text' placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)} className='outline-none w-full border-none'/>
                <CiSearch className='h-[70px] w-[30px] cursor-pointer' onClick={alert2} />
            </div>
            <div className='navbar_right flex items-center gap-5'>
                <Link className='ml-2'>
                Become A Host
                </Link>
                <button className='navbar_right_button md:h-[50px] flex items-center p-3 md:p-4 m-1 border border-gray-500 rounded-[30px] gap-2 bg-white cursor-pointer hover:shadow-lg' onClick={(e)=>setDropdownMenu(!dropdownMenu)}>
                    <CiMenuFries className='mr-2 '/>
                    <IoPerson/>
                </button>
                {
                    dropdownMenu &&(
                        <div className='navbar_right_accountmenu absolute bg-white md:right-[60px] right-[10px] md:top-20 top-[50px] flex flex-col w-[100px] md:w-[150px] pt-2 border-gray-300 rounded-2xl items-center shadow-lg p-2 z-auto text-center'>
                            <Link to="/login" className='text-[18px] rounded-2xl font-semibold w-full   hover:bg-slate-100'>Log In</Link>
                            <Link to="/register" className='text-[18px]  rounded-2xl font-semibold w-full   hover:bg-slate-100'>Sign Up</Link>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar;
