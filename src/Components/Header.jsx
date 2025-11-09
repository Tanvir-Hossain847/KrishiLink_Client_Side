import React, { useContext } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    //console.log(user);
    
    const handleSignout = () =>{
        signOutUser()
        .then()
        .catch()
    }
    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/products'>My Produdcts</NavLink></li>
    <li><NavLink to='/bids'>My Bids</NavLink></li>
    <li><NavLink to='/profile'>My Profile</NavLink></li>
    </>
    return (
        <div className="lg:px-20 mx-auto navbar shadow-sm shadow-emerald-700">
  <div className="navbar-start">
    <div className="dropdown">
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
      <ul
        tabIndex={0}
        className="menu primary menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <div className="flex items-center gap-3">
      <div className="">
        <img className='w-10' src="https://i.ibb.co.com/n27cQDZ/Untitled-design-1-removebg-preview.png" alt="" />
      </div>
    <Link to='/' className='font-bold text-emerald-800 text-2xl'>
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
        <Link to={'/profile'} className="bg-emerald-700 rounded-4xl p-1"><img src={user?.photoURL || 'https://images.unsplash.com/photo-1747592771443-e15f155b1faf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'} className='lg:w-12 lg:h-12 w-10 h-10 rounded-full' title={user.displayName} /></Link>
        <button onClick={handleSignout} className='btn bg-emerald-800 text-white ml-2'>Log Out</button>
        </>) : (<>
         <NavLink className='btn border-none bg-emerald-800 !text-white mr-1 ' to='/register'>Register</NavLink>
       <NavLink className='btn bg-emerald-800 border-none mr-1 !text-white' to='/login'>Login</NavLink>
        </>)

    }
  </div>
</div>
    );
};

export default Header;