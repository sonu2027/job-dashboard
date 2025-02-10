"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function Page() {

    const { id } = useParams()

    return (
        <div className='text-xl font-medium mt-4 text-center'>This is a Job details page of job id no: {id}</div>
    )
}

export default Page