import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    
    const handleSignout = () =>{
        signOutUser()
        .then()
        .catch()
    }
    const links = <>
    
    {
      user ? <>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/'>Home</NavLink></li>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/allcrops'>All Products</NavLink></li>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/cart'>My Cart</NavLink></li>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/about'>About Us</NavLink></li>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/contact'>Contact Us</NavLink></li>
      </> 
      : 
      <>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/'>Home</NavLink></li>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/allcrops'>All Crops</NavLink></li>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/about'>About Us</NavLink></li>
      <li className='text-emerald-600 hover:scale-105 transition-all duration-100'><NavLink to='/contact'>Contact Us</NavLink></li>
      </>
    }
    </>
    return (
        <div className="lg:px-12 mx-auto navbar shadow-sm shadow-emerald-600">
  <div className="navbar-start">
    <div className="dropdown">
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
      <ul
        tabIndex={0}
        className="menu primary menu-sm dropdown-content bg-white rounded-box z-100 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <div className="flex items-center gap-3">
      <div className="">
        <img className='w-10' src="https://i.ibb.co.com/n27cQDZ/Untitled-design-1-removebg-preview.png" alt="" />
      </div>
    <Link to='/' className='font-bold text-emerald-600 text-2xl'>
    KRISHI<span className='text-yellow-500'>LINK</span>
    </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu primary font-bold menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? 
        (<>
        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full">
              <img 
                src={user?.photoURL || 'https://via.placeholder.com/50'} 
                alt={user?.displayName}
                title={user?.displayName}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-white rounded-xl z-50 mt-3 w-64 p-3 shadow-lg border border-gray-100"
          >
            <li className="p-3 border-b border-gray-100 mb-2">
              <div className="flex flex-col items-start hover:bg-transparent cursor-default">
                <span className="font-bold text-gray-800 text-lg">{user?.displayName}</span>
                <span className="text-sm text-gray-500">{user?.email}</span>
              </div>
            </li>
            <li>
              <Link to="/dashboard/profile" className="text-emerald-600 hover:bg-emerald-50 py-3 text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-emerald-600 hover:bg-emerald-50 py-3 text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li className="mt-2 pt-2 border-t border-gray-100">
              <button onClick={handleSignout} className="text-red-500 hover:bg-red-50 py-3 text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Log Out
              </button>
            </li>
          </ul>
        </div>
        </>) : (<>
         <NavLink className='btn border-none bg-emerald-600 text-white mr-1 ' to='/register'>Register</NavLink>
       <NavLink className='btn bg-emerald-600 border-none mr-1 text-white' to='/login'>Login</NavLink>
        </>)

    }
  </div>
</div>
    );
};

export default Header;