import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ToastContext } from "../context/TaosterContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHiddenConfirmPassword, setIsHiddenConfirmPassword] = useState(true);
  const navigate = useNavigate();
  const { signUpToast } = useContext(ToastContext);

  const handleSignUp = async (e) => {
    e.preventDefault();    
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try{
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/signin')
      signUpToast();
    }catch(error){
      alert(error.message);
    }
  };

  const handlePasswordType = () => {
    setIsHiddenPassword(prev => !prev)
  }

  const handleConfirmPasswordType = () => {
    setIsHiddenConfirmPassword(prev => !prev)
  }

  return (
    <div className='bg-gray-100 w-full h-[100vh] items-center flex justify-center '>
      <div className='bg-white p-12 flex flex-col rounded-2xl shadow-xl min-w-sm'>

        <h3 className='text-2xl self-center mb-3'>LUNA</h3>
        <h3 className='text-2xl text-primary font-semibold my-2'>Sign Up</h3>
        <p className='text-primary text-sm'>Hello! let's join with us</p>

        <form onSubmit={handleSignUp} className="flex flex-col gap-2 my-5">
          <input 
            type="email" 
            placeholder='Email' 
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}}
            className='border placeholder:text-primary/30 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
            required
          />
          <div className="flex items-center relative">
            <input 
              type={isHiddenPassword ? 'password' : 'text'}
              placeholder='Password' 
              value={password}
              onChange={(e)=> {setPassword(e.target.value)}}
              className='border w-full placeholder:text-primary/30 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
              required
            />
            <p 
              className="absolute right-4 cursor-pointer"
              onClick={handlePasswordType}
            >
              {!isHiddenPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </p>
          </div>
          <div className="flex items-center relative">
            <input 
              type={isHiddenConfirmPassword ? 'password' : 'text'}
              placeholder='Confirm Password' 
              value={confirmPassword}
              onChange={(e)=> {setConfirmPassword(e.target.value)}}
              className='border w-full placeholder:text-primary/30 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
              required
            />
            <p 
              className="absolute right-4 cursor-pointer"
              onClick={handleConfirmPasswordType}
            >
              {!isHiddenConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </p>
          </div>
          <button
            type="submit"
            className='rounded-lg p-3 text-white font-semibold bg-sky-700 hover:bg-sky-800 transition duration-300 cursor-pointer'
          >
            SIGN UP
          </button>
        </form>

        <div className="text-sm mt-5 text-primary/70 flex gap-2">
          <p>You already have an account?</p>
          <Link to='/signin' className="hover:scale-105 duration-300">Sign in</Link>
        </div>
        
      </div>
    </div>
  )
}

export default SignUp