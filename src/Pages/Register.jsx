import React, { use, useState } from 'react';

import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const Registration = () => {
     const {createUser, setUser, signInWithGoogle, updateUserProfile} = use(AuthContext);
     const [nameError, setNameError] = useState('');
     const [success, setSuccess] = useState(false);
     const [error, setError] = useState('');
  const [showPass, setShoePass] = useState(false)
const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const terms = e.target.terms.checked
        //console.log(email, password);

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]).{6,}$/;

         if(!passwordPattern.test(password)){
          setError('Passowerd must be contain at least 6 characters long, include one uppercase, one lowercase and special character')
          //toast.error('Passowerd must be contain at least 6 characters long, include one uppercase, one lowercase and special character')
          return
         }

        if(name.length < 5){
            setNameError('Name Should be more then 5 character');
            return;
        }
        else{
            setNameError('')
        };
        
        setError(null);
         setSuccess(false);

         if(!terms){
          //toast.error('Please accept our terms and condition.');
          return;
         }

        createUser(email, password, terms)
        .then(result =>{
          const user = result.user;
          setSuccess(true)
          e.target.reset()
            //console.log(result.user);
             return updateUserProfile()
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          setSuccess(true);
          setError('');
          e.target.reset();
          //toast.success("Sign up successfull")
           navigate(from, {replace:true});
        });
      })
         .catch((error) => {
            console.log(error);
            setError(error.message);
            setSuccess(false)
          });
    }

    const handlePasswordShow = e =>{
      e.preventDefault();
      setShoePass(!showPass)
    }
        const handleGoogleSignIn = () =>{
         signInWithGoogle()
         .then(() => {
          //toast.success("Sign up successfull")
            //console.log(result.user);
            navigate(from, {replace:true})
            
         })
         .catch(err => {
            console.log(err);
            //toast.error(err.message)
         })
    }
    
   
    return (
      <div className='py-15'>
       <div><title>KrishiLink Register</title></div>
        <div className="hero base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-emerald-700">Registration now!</h1>
      <p className="py-6 text-emerald-700">
        Welcome ! Sign up to keep your pets warm, safe, and stylish this winter.
      </p>
    </div>
    <div className="card bg-base-100 border-y-4 border-emerald-700 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className='' onSubmit={handleSubmit}>
        <fieldset className="fieldset space-y-1">
             <label className="label text-emerald-700">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <label className="label text-emerald-700">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

          <label className="label text-emerald-700">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label text-emerald-700">Password</label>
         <div className='relative'>
          <input name='password' type={showPass ? 'text' : "password"} className="input" placeholder="Password" />
          <button onClick={handlePasswordShow} className='text-xl text-emerald-700 top-2 text-center absolute z-10 right-5'>{showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
          </div>
         <div>
            <label className="label text-emerald-700">
         <input name='terms' type="checkbox" className="checkbox" />
        Accept our terms and condition
        </label>
           </div>

          {
            success && <p className='text-green-500'>Account Crteated Sussessfully</p>
          }
           {
          error && <p className='text-red-500'>{error.message}! Provide a valid email or passowerd</p>  
        }
          <button className="btn bg-emerald-500 text-white">Sign-up</button>
                 <button type='button' onClick={handleGoogleSignIn} className="btn bg-emerald-700 text-white">
                   <FaGoogle></FaGoogle>
                Sign-up with Google
                </button>                                                    
          <p className='text-emerald-700'>Already have an account ? Please <Link className='text-amber-700' to='/login'>Sign in</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
    </div>
      </div>
    );
};

export default Registration;