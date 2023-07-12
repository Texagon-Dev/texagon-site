import React from 'react'
import logo from '@/assets/monogram.svg'
import logoTypo from '@/assets/texagon.svg'
import Image from 'next/image'

function Header() {
    const menuItems = [
        {
            name: 'Team',
            link: '/team'
        },
        {
            name: 'Our Work',
            link: '/work'
        }
    ]
    return (
        <div className='md:flex hidden flex-row items-center justify-between w-full py-6'>
            <a href='/'>
                <div className="flex flex-row items-center space-x-2">
                    <Image src={logo} alt='logo' className='w-6' />
                    <Image src={logoTypo} className='w-40' alt='logoTypo' />
                </div>
            </a>
            <div className='flex flex-row items-center space-x-6'>
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className='text-lg font-medium text-white/80 hover:text-white transition-all ease-linear'
                    >
                        {item.name}
                    </a>
                ))}
                <button className='px-4 py-2 text-lg font-medium text-black bg-white/90 rounded-lg hover:bg-white transition-all ease-linear'>
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Header