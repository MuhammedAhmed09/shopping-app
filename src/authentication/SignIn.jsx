import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import { useContext, useState } from "react";
import { ToastContext } from "../context/TaosterContext";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { signInToast } = useContext(ToastContext)
  
    const handleSignIn = async (e) => {
      e.preventDefault();
      
      try{
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
        signInToast();
      }catch(error){
        alert(error.message);
      }
    };

  return (
    <div className='bg-gray-100 w-full h-[100vh] items-center flex justify-center '>
      <div className='bg-white p-12 flex flex-col rounded-2xl shadow-xl min-w-sm'>
        <h3 className='text-2xl self-center mb-3'>LUNA</h3>
        <h3 className='text-2xl font-semibold my-2 text-primary'>Welcome <br /> Back</h3>
        <p className='text-primary text-sm'>
          Hey! Good to see you again
        </p>

        <form onSubmit={handleSignIn} className="flex flex-col gap-2 my-5">
          <input 
            type="email" 
            placeholder='Email' 
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}}
            className='border placeholder:text-primary/30 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
            required
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
            className='border placeholder:text-primary/30 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
            required
          />
          <Link to='/forgotpassword' className="text-end text-sm text-primary/90 hover:scale-105 duration-300">Forgot Password?</Link>
          <button
            type="submit"
            className='rounded-lg p-3 text-white font-semibold bg-sky-700 hover:bg-sky-800 transition duration-300 cursor-pointer'
          >
            SIGN IN
          </button>
        </form>

        <div className="text-sm mt-5 text-primary/70 flex gap-2">
          <p>Don't have an account?</p>
          <Link to='/signup' className="hover:scale-105 duration-300">Sign up</Link>
        </div>
        
      </div>
    </div>
  )
}

export default SignIn