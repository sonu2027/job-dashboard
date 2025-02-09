import React from 'react'
import Navbar from '@/components/Navbar'

function Page() {
  return (
    <div>
      <Navbar pageName="faq" />
      <h1 className='px-4 text-center text-black text-2xl'>This is FAQ page</h1>
    </div>
  )
}

export default Page