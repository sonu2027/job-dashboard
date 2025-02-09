import React from 'react'
import Navbar from '@/components/Navbar'

function Page() {
  return (
    <div>
      <Navbar pageName="hiring" />
      <h1 className='px-4 text-center text-black text-2xl'>This is hiring page</h1>
    </div>
  )
}

export default Page