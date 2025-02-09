"use client"
import React from 'react'
import { IoFingerPrintOutline } from "react-icons/io5";

function UpdateData() {
    return (
        <div className='bg-[#171923] flex flex-col justify-center items-center gap-y-3 p-3 sm:gap-y-5 sm:p-5 rounded-2xl'>
            <div className='p-1 sm:p-3 rounded-full bg-white'>
                <IoFingerPrintOutline className='text-2xl sm:text-4xl text-black' />
            </div>
            <div className='text-gray-100 text-lg sm:text-2xl'>Update your data!</div>
            <div className='text-gray-300 w-36 sm:w-48 text-center text-[12px] sm:text-base'>Update your data and find the best opportunities</div>
            <button className='bg-teal-400 text-black rounded-full px-5 py-1 sm:px-10 sm:py-3 text-sm sm:text-base'>Update your data</button>
        </div>
    )
}

export default UpdateData