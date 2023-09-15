import React from 'react';
import BlogContent from "@/app/components/BlogContent";
import ProgressBar from "@/app/components/topProgress";
import Comments from "@/app/components/Comments";
async function Page({params}) {
    return (
        <div className='w-full'>
            <ProgressBar />
            <div className='flex justify-between flex-col'>
                <div className=' w-full  max-w-screen-lg mx-auto'>
                    <BlogContent params={params.slug} />
                    <Comments params={params.slug} />
                </div>
            </div>
        </div>

    );
}

export default Page;



