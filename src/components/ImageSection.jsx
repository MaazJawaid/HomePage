import React from 'react'

// Import Css
import './Component.css'

// Import Assets
import rightBackground from '../assets/rightBackground.png'
import leftUpperBackground1 from '../assets/leftUpperBackground1.png'
import rightUpperBackground1 from '../assets/rightUpperBackground1.png'
import iphoneOriginal from '../assets/iphoneOriginal.png'

const ImageSection = () => {
    return (
        <div className='sm:block hidden'>
            <div>
                <img
                    src={rightBackground}
                    alt="Right Background Image"
                    className="absolute right-0 w-[850px] -top-12 z-0"
                />
            </div>


            <div>
                <img
                    src={leftUpperBackground1}
                    alt="leftUpperBackground Image"
                    className="absolute left-12 w-40 top-24 z-0"
                />
            </div>

            <div>
                <img
                    src={leftUpperBackground1}
                    alt="leftUpperBackground Image Rotated"
                    className="absolute left-72 w-40 top-56 z-0 rotate-180"
                />
            </div>

            <div>
                <img
                    src={rightUpperBackground1}
                    alt="rightUpperBackground Image Rotated"
                    className="absolute right-24 w-32 top-16 z-0 rotate-180 circular-motion"
                />
            </div>

            <div>
                <img
                    src={iphoneOriginal}
                    alt="rightUpperBackground Image Rotated"
                    className="absolute right-32 top-28 z-0"
                />
            </div>
        </div>
    )
}

export default ImageSection
