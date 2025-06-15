import React from 'react'
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

function Contact() {
    const features = [
      {
        icon: <FaFacebookF className="w-12 h-12 text-blue-600" />,
        title: "Face Book",
        desc: "",
      },
      {
        icon: <FaTwitter className="w-12 h-12 text-blue-600" />,
        title: "Twitter",
      },
      {
        icon: <FaTelegramPlane className="w-12 h-12 text-blue-600" />,
        title: " Telegram",
        desc: "",
      },
      {
        icon: <FaInstagram className="w-12 h-12 text-yellow-600" />,
        title: "Instagram",
        desc: "",
      },
    ]
  return (
    <section id='contact' className='container mx-auto px-4 md:px-8 scroll-mt-26  h-430 md:h-100 scroll-mt-35   '>
<div className="bg-blue-600 rounded-2xl overflow-hidden h-119 md:h-80">
        <div className="relative md:px:16 py-16 px-6 md:py-3 ">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block "></div>
          <div className=" relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ">
            {/* left content */}
            <div className=" px-7 text-white max-w-lg text-center md:text-left">
              <h2 className='text-2xl sm:text-3xl lg:4xl font-medium mb-4   ' > Contact ARARA TV WORLD WIDE</h2>
            
        
              <p className='text-blue-100 text-sm sm:text-base'>“For God so loved the world,that the he  </p>
              <p className='text-blue-100 text-sm sm:text-base'>gave his only begotten Son, that </p>
              <p className='text-blue-100 text-sm sm:text-base'>whosoever believeth in him should </p>
              <p className='text-blue-100 text-sm sm:text-base'>not perish, but have everlasting life.” </p>
              <p className='text-blue-100 text-sm sm:text-base md:ml-10'>  — John 3:16 (KJV) </p>
            </div>
            {/* right content */}
            <div className="">
              <span className='grid grid-col-3 space-y-4'>
              <input className='md:mr-30 w-full bg-white ms:w-auto  md:w-80 md:h-30  py-3 px-8 sm:py-4 rounded-xl sm:rounded-l-xl focus:outline-none sm:rounded-r-none' type="textarea" placeholder='Drop You Idea Here' />
                <input className='md:mr-40 w-full bg-green-500 ms:w-auto  md:w-80  sm:py-6 py-3 px-4 sm:py-4 rounded-xl sm:rounded-l-xl focus:outline-none sm:rounded-r-none' type="email" placeholder='Drop You Email Address' />
                <button className='text-small text-blue-800 bg-blue-100 w-30 rounded-xl py-4 ml-1 hover:bg-green-500 hover:text-red-100 hover:border hover:border-[3px]' >
                  Submit
                </button>
                </span>
            </div>
          </div>
</div>     
      </div>
      <footer  className=" bg-gray-50 ">
      <div id="services" className="scroll-mt-40 mt-1">
    <section  className=" w-full bg-gray-50 py-8 px-4  md:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Find us through these social medias</h1>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 h-[150px] w-full shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
            <p className="text-gray-600 mt-3 text-sm">{f.desc}</p>

            
          </div>
        ))}
      </div>
      </section>
      </div>
  
      </footer>

    </section>
  )
}

export default Contact