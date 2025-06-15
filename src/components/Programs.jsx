import React from 'react'
import Image1 from "../assets/image4.jpg"

function Programs() {
  return (
<>
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24 '>
      <div className=" flex  flex-col md:flex-row items-center justify-between gap-12 md:gap-18"> 

        {/* left side part */}
        <div id='testimonial' className="w-full md:w-1/2 scroll-mt-40 md:scroll-mt-37">
            <div className="bg-white border border-blue-200 shadow rounded-2xl p-17">
              <div className="flex items-center gap-4 mb-6">
            
                <h1 className="font-bold md:text-lg px-5 py-3 text-blue-800 bg-blue-50 rounded-full text-center md:ml-22">
                  WORD OF GOD
                </h1>
              </div>
        
              <div className="space-y-4 text-gray-700 font-semibold">
                <h1>The church prioritizes biblical accuracy, but teachings are delivered in Afaan Oromo to make the Gospel culturally and linguistically accessible.</h1>
                <h1>
                The Gospel in Araara Church is delivered through spirit-filled preaching that blends biblical teaching with demonstrations of divine power. Emphasis is placed on salvation,
                holiness, and personal transformation. Services are often marked by intense worship, prayer, and testimonies, reflecting a deep reliance on the Holy Spirit to convict, heal,
                and restore.
              
                </h1>
                <h1>
                 
                </h1>
              </div>
        
             
            </div>
          </div>
        
        {/* right side */}
        <div className="bg-white border border-blue-200 shadow-md rounded-2xl p-8">
<img src={Image1} alt="image" />
        </div>
      </div>
    
    </section>
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24 '>
      <div className=" flex  flex-col md:flex-row items-center justify-between gap-12 md:gap-18">

        {/* left side part */}
        <div className="bg-white border border-blue-200 shadow-md rounded-2xl p-8">
<img src={Image1} alt="image" />
          </div>
          {/* right side */}
        <div id='testimonial' className="w-full md:w-1/2 md:scroll-mt-37">
            <div className="bg-white border border-blue-200 shadow rounded-2xl p-17">
              <div className="flex items-center gap-4 mb-6">
            
                <h1 className="font-bold md:text-lg px-5 py-3 text-blue-800 bg-blue-50 rounded-full text-center md:ml-22">
                WORSHIP OF CHIRST 
                </h1>
              </div>
        
              <div className="space-y-4 text-gray-700 font-semibold">
                <h1>Gospel music programs showcasing Oromo gospel artists.</h1>
                <h1>
                
                  Worship in Araara Church is vibrant and deeply spiritual, characterized by passionate praise, traditional and contemporary gospel music, and spontaneous
                  expressions of faith. The atmosphere is often filled with singing, clapping, dancing, and heartfelt prayer, creating a space where the congregation actively engages with the Holy Spirit. Worship is seen as a pathway to encounter God’s
                  presence and prepare hearts for the message
              
                </h1>
                <h1>
                </h1>
              </div>
        

            </div>
          </div>
        
        
      
      </div>
    
    </section>


    </>
  ) 
}

export default Programs