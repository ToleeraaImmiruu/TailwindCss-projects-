import React from 'react'
import Church from "../assets/chuch1.png"
import Image2 from "../assets/image2"
import Image3 from "../assets/image3"
import Image4 from "../assets/image4"
import Image5 from "../assets/image5"
function Hero() {
  return (
    <section className='container mx-auto pt-44 pb-6 px-5 gap-4  sm:px-6 lg:px-8 flex flex-col  md:flex-row justify-between  items-center '>
      {/* left column */}
      <div className=" w-full md:w-1/2">
        <div className="">
          <span className='flex gap-4'>
        <img src={Church} alt='Church' className='ml-15 md:ml-2 w-20 h-20 rounded-full lg:ml-30'/>
            <h1 className=' font-bold md:text-lg py-8 px-5 md:py-6 md:px-5 text-blue-800 bg-blue-50 rounded-full hover:text-blue'>ARARA TV WORLD WIDE</h1>
          </span>
          <div className=" font-semibold
          
        my-5 h-165 md: h-155 pt-8 md:md-1 md:my-10 md:py-10 md:pl-4 md:h-80 bg-blue-100  rounded-2xl md:rounded-4xl pl-3 "> 
            <span className="space-y-3 ">
              <h1 className="  font-bold "> Arara church was Based in Nekemte, East Wollega, Oromia, Ethiopia      </h1>
                
             <h1>They give the serveices to the peolpe twise per the week</h1> 
           
                <h1>Their messaging emphasizes miraculous works, prophecies, and healing ministries, particularly in Nekemte. References to anointed ministers performing healing at crusades
                  suggest they emphasize the active working of the Holy Spiri</h1>
              
              <h1>The content—sermons, prophecy nights, crusades—reflects a focus on bringing the Word of God directly to people through spiritual renewal and miracles</h1>
              
            </span>
          </div>
      </div>
      </div>
      {/* The right column */}
      <div className="w-full md:w-1/2 "> right column</div>
    
    </section>
  )
}

export default Hero