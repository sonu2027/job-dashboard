"use client"
import React from 'react'
import { BsFilterLeft } from "react-icons/bs";
import JobsCard from './JobsCard';
import {totalJobs} from "../function/jobData"

function Jobs() {
    return (
        <div>
            <div className='flex justify-between gap-x-1 items-center mx-4 sm:mx-8 my-4 mt-12'>
                <div className='flex gap-x-1 items-center'>
                    <span className='text-sm sm:text-xl md:text-2xl font-bold'>Recommended Jobs</span>
                    <span className='px-[15px] sm:py-[5px] border-2 border-solid border-black rounded-3xl flex justify-center items-center'> ({totalJobs.length}) </span>
                </div>
                <div className='flex justify-center items-center gap-x-1 sm:gap-x-4
                '>
                    <div>
                        <span className='text-gray-400 text-sm sm:text-base'>Sort by:</span>
                        <span className='text-sm'>Last updated</span>
                    </div>
                    <BsFilterLeft className='font-medium' />
                </div>
            </div>
            <div className='flex flex-wrap justify-around'>
                {
                    totalJobs.map((e) => <JobsCard key={e.id} aboutJob={e} />)
                }
            </div>
        </div>
    )
}

export default Jobs