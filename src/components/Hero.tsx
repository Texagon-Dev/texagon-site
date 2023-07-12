import React from 'react'
import sideImage from '@/assets/hero.png'
import Image from 'next/image'

function Hero() {
    return (
        <div className='flex md:flex-row flex-col items-center space-x-12 space-y-20 w-full h-full'>
            <div className='flex flex-col md:items-start items-center space-y-6 w-full h-full'>
                <h1 className='sm:text-6xl text-4xl md:text-start text-center font-heading font-bold bg-gradient-to-r from-gray-300 to-white leading-tight bg-clip-text text-transparent py-1'>
                    Empowering Your Digital Dreams with Texagon
                </h1>
                <p className='sm:text-xl  w-5/6 text-white/50 text-center'>
                    Your ideas transformed into reality. Experience the pinnacle of
                    development services with Texagon, serving clients with
                    top-tier web, mobile, and desktop solutions worldwide.
                </p>
                <div className='flex flex-row items-start space-x-4'>
                    <button className='sm:px-4 px-2 py-2 sm:text-lg  font-medium text-black bg-white/90 border border-white rounded-lg hover:bg-white transition-all ease-linear'>
                        Get Started
                    </button>
                    <button className='sm:px-4 px-2 py-2 sm:text-lg font-medium text-white/80 hover:text-white rounded-lg bg-gradient-to-bl from-gray-800 to-black transition-all ease-linear border border-white/20'>
                        Our Work
                    </button>
                </div>
            </div>
            <div className='flex flex-col  mt-20'>
                <Image src={sideImage} alt='sideImage' className='w-full' />
            </div>
        </div>
    )
}

export default Hero