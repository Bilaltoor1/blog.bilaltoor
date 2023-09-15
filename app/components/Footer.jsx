import React from 'react';
import Link from "next/link";
import Facebook from "@/app/components/Icons/facebook";
import Linkdin from "@/app/components/Icons/linkdin";
import Whatsapp from "@/app/components/Icons/whatsapp";
import Instagram from "@/app/components/Icons/instagram";
import CopyLink from "@/app/components/Icons/link";

function Footer() {
    const navLinks = [
        {
            'name': 'Home',
            'link': '/'
        },
        {
            'name': 'About',
            'link': '/about'
        },
        {
            'name': 'Categories',
            'link': '/categories'
        },
        {
            'name': 'Article',
            'link': '/articles'
        }
    ]
    return (
        <div className='bg-background-color'>
            <div className='flex flex-col md:flex-row justify-between items-center  py-8 px-14 max-w-screen-xl mx-auto '>
                <div className='flex flex-col mb-6 md:mb-0 items-center'>
                    <h2 className='font-poppins font-bold text-3xl text-heading'>itsBilal</h2>
                    <div className='flex'>
                        <Link href='/' target='_blank' className='text-text-color rounded-full w-10 h-10'><Facebook
                            className='text-text-color'/></Link>
                        <Link href='/' target='_blank' className='text-text-color rounded-full w-10 h-10'><Linkdin
                            className='text-text-color'/></Link>
                        <Link href='/' target='_blank' className='text-text-color rounded-full w-10 h-10'><Whatsapp
                            className='text-text-color'/></Link>
                        <Link href='/' target='_blank' className='text-text-color rounded-full w-10 h-10'><Instagram
                            className='text-text-color'/></Link>
                        <Link href='/' target='_blank' className='text-text-color rounded-full w-10 h-10'><CopyLink
                            className='text-text-color'/></Link>
                    </div>
                </div>
                <div className='flex space-x-14 md:space-x-10 '>
                    <div>
                        <h3 className='font-bold lg:text-xl text-base text-text-color mb-2'>Quick Links</h3>
                        <ul className='flex flex-col space-y-3 text-text-color'>
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.link}>{link.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold  lg:text-xl text-base text-text-color mb-2'>Legal</h3>
                        <ul className='space-y-3 text-text-color'>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;