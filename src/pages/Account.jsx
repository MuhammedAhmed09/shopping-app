import React from 'react'

const Account = () => {
  return (
    <div className='bg-gray-100 w-full h-[100vh] items-center flex justify-center '>
      <div className='bg-white p-12 flex flex-col rounded-2xl shadow-xl m-2'>
        <h3 className='text-2xl self-center mb-3'>LUNA</h3>
        <h3 className='text-2xl font-semibold my-2'>Sign in</h3>
        <p className='text-black/70 text-sm'>
          Enter your email and we'll send you a verification code
        </p>

        <input 
          type="email" 
          placeholder='Email' 
          className='border my-5 border-gray-200 rounded-lg p-3 focus:outline-2 outline-sky-700 transition duration-300'
        />

        <button
          className='rounded-lg p-3 text-white font-semibold bg-sky-700 hover:bg-sky-800 transition duration-300 cursor-pointer'
        >
          continue
        </button>
        
      </div>
    </div>
  )
}

export default Account