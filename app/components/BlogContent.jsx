// import {useInView, motion, useScroll} from "framer-motion";
// import {useRef} from "react";
import { fetchSinglePost } from '@/app/services'
import moment from 'moment';
import Image from "next/image";
import TopProgress from '@/app/components/topProgress';
// import Link from "next/link";
// import Facebook from "@/app/components/Icons/facebook";
// import Linkdin from "@/app/components/Icons/linkdin";
// import Whatsapp from "@/app/components/Icons/whatsapp";
// import Instagram from "@/app/components/Icons/instagram";
// import CopyLink from "@/app/components/Icons/link";
// import ScrollProgress from "@/app/components/ScrollProgress";
export default async function BlogContent({ params }) {
    let str = params
    let newStr = str.substring(3); // Removes the first character
    console.log(newStr);
    const { post } = await fetchSinglePost(newStr)
    console.log(post)
    return (
        <>
        <TopProgress />
        <div
             className='flex justify-center text-text-color bg-bg-main container-box md:p-8 p-4 blog-content '>
            <div>
                <p className='font-light text-sm lg:text-base my-2 opacity-75'>
                    Last Updated : 12 March 2022 - 12:38 pm
                </p>
                <div className='relative'>
                    <Image alt="Blog_profile" src={post.blogImg.url} width={1280} height={400}
                           className='w-full lg:h-[500px] md:[400px] h-300px object-cover shadow-lg'/>
                </div>
                <div className='flex gap-x-6 lg:my-8 md:my-6 my-4'>
                    <Image src={post?.author.profileImg.url} alt='author-profile' width={60} height={60}
                           className='object-cover w-[60px] h-[60px] rounded-full'/>
                    <div>
                        <h4 className='font-bold text-text-color mb-1'>{post.author.name}<span
                            className='bg-gradient-to-l from-yellow-400 to-orange-500 px-3 md:text-base text-sm py-1 rounded-2xl text-white font-semibold ml-2'>Author</span>
                        </h4>
                        <p className='font-medium font-poppins text-text-color opacity-75 md:text-base text-sm'>{moment(post.date).format('LL')} - <span className='font-extrabold'> {post.readTime} min</span>
                        </p>
                    </div>
                </div>
               {/* here paste the the side progress code */}
                <h1 className='xl:text-4xl md:text-2xl text-xl mt-3 font-bold font-poppins'>
                 {post.title}
                </h1>
                <p className='font-poppins text-gray-700 dark:text-gray-300 my-3'>Lorem ipsum dolor sit amet,
                   {post.description}
                </p>
                    <div className='prose font-poppins' dangerouslySetInnerHTML={{__html: post.markdown.html  || ''}}></div>
           
            </div>
          </div>
        </> 
    )
}
8

// const ref = useRef(null);
// const progressRef = useRef(null);
// const isInView = useInView(ref)
// const {scrollYProgress} = useScroll({
//     target: progressRef,
//     offset: ["end end", "start start"]
// })

//ref={progressRef}
// ref={ref}

// {
//     isInView && <div
//         className='flex xl:flex-col xl:space-y-4 place-content-center space-x-4 xl:space-x-0  justify-center items-center text-center xl:border dark:border-gray-700  xl:fixed xl:right-14 lg:top-[20%]'>
//         <ScrollProgress scrollYProgress={scrollYProgress}/>
//         <h3 className='font-bold font-poppins text-lg'>Share</h3>
//         <Link href='/' target='_blank' className='bg-bg-main rounded-full w-10 h-10'><Facebook
//             className='text-text-color'/></Link>
//         <Link href='/' target='_blank' className='bg-bg-main rounded-full w-10 h-10'><Linkdin
//             className='text-text-color'/></Link>
//         <Link href='/' target='_blank' className='bg-bg-main rounded-full w-10 h-10'><Whatsapp
//             className='text-text-color'/></Link>
//         <Link href='/' target='_blank' className='bg-bg-main rounded-full w-10 h-10'><Instagram
//             className='text-text-color'/></Link>
//         <Link href='/' target='_blank' className='bg-bg-main rounded-full w-10 h-10'><CopyLink
//             className='text-text-color'/></Link>
//     </div>
// }