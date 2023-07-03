import React from 'react'
import sideImage from '@/assets/hero.png'
import Image from 'next/image'

function Hero() {
    return (
        <div className='flex flex-row space-x-12 w-full h-full'>
            <div className='flex flex-col space-y-6 w-full h-full'>
                <h1 className='text-6xl font-heading font-bold bg-gradient-to-r from-gray-300 to-white leading-tight bg-clip-text text-transparent py-1'>
                    Empowering Your Digital Dreams with Texagon
                </h1>
                <p className='text-xl w-5/6 text-white/50'>
                    Your ideas transformed into reality. Experience the pinnacle of
                    development services with Texagon, serving clients with
                    top-tier web, mobile, and desktop solutions worldwide.
                </p>
                <div className='flex flex-row items-start space-x-4'>
                    <button className='px-4 py-2 text-lg font-medium text-black bg-white/90 border border-white rounded-lg hover:bg-white transition-all ease-linear'>
                        Get Started
                    </button>
                    <button className='px-4 py-2 text-lg font-medium text-white/80 hover:text-white rounded-lg bg-gradient-to-bl from-gray-800 to-black transition-all ease-linear border border-white/20'>
                        Our Work
                    </button>
                </div>
            </div>
            <div className='flex flex-col w-full h-full relative'>
                <Image src={sideImage} alt='sideImage' className='w-full' />
            </div>
        </div>
    )
}

export default Hero