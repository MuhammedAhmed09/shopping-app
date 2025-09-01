import { Link } from "react-router-dom"


const SignIn = () => {
  return (
    <div className='bg-gray-100 w-full h-[100vh] items-center flex justify-center '>
      <div className='bg-white p-12 flex flex-col rounded-2xl shadow-xl min-w-sm'>
        <h3 className='text-2xl self-center mb-3'>LUNA</h3>
        <h3 className='text-2xl font-semibold my-2 text-primary'>Welcome <br /> Back</h3>
        <p className='text-primary text-sm'>
          Hey! Good to see you again
        </p>

        <div className="flex flex-col gap-2 my-5">
          <input 
            type="email" 
            placeholder='Email' 
            className='border placeholder:text-primary/30 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
          />
          <input 
            type="password" 
            placeholder='Password' 
            className='border placeholder:text-primary/30 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
          />
          <Link to='/forgotpassword' className="text-end text-sm text-primary/90 hover:scale-105 duration-300">Forgot Password?</Link>
        </div>

        <button
          className='rounded-lg p-3 text-white font-semibold bg-sky-700 hover:bg-sky-800 transition duration-300 cursor-pointer'
        >
          SIGN IN
        </button>

        <div className="text-sm mt-5 text-primary/70 flex gap-2">
          <p>Don't have an account?</p>
          <Link to='/signup' className="hover:scale-105 duration-300">Sign up</Link>
        </div>
        
      </div>
    </div>
  )
}

export default SignIn