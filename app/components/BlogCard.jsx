import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import moment from 'moment'
function BlogCard({blogImg , description ,date ,readTime,title , slug}) {
    return (

        <Link href={`/articles/ ${slug}`}
            className='w-[350px] max-h-[500px] md:h-[500px] h-[450px] rounded-xl bg-background-color group group-hover:shadow-amber-600  shadow-pink-400 shadow-lg'>
            <div className='bg-background-color rounded-lg p-4 '>
                <div className='w-full h-[200px]'>
                    <Image src={blogImg} alt='profile' width={800} height={400}
                           className='w-full h-full rounded-xl'/>
                </div>
                <div className='mt-2'>
                    <span className='text-orange-400 text-sm font-bold pr-2'>{moment(date).format('llll')}</span>
                    <span className='mx-1 text-orange-400 font-bold'>-</span>
                    <span className='text-orange-400 font-bold pl-2 '>{readTime} min</span>
                </div>
                <h3 className=' md:text-xl text-lg text-text-color font-bold  hover:underline hover:underline-offset-4 hover:text-purple-700'>
                    {title}
                </h3>
                <p className=' md:text-base text-text-color text-sm'>{description}</p>
            </div>
        </Link>
    );
}

export default BlogCard;