"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { totalJobs } from '@/function/jobData'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import JobsCard from '@/components/JobsCard'
import DarkMode from '@/components/DarkMode'

function Page() {

  const [appliedJobs, setappliedJobs] = useState<typeof totalJobs>([])
  const jobData = useSelector((state: RootState) => state.job.data);


  useEffect(() => {

    const newJobs: typeof totalJobs = [];

    totalJobs.map((job) => {
      jobData.map((id) => {
        if (job.id === id)
          newJobs.push(job)
      })
    })

    setappliedJobs(newJobs)
  }, [])

  return (
    <div>
      <Navbar pageName="applied" />
      <DarkMode/>
      <div className='flex flex-wrap justify-around'>
        {
          appliedJobs.map((e) => <JobsCard key={e.id} aboutJob={e} />)
        }
      </div>
    </div>
  )
}

export default Page