'use client'
import React, { useState, useRef, useEffect } from 'react';
function Comments({params}) {
    const [error, setError] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeEl = useRef()
     useEffect(()=>{
        nameEl.current.value = window.localStorage.getItem('name')
        emailEl.current.value = window.localStorage.getItem('email')
     },[])
    const handleCommentSubmition = () => {
        const comment = commentEl.current.value
        const name = nameEl.current.value
        const email = emailEl.current.value
        const storeData = storeEl.current.checked
        if (!comment || !name || !email) {
            setError(true)
            setTimeout(()=>{
                setError(false)
            },[5000])
        }

        const commentObj = {
            name, email, comment, params
        }

        if(storeData){
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        }else{
            window.localStorage.removeItem('name')
            window.localStorage.removeItem('email')
        }
        console.log(commentObj)

    }
    return (
        <div className='flex flex-col space-y-4 border border-text-color rounded-xl p-5 m-4 mb-12 shadow-pink-400 shadow-md'>
            <input type="text" ref={nameEl} placeholder='Enter your Name' className='rounded focus:outline-pink-500 w-full px-3 py-4 ' />
            <input type="email" ref={emailEl} placeholder='Enter your email' className='rounded focus:outline-pink-500 w-full px-3 py-4 ' />
            <textarea placeholder='Enter your comment' ref={commentEl} className='rounded w-full focus:outline-pink-500 px-3 py-2 ' cols="30" rows="10"></textarea>
            <div>
              <input type='checkbox' ref={storeEl} id='storeData' value='true' name='storeData'/>
              <label htmlFor="storeData" className='ml-2 text-text-color cursor-pointer'>Save Name and Email for the next time</label>
            </div>
            {error && <p className='text-sm text-red-500'>All the fields is required.</p>}
            <button onClick={handleCommentSubmition}  className='px-4 py-3 rounded-2xl hover:bg-background-color font-semibold text-text-color bg-gradient-to-l from-pink-500 to-purple-600 w-full md:w-[300px] text-center'>Leave a Comment</button>
            {successMsg && <p className='text-green-500'>Comment is submited for reviews</p>}
        </div>
    );
}

export default Comments;


