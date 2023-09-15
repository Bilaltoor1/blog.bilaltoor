import React from 'react'
import LoadingSvg from '@/app/components/Icons/LoadingSvg'
export default function loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex items-center justify-center'>
      <LoadingSvg/> <strong className='ml-2 text-text-color'>Loading..</strong>
      </div>
    </div>
  )
}
