'use client';
import { fetchPosts, fetchPreviousPosts ,fetchSearchPosts , getCategories} from '@/app/services';
import SearchIcon from "@/app/components/Icons/search";
import BlogCard from "@/app/components/BlogCard";
import Spinner from '@/app/components/Icons/LoadingSvg'
import { useEffect, useState } from "react";
import Link from 'next/link'
export default function Page() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [hasNext, setHasNext] = useState(true);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [cursorValue, setCursorValue] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [categories,setCategories]=useState([])
   

    const getNextPosts = async () => {
        try {
            const data = await fetchPosts(cursorValue, 8);
            const newPosts = data.edges;
            setPosts(newPosts);
            setCursorValue(data.pageInfo.endCursor);
            setHasNext(data.pageInfo.hasNextPage)
            setHasPrevious(data.pageInfo.hasPreviousPage)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
    
    const fetchCategories = async () => {
        try {
            setLoading(true)
            const data = await getCategories()
            console.log(data.categories)
            setCategories(data.categories)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const getPreviousPosts = async () => {
        try {
            const previousData = await fetchPreviousPosts(cursorValue, 8);
            const newPosts = previousData.edges;
            setPosts(newPosts);
            setCursorValue(previousData.pageInfo.endCursor);
            setHasNext(previousData.pageInfo.hasNextPage);
            setHasPrevious(previousData.pageInfo.hasPreviousPage)
            setLoading(false);
        } catch (error) {
            console.error("Error fetching previous posts:", error);
        }
    };

    const getPostFromSearch = async (pageSize,searchTerm) => {
        try {
            setCursorValue(null);
            setPosts([]);
            setLoading(true);
            const data = await fetchSearchPosts(null, pageSize, searchTerm);
            console.log(data)
            const newPosts = data.edges;
            setPosts(newPosts);
            setCursorValue(data.pageInfo.endCursor);
            setHasNext(data.pageInfo.hasNextPage);
            setHasPrevious(data.pageInfo.hasPreviousPage);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
    
      const handleSearch = () => {
          getPostFromSearch(8,searchValue)
      }
      const EnterKeySearch = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
      }
    useEffect(() => {
        const getData = async () => {
            await getNextPosts();
        };
        getData();
        fetchCategories()
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <div className=' w-screen h-full bg-gradient-to-l from-pink-500 to-purple-600'>
                <div className='container-box  px-6 w-full h-full  '>
                    <div className='flex items-center justify-center '> 
                        <input type="text" placeholder='Search anything here...' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}  onKeyDown={EnterKeySearch}
                            className='w-[250px]  px-4 py-1 rounded-2xl transition-all duration-300 md:focus:w-[400px] text-stone-950 font-light font-poppins placeholder:text-gray-400 placeholder:font-poppins placeholder:text-sm' />
                        <SearchIcon className='-ml-8 ' width={20} height={20} onClick={handleSearch}  />
                    </div>
                    <div
                        className='pb-12 flex flex-wrap gap-4 items-center justify-center mt-6 lg:mt-12 text-center content-center lg:px-3'>
                        {
                           loading ? <Spinner/> : categories.map((category) => (
                                <div key={category.id}
                                    className='bg-gradient-to-l from-pink-500  to-purple-500 rounded-3xl text-center px-2 py-1 text-shadow-lg align-self-center'>
                                    <Link href={`/categories/${category.slug}`} className='text-sm md:text-base font-bold xl:px-6 xl:py-4 px-3 py-1 hover:underline hover:underline-offset-4 hover:text-gray-300 cursor-pointer'>{category.catergoryName}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-x-12 gap-y-16 container-box justify-center'>
                {
                    loading ? <Spinner/> : posts.map((blog) => (
                        <BlogCard key={blog.node.slug} title={blog.node.title}
                            slug={blog.node.slug}
                            description={blog.node.description}
                            readTime={blog.node.readTime}
                            date={blog.node.date}
                            blogImg={blog.node.blogImg.url}
                        />
                    ))
                }
            </div>
            <div className='flex justify-center py-5 lg:py-10 gap-x-8'>
                <button disabled={!hasPrevious} onClick={getPreviousPosts}
                    className='px-2 py-2 rounded hover:bg-background-color disabled:opacity-70 font-semibold text-text-color bg-gradient-to-l from-pink-500 to-purple-600 w-[100px]'>
                    <span>&larr;</span> Previous
                </button>
                <button disabled={!hasNext} onClick={getNextPosts}
                    className='px-2 py-2 rounded hover:bg-background-color disabled:opacity-70 font-semibold text-text-color bg-gradient-to-l from-pink-500 to-purple-600 w-[100px]'>Next <span>&rarr;</span>
                </button>
            </div>
        </div>
    );
}


