import React from 'react'
import Navbar from '@/components/Navbar'
import DarkMode from '@/components/DarkMode'

function Page() {
  return (
    <div>
      <Navbar pageName="faq" />
      <DarkMode/>
      <h1 className='px-4 text-center text-black text-2xl'>This is FAQ page</h1>
    </div>
  )
}

export default Page