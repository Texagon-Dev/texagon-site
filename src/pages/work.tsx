import React from 'react'
import Header from '@/components/Header'
import WorkPage from '@/components/Work'
function Work() {
    return (
        <div className='flex flex-col w-full min-h-screen bg-black'>
            <div className='px-16 sticky top-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/20'>
                <Header />
            </div>
            <WorkPage />
        </div>
    )
}

export default Work