import React, { HTMLAttributes } from 'react'

interface TeamMembers {
    id: number
    avatar: any
    name: string
    // position: string
}

function TeamPage() {
    const teamMembers: TeamMembers[] = [
        {
            id: 1,
            avatar: 'https://i.imgur.com/yHGZSC7.png',
            name: 'Abdurehman Saleemi',
            // position: 'frontend developer'
        },
        {
            id: 2,
            avatar: 'https://i.imgur.com/xCSfi7h.png',
            name: 'Muhammad Ahmed',
            // position: 'fullstack developer'
        },
        {
            id: 6,
            avatar: 'https://i.imgur.com/wIpQpi5.png',
            name: 'Abdurehman Saleemi',
        },
        {
            id: 3,
            avatar: 'https://i.imgur.com/Cac1caB.png',
            name: 'Abdullah Naeem',
            // position: 'fullstack developer'
        },
        {
            id: 4,
            avatar: 'https://i.imgur.com/Ki3MbYd.png',
            name: 'Abdurahman Nadeem',
        },
        {
            id: 5,
            avatar: 'https://i.imgur.com/QJC1xv5.png',
            name: 'Abuzar Saeed',
        },
    ]

    return (
        <>
            <div className='md:flex hidden flex-col w-full px-12 py-6'>
                <h1 className='text-6xl font-bold text-center text-white'>Meet our team</h1>
                <div className='flex flex-col md:flex-row mt-24 flex-wrap items-start justify-start flex-grow'>
                    {teamMembers.map((member: TeamMembers) => (
                        <div className='flex flex-col mr-2 mb-2 shrink-0 w-full md:w-1/4 space-y-2 flex-grow items-start justify-start border border-white/20 rounded-lg p-4'>
                            <div className='flex flex-col w-full items-start justify-start space-y-2'>
                                <img src={member.avatar} alt='avatar' className='w-full saturate-0 object-cover rounded-lg hover:saturate-100 transition-all ease-linear' />
                            </div>
                            <h1 className='text-2xl font-bold text-white'>{member.name}</h1>
                            {/* <p className='text-xs text-white/80 tracking-wider uppercase bg-white/20 px-2 py-1 rounded-full'>{member.position}</p> */}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex md:hidden flex-col items-center justify-center w-full h-screen bg-black/90'>
                <h1 className={`text-md text-center uppercase tracking-wider font-bold text-white`}>
                    Mobile Version Under Development
                </h1>
                <a href='https://www.fiverr.com/saleemi2082'
                    target='_blank'
                    className={`px-4 py-2 mt-4 text-lg font-medium text-black bg-white/90 rounded-lg hover:bg-white transition-all ease-linear`}
                >
                    Contact Us
                </a>
            </div>
        </>
    )
}

export default TeamPage