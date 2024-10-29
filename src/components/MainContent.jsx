import React, { useEffect, useState } from 'react';

// Import Css
import './Component.css'

// Import Assets
import arrowImage from '../assets/arrow.png'
import grayEmailImage from '../assets/emailGray.png'
import whiteArrowImage from '../assets/whiteArrow.png'
import instagramImage from '../assets/instagram.png'
import facebookImage from '../assets/facebook.png'
import linkedinImage from '../assets/linkedin.png'
import twitterImage from '../assets/twitter.png'
import personImage from '../assets/person.png'

const MainContent = () => {
  const [count, setCount] = useState(0);
  const targetCount = 1471312;
  const duration = 15000; // Duration in milliseconds

  useEffect(() => {
    let start = 0;
    const end = targetCount;
    const increment = Math.ceil(end / (duration / 100)); 

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end; 
        clearInterval(timer);
      }
      setCount(start);
    }, 100);

    return () => clearInterval(timer); 
  }, [targetCount, duration]);

  return (
    <div className="flex flex-col justify-center items-start relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 pt-8 md:pt-16">
      <div>
        <div className="flex flex-wrap gap-x-2 sm:gap-x-5">
          <div className="font-bold text-3xl sm:text-4xl lg:text-5xl">Largest</div>
          <div className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#388FCB]">Wholesaler</div>
        </div>
        <div className="flex flex-wrap gap-x-2 sm:gap-x-5 mt-1 sm:mt-2">
          <div className="font-bold text-3xl sm:text-4xl lg:text-5xl">of</div>
          <div className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#388FCB]">Mobile Phones</div>
        </div>
      </div>

      <div className='flex flex-col gap-y-4'>
        <div className='w-full md:w-2/3 mt-4 sm:mt-6 text-sm sm:text-base text-gray-800'>
          Supply that meets Demand. Get the best wholesale prices of used and refurbished Mobile Stocks
        </div>

        <div className='flex gap-x-3 items-center cursor-pointer bg-blue-50 hover:bg-blue-100 transition-all duration-500 max-w-fit px-2 py-1 rounded-md glow-button'>
          <div className='text-blue-400 text-base sm:text-lg'>Learn More</div>
          <div>
            <img src={arrowImage} alt="Arrow Image" className='w-2.5 sm:w-3' />
          </div>
        </div>


        <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-4'>
          <div className="relative w-full sm:w-auto transform hover:scale-105 transition-all duration-500">
            <img
              src={grayEmailImage}
              alt="Email Image"
              className="w-4 absolute left-4 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full sm:w-auto outline placeholder:pl-2 outline-1 outline-green-500 px-5 rounded-full py-2"
              style={{ paddingLeft: '2.5rem' }}
            />
          </div>

          <div className='flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 gap-x-4'>
            <div className='flex gap-x-3 bg-[#7cc140] hover:bg-[#5d9030] transition-all duration-500 rounded-full items-center justify-center px-6 py-2 text-white cursor-pointer transform hover:scale-105 hover:shadow-lg'>
              <div className="text-sm sm:text-base">Subscribe</div>
              <div>
                <img src={whiteArrowImage} alt="Arrow Image" className='w-2.5 sm:w-3 transition-transform duration-300 transform hover:translate-x-1' />
              </div>
            </div>
            <div className='flex gap-x-3 bg-[#388FCB] hover:bg-[#2e77a7] transition-all duration-500 rounded-full items-center justify-center px-6 py-2 text-white cursor-pointer transform hover:scale-105 hover:shadow-lg'>
              <div>
                <img src={whiteArrowImage} alt="Arrow Image" className='w-2.5 sm:w-3 rotate-90 transition-transform duration-300 transform hover:translate-x-1' />
              </div>
              <div className="text-sm sm:text-base">Stock List</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-4 items-center sm:items-start'>
          <div className='flex gap-x-3 sm:gap-x-1'>
            <img src={instagramImage} alt="Social Media" className='w-5 sm:w-6 cursor-pointer' />
            <img src={facebookImage} alt="Social Media" className='w-5 sm:w-6 cursor-pointer' />
            <img src={linkedinImage} alt="Social Media" className='w-5 sm:w-6 cursor-pointer' />
            <img src={twitterImage} alt="Social Media" className='w-5 sm:w-6 cursor-pointer' />
          </div>
          <div className='flex gap-x-2 font-semibold'>
            <div><img src={personImage} alt="Person Image" className='w-5 sm:w-6' /></div>
            <div className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-[#388FCB] to-[#7CC140] font-bold">
            {count.toLocaleString()} people Registered
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent