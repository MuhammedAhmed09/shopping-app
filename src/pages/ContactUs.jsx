

const ContactUs = () => {
  return (
    <div className='w-full flex flex-col my-10 px-5 md:px-22 lg:px-[20%] pt-[calc(14rem)]'>
      <div className='items-center text-center'>
        <h3 className='font-bold text-3xl'>
          For exchange contact us on social media platforms.
        </h3>
        <h4 className='font-bold text-xl my-5'>
          for any other issues send us on our e-mail. <br />info.eg@gmail.com
        </h4>
      </div>

      <form className='flex flex-col gap-6 mt-10'>
        <div className='flex flex-col md:flex-row justify-between gap-6'>
          <input
            type="text"
            placeholder='Name'
            className='ring w-full p-3 ring-gray-400 hover:ring-2 placeholder:text-lg'
          />
          <input 
            type="email" 
            placeholder='Email *' 
            className='ring w-full p-3 ring-gray-400 hover:ring-2 placeholder:text-lg'
          />
        </div>
        <div>
          <input 
            type="number" 
            placeholder='Phone number' 
            className='ring w-full p-3 ring-gray-400 hover:ring-2 placeholder:text-lg'
          />
        </div>
        <div>
          <textarea name="comment" placeholder='Comment' className='ring w-full p-3 ring-gray-400 transform hover:ring-2 '/>
        </div>

        <button type='submit' className='self-start bg-black text-white text-lg px-12 py-3 transition-transform duration-500 transform hover:scale-105 cursor-pointer'>Send</button>
      </form>

    </div>
  )
}

export default ContactUs