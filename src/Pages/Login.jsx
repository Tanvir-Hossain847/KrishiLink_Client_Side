import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";



const Login = () => {
    const {signInUser, signInWithGoogle, loading} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
     const [err, setErr] = useState(null);
     const [showPass, setShowPass] = useState(false);
     const [email, setEmail] = useState('')
     

    //default direct after login
    const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) =>{
    e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
     
      //console.log(email, password);
      setErr(null)
      signInUser(email, password)
      .then(() =>{
        //console.log(result);
        navigate(from, {replace:true})
        //toast.success('Logged in successfully! 🎉');
      })
      .catch(err => {
        //toast.error(err.message);
        setErr(err)
      })
      
  }
   const handleGoogleSignIn = () =>{
         signInWithGoogle()
         .then(result => {
            console.log(result.user);
            navigate(from, {replace:true})
           //toast.success('Logged in successfully! 🎉');
         })
         .catch(err => {
            // toast.error(err.message);
            console.log(err);
            
            
         })
    }

    const handlePasswordShow = e =>{
      e.preventDefault();
      setShowPass(!showPass)
    }

    const handleForgetPassword = (e) =>{
      e.preventDefault();
      navigate('/forgetPassword', {state: { email: email,  from: location.state?.from?.pathname || '/'}})
     
    }

   
    return (
      <div className="">
        <div><title>KrishiLink Log in</title></div>
{
  loading ? (<Loader></Loader>) : (<div className=" lg:py-40 py-20  min-h-screen">
  <div className=" flex-col flex justify-center items-center ">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-emerald-700">Login now!</h1>
      <p className="py-6 text-emerald-700">
       Welcome back! Log in to Continue.
      </p>
    </div>
    <div className="border-y-4 border-emerald-700 card w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>

        <fieldset className="fieldset space-y-2">
          <label  className="label text-emerald-700">Email</label>
          <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}  name='email' 
          type="email" 
          className="input" 
          placeholder="Email" />
          <label className="label text-emerald-700">Password</label>
          <div className='relative'>
                    <input name='password' type={showPass ? 'text' : "password"} className="input" placeholder="Password" />
                    <button type="button" onClick={handlePasswordShow} className='text-xl text-emerald-700 top-2 text-center absolute z-10 right-5'>{showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }</button>
                    </div>
          <button onClick={handleForgetPassword}><a className="button link-hover text-left text-emerald-700">Forgot password?</a></button>

          {
            err && <p className=" text-emerald-700">Please provide a valid Email or Password !</p>
          }
          <button className="btn bg-emerald-500 text-white">Login</button>
        <button type='button' onClick={handleGoogleSignIn} className="btn bg-emerald-700 text-white">
          <FaGoogle></FaGoogle>
       Login with Google
       </button>
        </fieldset>
        </form>
    
<p className="text-emerald-700">Don't have an account? please <Link className='text-amber-700' to='/register'>Sign up</Link></p>
      </div>
    </div>
  </div>
</div>

  )
}
       
      </div>
    );
};

export default Login;