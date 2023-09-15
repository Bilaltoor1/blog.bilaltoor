import Image from "next/image";
import Category from "@/app/components/Category";
import BlogCard from "@/app/components/BlogCard";
import AnimatedButton from "@/app/components/AnimatedButton";
import React from "react";
import {getLatestPosts} from "@/app/services";

export default async function Home() {
    const categories = [
        'Data Science', 'UI/UX', 'News', 'gaming', 'crypto', 'blockchain',
    ]
    const blogs = await getLatestPosts();
    return (
        <main className="px-6 xl:px-0 container-box font-poppins max-w-screen-xl mx-auto ">
            <div className='flex flex-col lg:flex-row justify-between container-box'>
                <div className=' w-full lg:w-[60%]'>
                    <div className='w-full lg:h-[500px] md:h-[400px] h-[300px] relative'>
                        <Image src='/blog-thumbnail.png' className='object-cover w-full h-full' alt='profile'
                               width={1200} height={400}/>
                    </div>
                    <div className='bg-black rounded w-28 text-center text-shadow-lg mt-3'>
                        <p className='bg-gradient-to-l from-pink-700 to-purple-700 bg-clip-text text-transparent  text-base font-bold px-4 py-1'>featured</p>
                    </div>
                    <h3 className='lg:text-heading md:text-2xl text-lg mt-3 text-text-color font-bold  hover:underline hover:underline-offset-4 hover:text-purple-700'>Dockerizing
                        Your MERN Stack App: A Step-by-Step Guide</h3>
                </div>
                <Category categories={categories}/>
            </div>
            <div>
                <div>
                    <h2 className='lg:text-3xl text-2xl  font-extrabold font-poppins bg-gradient-to-l from-pink-500 to-purple-600 bg-clip-text text-transparent w-[400px]'> READ
                        LATEST
                        ARTICLES </h2>
                </div>
                <div className='flex flex-wrap gap-x-12 gap-y-16 container-box justify-center '>
                    {
                        blogs.posts.map((blog,i) => (
                            <BlogCard key={i} title={blog.title}
                                      slug={blog.slug}
                                      description={blog.description}
                                      readTime={blog.readTime}
                                      date={blog.date}
                                      blogImg={blog.blogImg.url}
                            />
                        ))
                    }
                </div>
                <AnimatedButton link='/articles' text='Browse all Articles'/>
            </div>
        </main>
    )
}
