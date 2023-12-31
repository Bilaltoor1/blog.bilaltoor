'use client'
import React, { useState } from 'react'
import { useSession , signOut } from 'next-auth/react'
function Profile() {
    const [showProfile, setShowProfile] = useState(false)
    const {data} = useSession()
    console.log(data.user.name)

    return (
        <div className={`relative`}>
            <div className='flex flex-col items-center justify-center' onClick={() => setShowProfile(!showProfile)} >
                <img id="avatarButton" type="button" className="w-10 h-10 rounded-full cursor-pointer" src='/blog-thumbnail.png' alt="User dropdown"></img>
            </div>
            {
                showProfile && <div className='absolute top-10 right-0' onMouseLeave={() => setShowProfile(!showProfile)}>
                    <div className="z-40  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>{data.user.name}</div>
                            <div className="font-medium truncate" title={data.user.email}>
                                {data.user.email}
                            </div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={()=>signOut('google')}>Sign out</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile