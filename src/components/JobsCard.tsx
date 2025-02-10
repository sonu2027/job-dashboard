"use client"
import React, { useEffect, useState } from 'react'
import { CiBookmark } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';

type JobData = {
    id: number,
    title: string;
    rating: number;
    review: number;
    location: string;
    jobOption: string[];
    salary: string;
    bgColor: string
};

type JobsCardProps = {
    aboutJob: JobData;
};

const JobsCard: React.FC<JobsCardProps> = ({ aboutJob }) => {

    const router = useRouter()

    const [darkStar, setDrakStar] = useState<number[]>([])
    const [lightStar, setLightStar] = useState<number[]>([])

    useEffect(() => {
        let temp = []
        for (let i = 0; i < aboutJob.rating; i++) {
            temp.push(i)
        }
        setDrakStar(temp)

        temp = []
        for (let i = aboutJob.rating; i < 5; i++) {
            temp.push(i)
        }
        setLightStar(temp)
    }, [aboutJob.rating])

    return (
        <div onClick={() => router.push(`/applyjob/${aboutJob.id}`)} className='border-[1px] border-solid border-gray-300 rounded-2xl p-2 mx-4 my-4 hover:cursor-pointer hover:border-gray-950'>
            <div style={{ backgroundColor: aboutJob.bgColor }} className='px-2 py-4 rounded-xl flex flex-col gap-y-2'>
                <div className='flex justify-between items-center'>
                    <img className='h-6 w-6' src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-apple-fruit-swoosh-logo-apple-icon-vector-isolated-illustration-apple-fruit-png-image_5066574.jpg" alt="company-logo" />
                    <div className='p-1 rounded-full bg-white'>
                        <CiBookmark className='text-xl h-6 w-6' />
                    </div>
                </div>
                <div className='w-[10rem]'>{aboutJob.title}</div>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        {
                            darkStar.map((e) => <IoIosStar key={e} />)
                        }
                        {
                            lightStar.map((e) => <IoStarOutline key={e} />)
                        }
                    </div>
                    <div className='underline'>( {aboutJob.review} reviews )</div>
                </div>
                <div>{aboutJob.location}</div>
                <div className='flex flex-wrap w-[15rem]'>
                    {
                        aboutJob.jobOption.map((e) => <div key={e} className='px-2 py-1 mx-1 my-1 rounded-2xl border-[1px] border-solid border-gray-600'>{e}</div>)
                    }
                </div>
            </div>
            <div className='flex justify-between items-center pt-3 pb-1'>
                <div>
                    <span className='text-xl font-medium'>{aboutJob.salary}</span>
                    <span>/Monthly</span>
                </div>
                <button onClick={(e) => {
                    e.stopPropagation()
                    router.push(`/jobdetails/${aboutJob.id}`)
                }
                } className='dark:bg-[#171923] bg-blue-600 px-[14px] py-[6px] rounded-2xl text-white hover:bg-gray-700 hover:text-white'>View details</button>
            </div>
        </div>
    )
}
export default JobsCard