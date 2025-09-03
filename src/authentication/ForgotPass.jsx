import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import { ToastContext } from "../context/TaosterContext";


const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPasswordToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try{
      await sendPasswordResetEmail(auth, email);
      resetPasswordToast();
      navigate('/signin');
      setEmail("");
    }catch(error) {
      alert(error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className='bg-gray-100 w-full h-[100vh] items-center flex justify-center '>
      <div className='bg-white p-12 flex flex-col rounded-2xl shadow-xl min-w-sm'>
        <h3 className='text-2xl self-center mb-3'>LUNA</h3>
        <h3 className='text-2xl font-semibold my-2 text-primary'>Reset <br />Password</h3>
        <p className='text-primary text-sm'>
          Enter your email and we will <br /> send you a link to reset your password.
        </p>

        <form onSubmit={handleReset} className="flex flex-col gap-2 my-5">
          <input 
            type="email" 
            placeholder='Email' 
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}}
            className='border placeholder:text-primary/30 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
            required
          />          
          <button
            type="submit"
            disabled={loading}
            className={`rounded-lg p-3 text-white font-semibold cursor-pointer ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-sky-700 hover:bg-sky-800"
            } transition duration-300`}
          >
            {loading ? "Sending..." : "RESET PASSWORD"}
          </button>
        </form>

        <div className="text-sm mt-5 text-primary/70 flex gap-2">
          <p>Remember your password?</p>
          <Link to="/signin" className="hover:scale-105 duration-300">
            Sign In
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default ForgotPass