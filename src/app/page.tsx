"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import UpdateData from '@/components/UpdateData'
import Filter from '@/components/Filter'
import Jobs from '@/components/Jobs'
import DarkMode from '@/components/DarkMode'

function Home() {

  return (
    <div>
      <Navbar pageName="findjob" />
      <DarkMode/>
      <div className='flex flex-col md:flex-row md:mx-8'>
        <div className='flex md:flex-col md:items- md:justify-start justify-around items-center mt-5 '>
          <div className='inline-block'>
            <UpdateData />
          </div>
          <Filter />
        </div>
        <Jobs />
      </div>
    </div>
  )
}

export default Home