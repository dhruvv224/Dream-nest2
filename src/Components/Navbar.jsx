import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [search, setSearch] = useState('');
    const { user } = useSelector((state) => state.user);

    const handleSearch = () => {
        alert(search); // Temporary alert for demo purposes, replace with actual search functionality
    };

    return (
        <div className='mx-auto'>
            <div className='navbar flex items-center justify-between md:py-2 md:px-6 relative shadow-2xl'>
                <Link to='/'>
                    <img src='/assets/logo.png' alt='Trip-go' className='w-20 h-auto cursor-pointer' />
                </Link>
                <div className='navbar_search border border-gray-400 rounded-full h-10 flex items-center md:w-1/4 gap-2 px-4 hover:shadow-xl duration-100'>
                    <input
                        type='text'
                        placeholder='Search...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='outline-none w-full'
                    />
                    <CiSearch className='h-6 w-6 cursor-pointer' onClick={handleSearch} />
                </div>
                <div className='navbar_right flex items-center gap-5'>
                    <Link to='/become-a-host' className='ml-2 text-sm md:text-base'>
                        Become A Host
                    </Link>
                    <button
                        className='navbar_right_button flex items-center p-2 md:p-4 m-1 border border-gray-500 rounded-full bg-white cursor-pointer hover:shadow-lg'
                        onClick={() => setDropdownMenu(!dropdownMenu)}
                    >
                        <CiMenuFries className='mr-2 h-6 w-6' />
                        {
                            !user ? (
                                <IoPerson className='h-6 w-6' />
                            ) : (
                                <img src={`http://localhost:8000/${user.profileImagePath}`} alt="Profile" className='rounded-full object-cover w-6 h-6' />
                            )
                        }
                    </button>
                    {dropdownMenu && (
                        <div className='navbar_right_accountmenu absolute bg-white right-0 top-14 flex flex-col w-36 md:w-48 pt-2 border border-gray-300 rounded-xl shadow-lg p-2 z-10 text-center'>
                            {
                                !user ? (
                                    <>
                                        <Link to="/login" className='text-sm md:text-base block py-1 rounded-xl font-semibold hover:bg-gray-100'>
                                            Log In
                                        </Link>
                                        <Link to="/register" className='text-sm md:text-base block py-1 rounded-xl font-semibold hover:bg-gray-100'>
                                            Sign Up
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/profile" className='text-sm md:text-base block py-1 rounded-xl font-semibold hover:bg-gray-100'>
                                            Profile
                                        </Link>
                                        <Link to="/logout" className='text-sm md:text-base block py-1 rounded-xl font-semibold hover:bg-gray-100'>
                                            Log Out
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
