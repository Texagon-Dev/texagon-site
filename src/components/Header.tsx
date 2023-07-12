import React,{useState} from 'react'
import logo from '@/assets/monogram.svg'
import logoTypo from '@/assets/texagon.svg'
import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'

function Header(props : any) {
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


    function OpenMenu()
    {
        props.setSideMenu(!props.SideMenu)
    }

    return (
        <div className='flex flex-row items-center justify-between w-full py-6 '>
            <a href='/'>
                <div className="flex flex-row items-center space-x-2">
                    <Image src={logo} alt='logo' className='w-6' />
                    <Image src={logoTypo} className='sm:w-40 w-32' alt='logoTypo' />
                </div>
            </a>
            <div className='md:flex hidden flex-row items-center space-x-6'>
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
            <AiOutlineMenu className='md:hidden block' color='white' size='1.5rem' onClick={OpenMenu}/>
        </div>
    )
}

export default Header
