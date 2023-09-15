import React from 'react'
import Facebook from "@/app/components/Icons/facebook";
import Linkdin from "@/app/components/Icons/linkdin";
import Whatsapp from "@/app/components/Icons/whatsapp";
import Instagram from "@/app/components/Icons/instagram";
import CopyLink from "@/app/components/Icons/link";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-screen h-screen flex flex-wrap justify-center items-center">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/blog-thumbnail.png" alt="Bonnie image" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bilal Toor</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">React Js Vue js Nuxt js Next js Tailwindcss and more </span>
          <div className="flex mt-2 flex-col items-center justify-normal">
            <h4 className='font-bold text-text-color'> 👉 Hire Me </h4>
            <div className='flex mt-3 place-content-center space-x-3  justify-center items-center text-center  dark:border-gray-700'>
              <Link href='/' target='_blank' className='w-10 h-10'><Facebook
                className='text-text-color' /></Link>
              <Link href='/' target='_blank' className='w-10 h-10'><Linkdin
                className='text-text-color' /></Link>
              <Link href='/' target='_blank' className='w-10 h-10'><Whatsapp
                className='text-text-color' /></Link>
              <Link href='/' target='_blank' className='w-10 h-10'><Instagram
                className='text-text-color' /></Link>
              <Link href='/' target='_blank' className='w-10 h-10'><CopyLink
                className='text-text-color' /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
