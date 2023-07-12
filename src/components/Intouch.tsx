import React from 'react'

function Intouch() {
    return (
        <div className='flex space-y-12 flex-col bg-white/10 py-12 rounded-xl items-center justify-center w-full mt-16'>
            <div className='flex flex-col space-y-6 items-center justify-center'>
                <h3 className='md:text-6xl text-4xl font-bold text-white'>Get in touch</h3>
                <p className='lg:w-2/4 md:w-3/4 w-full text-center md:text-lg text-white/60'>
                    Are you confuse or have any questions? Don't worry we are here to help you. Just send us a message and we will get back to you within 24 hours.
                </p>
            </div>
            <div className='flex flex-col space-y-6 items-center justify-center w-full md:px-56 px-5'>
                <input type="text" placeholder='Name' className='px-4 py-3 w-full rounded-lg text-white bg-white/10 border border-white/20 focus:outline-none focus:border-white/50 transition-all ease-linear' />
                <input type="email" placeholder='Email' className='px-4 w-full py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/50 transition-all ease-linear' />
                <textarea rows={8} placeholder='Message' className='px-4 py-3 w-full rounded-lg bg-white/10 border text-white border-white/20 focus:outline-none focus:border-white/50 transition-all ease-linear' />
                <button className='px-4 py-2 text-white text-lg font-medium text-white/80 hover:text-white rounded-lg bg-gradient-to-bl from-gray-800 to-black transition-all ease-linear border border-white/20'>
                    Send Message
                </button>
            </div>
        </div>
    )
}

export default Intouch