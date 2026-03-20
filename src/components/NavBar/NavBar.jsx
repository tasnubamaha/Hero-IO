import React from 'react';
import logo from '../../assets/logo.png'
import github from '../../assets/Vector.png'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const links = (
        <>
            <NavLink to="/" className={({ isActive }) =>
                isActive
                    ? "text-purple-600 font-bold"
                    : "text-gray-700 hover:text-[#6F41BE]"
            }>Home</NavLink>

            <NavLink to="/apps" className={({ isActive }) =>
                isActive
                    ? "text-purple-600 font-bold"
                    : "text-gray-700 hover:text-[#6F41BE]"
            }>Apps</NavLink>

            <NavLink to="/installation" className={({ isActive }) =>
                isActive
                    ? "text-purple-600 font-bold"
                    : "text-gray-700 hover:text-[#6F41BE]"
            }>Installation</NavLink>
        </>
    );

    return (
        <div className="navbar bg-white shadow-sm px-4 md:px-8">

           
            <div className="navbar-start">

               
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52">
                        {links}
                    </ul>
                </div>

              
                <Link to="/" className="flex items-center gap-2">
                    <img className='w-10 h-10' src={logo} alt="logo" />
                    <h2 className='text-[#6F41BE] font-bold text-lg'>HERO.IO</h2>
                </Link>
            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {links}
                </ul>
            </div>

           
            <div className="navbar-end">

                <a
                    href='https://github.com/tasnubamaha'
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-[#6F41BE] text-white border-none flex items-center gap-2"
                >
                    <img className="w-4" src={github} alt="" />
                    <span className="hidden sm:inline">Contribution</span>
                </a>

            </div>
        </div>
    );
};

export default NavBar;