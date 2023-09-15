'use client'
import Link from 'next/link'
import { useState } from 'react'
import MenuIcon from '@/app/components/Icons/menuIcon';
import CrossIcon from "@/app/components/Icons/crossIcon";
import Login from "@/app/components/Icons/login";
import SearchIcon from "@/app/components/Icons/search"
import DarkModeButton from "@/app/components/DarkModeButton";
import Profile from '@/app/components/Profile';
import { signIn, useSession } from 'next-auth/react';
function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const {data} = useSession();
    const navLinks = [
        {
            'name': 'Home',
            'link': '/'
        },

        {
            'name': 'Article',
            'link': '/articles'
        },
        {
            'name': 'About',
            'link': '/about'
        }
    ]
    return (
        <div className='bg-background-color shadow border dark:border-none shadow-current  text-text-color'>
            <div className='flex items-center max-w-screen-2xl mx-auto h-16  md:justify-between font-poppins px-8'>
                <div className='flex-1 md:flex-grow-0'>
                    <h1>Navbar</h1>
                </div>
                <ul className='hidden md:flex space-x-4'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link} className='active:text-green-500 focus:text-green-600'>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className={`${data ? "mr-4" : "mr-0"} flex items-center justify-center space-x-4`}>
                    <DarkModeButton />
                    <div>
                        {
                       data ? <Profile/> :   <Link href='/login' className=' items-center justify-center hidden md:flex '>Register <Login className="h-6 w-6 ml-1"/></Link>
             
                        }
                    </div>
                </div>
                <div className='md:hidden cursor-pointer'>
                    <MenuIcon className='text-text-color' onClick={() => setMobileMenu(!mobileMenu)} />
                </div>
                {
                    mobileMenu && (
                        <div
                            className='flex justify-center overflow-hidden z-20 items-center md:hidden flex-col fixed top-0 left-0 w-full h-screen bg-background-color  text-text-color '>
                            <ul className='space-y-6 text-center'>
                                {
                                    navLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.link} onClick={() => setMobileMenu(false)}>{link.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='fixed right-6 bottom-6'>
                            <Link href='/login' className=' flex items-center justify-center py-3' onClick={() => setMobileMenu(false)}>Register / login <Login className="h-6 w-6 ml-1"/></Link>
                            </div>
                            <div className='flex mt-6 md:hidden items-center'>
                                <input type="text" placeholder='Search'
                                    className='w-[160px] px-4 py-1 rounded-2xl transition-all duration-300 focus:w-[300px] ' />
                                <SearchIcon className='-ml-8 ' width={20} height={20} />
                            </div>
                            <CrossIcon className='absolute top-4 right-4 cursor-pointer'
                                onClick={() => setMobileMenu(!mobileMenu)} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;