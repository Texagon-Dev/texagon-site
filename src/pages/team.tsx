import React,{useState} from 'react'
import TeamPage from '../components/Team'
import Header from '@/components/Header'

function Team() {
    const [SideMenu,setSideMenu]=useState(false)
    return (
        <div className='flex flex-col w-full min-h-screen bg-black'>
            <div className='md:px-16 px-6 sticky top-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/20'>
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
            <TeamPage />
        </div>
    )
}

export default Team