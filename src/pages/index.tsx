// 12 July - 2023 // PUSH
import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Intouch from '@/components/Intouch'
import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {

  const [SideMenu,setSideMenu]=useState(false)

  return (
    <>
      <main className={`bg-black min-h-screen w-full flex  flex-col ${spaceGrotesk.className}`}>
        <div className={SideMenu==false?'md:px-16 px-6 sticky top-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/20':'md:px-16 sm:px-6 px-2 flex flex-col sticky top-0 z-50 bg-black/50 backdrop-blur-2xl'}>
          <Header SideMenu={SideMenu} setSideMenu={setSideMenu} />
          {
            SideMenu==true?
            <div className='flex flex-col  text-white py-5 space-y-20 '>
              <div className='flex flex-col space-y-5'>
                <button className='p-5 border-[1px] rounded-lg' onClick={()=>{window.location.replace('/team')}}>Team</button>
                <button className='p-5 border-[1px] rounded-lg'>Our Work</button>
              </div>
              <button className='p-5 bg-white/90 text-black rounded-lg'>Contact us</button>
            </div>
            :
            <></>
          }
        </div>
        <div className='container mx-auto '>
          <Hero />
          <Stats />
        </div>
        <div className='container mx-auto pt-12'>
          <Features />
          <Intouch />
        </div>
      </main>
    </>
  )
}
