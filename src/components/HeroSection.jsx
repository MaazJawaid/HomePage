import React from 'react'

// Import Css
import './Component.css'

// Import Components
import NavigationMenu from './NavigationMenu'
import ImageSection from './ImageSection'
import Cards from './Cards'
import SliderNavigation from './SliderNavigation'

// Import Assets
import flatIcons from '../assets/flatIcons.png'
import dottedBackgroundImage from '../assets/dottedBackground.png'
import secondLastImage from '../assets/secondLastImage.png'
import MainContent from './MainContent'

const HeroSection = () => {
    return (
        <div className='relative'>
            <div>
                <div className='bg-[#388FCB] z-20'>
                    <div className='bg-[#9ECCEA] rounded-s-full rounded-e-full h-16 z-20'></div>
                </div>
            </div>

            <div className="bg-white absolute rounded-s-3xl rounded-e-3xl top-4 w-full min-h-screen overflow-hidden">
                <ImageSection />
                <NavigationMenu />
                <MainContent />

                <div className="w-1/4 h-2 bg-gradient-to-r from-[#7CC140] to-[#388FCB] rounded-e-full mt-12 pulse-animation"></div>
                <div className="w-[35%] h-2 bg-gradient-to-r from-[#388FCB] to-[#7CC140] rounded-e-full mt-2 slide-animation"></div>


                <img src={dottedBackgroundImage} alt="Dotted Image" className='w-42 absolute top-[450px] left-0 z-50' />
                <div className='relative'>
                    <div><img src={flatIcons} alt="Flat Icons Image" className='w-full sm:block hidden mt-16' /></div>
                </div>
                <img src={dottedBackgroundImage} alt="Dotted Image" className='w-42 absolute top-[700px] left-0 z-50' />

                <div className='flex flex-col items-center sm:mt-32 mt-5 relative'>
                    <img src={secondLastImage} alt="Image" className='w-36 absolute moving-image' />
                    <div className='flex gap-x-2 text-3xl ml-28 mt-4 font-bold'>
                        <div className='text-blue-100 z-10 ml-1'>Mobile</div>
                        <div className='text-blue-500'>Stock</div>
                    </div>
                    <div className='sm:w-1/3 w-11/12 text-center mt-10'>We stay upto date with latest technology trends and offer innovative solutions. that help you stay ahead in competetion</div>
                    <Cards />
                    <SliderNavigation />
                </div>
                <div></div>
            </div>


        </div>
    )
}

export default HeroSection
