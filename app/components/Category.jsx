import React from 'react';
import AnimatedButton from "@/app/components/AnimatedButton";

function Category({categories}) {
    return (
        <div className='lg:w-[30%] w-full lg:border h-full dark:border-gray-600 lg:shadow-xl lg:mt-16'>
            <h3 className=' font-bold text-2xl mt-3 ml-2 hidden lg:block bg-gradient-to-l from-pink-700 to-purple-700 bg-clip-text text-transparent  px-4 py-1'>Catergories : </h3>
            <div className=' flex flex-wrap gap-4 items-center justify-center mt-12 text-center content-center lg:px-3'>
                {
                    categories.map((category) => (
                        <div
                            className='bg-gradient-to-l from-pink-500  to-purple-500 rounded-3xl text-center text-shadow-lg align-self-center'>
                            <h3 className='text-sm md:text-base font-bold md:px-6 md:py-2 px-4 py-1  hover:underline hover:underline-offset-4 hover:text-gray-50'>{category}</h3>
                        </div>
                    ))
                }
            </div>
            <AnimatedButton link='/categories' text='Browse all Categories'/>

        </div>
    );
}

export default Category;