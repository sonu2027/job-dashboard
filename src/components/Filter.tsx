"use client"
import React from 'react'

function Filter() {
    return (
        <div className='flex flex-col gap-y-4 md:mt-8'>
            <div className='text-center text-2xl '>Filters</div>
            <div>
                <div className='text-gray-500 pb-2'>Working Schedule</div>
                <div className="py-1 flex justify-start items-center gap-x-2">
                    <input className='h-4 w-4 border-4 border-black accent-black' type="checkbox" id="full-time" />
                    <label htmlFor="full-time">Full Time</label>
                </div>
                <div className="py-1 flex justify-start items-center gap-x-2">
                    <input className='h-4 w-4 border-4 border-black accent-black' type="checkbox" id="internship" />
                    <label htmlFor="internship">Internships</label>
                </div>
                <div className="py-1 flex justify-start items-center gap-x-2">
                    <input className='h-4 w-4 border-4 border-black accent-black' type="checkbox" id="freelance" />
                    <label htmlFor="freelance">Freelance</label>
                </div>
                <div className="py-1 flex justify-start items-center gap-x-2">
                    <input className='h-4 w-4 border-4 border-black accent-black' type="checkbox" id="contractual" />
                    <label htmlFor="contractual">Contractual</label>
                </div>
            </div>
            <div>
                <div className='text-gray-500 pb-2'>Employment Type</div>
                <div className="py-1 flex justify-start items-center gap-x-2">
                    <input className='h-4 w-4 border-4 border-black accent-black' type="checkbox" id="full-day" />
                    <label htmlFor="full-day">Full day</label>
                </div>
                <div className="py-1 flex justify-start items-center gap-x-2">
                    <input className='h-4 w-4 border-4 border-black accent-black' type="checkbox" id="flexible-schedule" />
                    <label htmlFor="flexible-schedule">Flexible schedule</label>
                </div>
                <div className="py-1 flex justify-start items-center gap-x-2">
                    <input className='h-4 w-4 border-4 border-black accent-black' type="checkbox" id="distant-work" />
                    <label htmlFor="distant-work">Distant work</label>
                </div>
            </div>
        </div>
    )
}

export default Filter