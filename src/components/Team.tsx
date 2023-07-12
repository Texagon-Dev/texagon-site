import React, { HTMLAttributes } from 'react'

interface TeamMembers {
    id: number
    avatar: any
    name: string
    category?: string[]
}

function TeamPage() {
    const teamMembers: TeamMembers[] = [
        {
            id: 6,
            avatar: 'https://i.imgur.com/X0R3rPU.png',
            name: 'Abdurehman Saleemi',
            category: ['Founder']
        },
        {
            id: 1,
            avatar: 'https://i.imgur.com/AE6kwIL.png',
            name: 'Muhammad Talha',
            category: ['Co-Founder']
        },
        {
            id: 2,
            avatar: 'https://i.imgur.com/2llxrHc.png',
            name: 'Muhammad Ahmed',
            category: ['Co-Founder']
        },
        {
            id: 3,
            avatar: 'https://i.imgur.com/YNT9lmz.png',
            name: 'Abdullah Naeem',
            category: ['Co-Founder']
        },
        {
            id: 4,
            avatar: 'https://i.imgur.com/HqARoSR.png',
            name: 'Abdurahman Nadeem',
            category: ['Co-Founder']
        },
        {
            id: 5,
            avatar: 'https://i.imgur.com/j9Yg5iN.png',
            name: 'Abuzar Saeed',
            category: ['Co-Founder']
        },
    ]

    return (
        <>
            <div className='flex flex-col md:flex-row w-full px-12 py-12 md:space-x-12 font-secondary'>
                <div className='flex flex-col space-y-4 w-full md:w-2/6'>
                    <h1 className='text-3xl mt-8 text-white'>Meet our team</h1>
                    <p className='text-white/70 text-lg'>We are a team of 6 people who are passionate about building products that people love.</p>
                </div>
                <div className='flex flex-col space-y-24 mt-8 w-full'>
                    {
                        teamMembers.map((member) => (
                            <>
                                <div className='flex group flex-row space-x-72 items-center justify-start w-full'>
                                    <img src={member.avatar} className='w-64 group-hover:opacity-100 opacity-100 lg:opacity-80' />
                                    <div className='flex flex-col space-y-2'>
                                        <h1 className='text-7xl group-hover:text-white transition-all ease-linear cursor-default font-bold text-white lg:text-white/40'>{member.name}</h1>
                                        <div className='flex flex-row space-x-4'>
                                            {
                                                member.category?.map((category) => (
                                                    <p className='text-lg font-medium text-white/50 uppercase tracking-widest mt-4'>{category}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                {teamMembers.length - 1 !== member.id && <hr className='w-full h-px border-white/20' />
                                }
                            </>
                        ))
                    }
                </div>
            </div>
            {/*<div className='flex md:hidden flex-col items-center justify-center w-full h-screen bg-black/90'>
                <h1 className={`text-md text-center uppercase tracking-wider font-bold text-white`}>
                    Mobile Version Under Development
                </h1>
                <a href='https://www.fiverr.com/saleemi2082'
                    target='_blank'
                    className={`px-4 py-2 mt-4 text-lg font-medium text-black bg-white/90 rounded-lg hover:bg-white transition-all ease-linear`}
                >
                    Contact Us
                </a>
            </div> */}
        </>
    )
}

export default TeamPage