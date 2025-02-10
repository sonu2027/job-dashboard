import React from 'react'
import Navbar from '@/components/Navbar'
import DarkMode from '@/components/DarkMode'

function Page() {
  return (
    <div>
    <Navbar pageName="community"/>
    <DarkMode/>
    <h1 className='px-4 text-center text-black text-2xl'>This is community page</h1>
  </div>
  )
}

export default Page