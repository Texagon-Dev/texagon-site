import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Intouch from '@/components/Intouch'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <main className={`bg-black min-h-screen w-full md:flex hidden flex-col ${spaceGrotesk.className}`}>
        <div className='px-16 sticky top-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/20'>
          <Header />
        </div>
        <div className='container mx-auto py-32'>
          <Hero />
          <Stats />
        </div>
        <div className='container mx-auto py-12'>
          <Features />
          <Intouch />
        </div>
      </main>
      <div className='flex md:hidden flex-col items-center justify-center w-full h-screen bg-black'>
        <h1 className={`text-md text-center uppercase tracking-wider font-bold text-white ${inter.className}`}>
          Mobile Version Under Development
        </h1>
        <a href='https://www.fiverr.com/saleemi2082'
        target='_blank'
          className={`px-4 py-2 mt-4 text-lg font-medium text-black bg-white/90 rounded-lg hover:bg-white transition-all ease-linear ${inter.className}`}
        >
          Contact Us
        </a>
      </div>
    </>
  )
}
