import React from 'react';
import logo from '../assets/image/logo.png'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = () => {
     const handleResume = () =>{
            Swal.fire({
                title: "Sorry!",
                text: "My Resume is not available yet!",
                icon: "error"
              });
        }
    const navItem = <>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><a href="#skills">My Skills</a></li>
       <li><a href="#projects">My Projects</a></li>
       <li><a href="#contact">Contact</a></li>
         
        
    </>
    return (
        <div className="navbar bg-gradient-to-r from-sky-300 to-indigo-400 fixed top-0  z-20 px-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu flex menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-semibold">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div  className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={logo}/>
                        </div>
                    </div>
                </div>
                <a className="btn btn-ghost text-xl text-black">ANAM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex space-x-3 text-black font-semibold">
                    {
                        navItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
  <a
    onClick={handleResume}
    className="btn border-2 border-red-700 text-sm sm:text-base md:text-lg px-3 sm:px-5 md:px-6 py-2 md:py-2"
  >
    Download Resume
  </a>
</div>

        </div>
    );
};

export default Navbar;