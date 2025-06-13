import React from 'react'
import Church from "../assets/chuch1.png"
import Image2 from "../assets/image2.jpg"
import Image3 from "../assets/image3.jpg"
import Image4 from "../assets/image4.jpg"
import Image5 from "../assets/image5.jpg"

function Hero() {
  const animated=["Jesus Is The LIfe",'Jesus Is The True','jesus Is The Way','Jesus Is The Shepherd ' ,'Jesus Is The Shadow'  ,'Jesus Is The Shadow']
  
  return (<>
    <div id='home' className=" scroll-mt-36 md:scroll-mt-30 ">
    <div className=" mt-38 md:mt-26 md:w-full  "> <img src={Image2} className='w-full rounded-3xl m-1 md:h-130' />
  {/* ✅ Mobile Version - shown only on small screens */}
<div className="absolute mb-55 inset-0 flex flex-col items-center justify-center text-center space-y-4 md:hidden">
  <span className="text-white text-2xl font-bold bg-black/80 px-0 py-3   rounded-2xl">
    <h1 className="text-blue-400">ARARA TV WORLD WIDE</h1>
    <h2 className="font-bold">
      Arara church was Based in Nekemte, <br />
      East Wollega, Oromia, Ethiopia
    </h2>
  </span>

  <h3 className="text-white text-xl font-semibold mt-4">
    <a
      href="#"
      className="border   border-blue-400 rounded-2xl px-6 py-3 focus:outline-none focus:border-red-600 focus:ring-blue-100 transition-all bg-amber-300 text-black hover:bg-blue-500 hover:text-amber-50"
    >
      COME AND VISIT US
    </a>
  </h3>
</div>

{/* ✅ Large screen version - shown only on medium and larger screens */}
<div className="absolute inset-0 md:flex items-center justify-center hidden">
  <span className="md:space-y-2 text-white md:text-4xl font-bold bg-black/80 mb-50 md:px-7 md:py-5 md:mr-20 rounded-2xl">
    <h1 className="text-blue-400">ARARA TV WORLD WIDE</h1>
    <h2 className="font-bold">
      Arara church was Based in Nekemte, <br />
      East Wollega, Oromia, Ethiopia
    </h2>
  </span>
  <h3 className="mt-35 md:-ml-90 md:mt-20 text-white text-xl font-semibold">
    <a
      className="border border-blue-400 rounded-2xl md:px-4 md:py-6 focus:outline-none focus:border-red-600 focus:ring-blue-100 transition-all bg-amber-300 text-black hover:bg-blue-500 hover:text-amber-50"
      href="#"
    >
      COME AND VISIT US
    </a>
  </h3>
</div>

    
    </div>

   {/* ✅ Mobile version – 2-column table-like layout */}
<div className="md:hidden grid grid-cols-2 gap-3 px-4 mt-6 animate-marquee">
  {animated.map((l, i) => (
    <span
      key={i}
      className="text-center font-bold text-sm py-2 px-3 text-blue-100 bg-blue-600 rounded-full border-2 border-amber-800"
    >
      {l}
    </span>
  ))}
</div>

{/* ✅ Desktop version – single row animated marquee */}
<div className="hidden md:flex animate-marquee mt-10 md:mt-8 px-4 space-x-6 overflow-x-hidden min-w-full">
  {animated.map((l, i) => (
    <span
      key={i}
      className="shrink-0 font-bold text-lg py-3 px-6 text-blue-100 bg-blue-600 rounded-full border-2 md:border-4 border-amber-800"
    >
      {l}
    </span>
  ))}
</div>
</div>



    



<section
  id="about"
  className="scroll-mt-30 md:scroll-mt-20 container mx-auto pt-10 md:pt-44 pb-6 px-5 gap-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center"
>
  {/* Left Column */}
  <div className="w-full md:w-1/2">
    <div className="bg-white border border-blue-200 shadow-md rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={Church}
          alt="Church"
          className="w-20 h-20 rounded-full ml-4 md:ml-2"
        />
        <h1 className="font-bold md:text-lg px-5 py-3 text-blue-800 bg-blue-50 rounded-full">
          ARARA TV WORLD WIDE
        </h1>
      </div>

      <div className="space-y-4 text-gray-700 font-semibold">
        <h1>They give the services to the people twice per week.</h1>
        <h1>
          Their messaging emphasizes miraculous works, prophecies, and healing
          ministries, particularly in Nekemte. References to anointed ministers
          performing healing at crusades suggest they emphasize the active
          working of the Holy Spirit.
        </h1>
        <h1>
          The content—sermons, prophecy nights, crusades—reflects a focus on
          bringing the Word of God directly to people through spiritual renewal
          and miracles.
        </h1>
      </div>

      <button className="block md:hidden bg-blue-600 text-white rounded-xl px-8 py-3 mt-6 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 transition duration-300">
        Next
      </button>
    </div>
  </div>

  {/* Right Column */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0">
    <div className="bg-white border border-blue-200 shadow-md rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={Church}
          alt="Church"
          className="w-20 h-20 rounded-full ml-4 md:ml-2"
        />
        <h1 className="font-bold md:text-lg px-5 py-3 text-blue-800 bg-blue-50 rounded-full">
          ARARA TV WORLD WIDE
        </h1>
      </div>

      <div className="space-y-4 text-gray-700 font-semibold">
        <h1>They give the services to the people twice per week.</h1>
        <h1>
          Their messaging emphasizes miraculous works, prophecies, and healing
          ministries, particularly in Nekemte. References to anointed ministers
          performing healing at crusades suggest they emphasize the active
          working of the Holy Spirit.
        </h1>
        <h1>
          The content—sermons, prophecy nights, crusades—reflects a focus on
          bringing the Word of God directly to people through spiritual renewal
          and miracles.
        </h1>
      </div>

      <button className="block md:hidden bg-blue-600 text-white rounded-xl px-8 py-3 mt-6 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 transition duration-300">
        Next
      </button>
    </div>
  </div>
</section>

    </>
  )
}

export default Hero