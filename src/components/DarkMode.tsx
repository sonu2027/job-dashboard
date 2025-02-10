"use client"
import React, { useEffect, useState } from 'react'

function DarkMode() {

    const [darkMode, setDarkMode] = useState<boolean>(true)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])

    return (
        <div className='text-right my-2 m-2'>
            {
                darkMode ?
                    <button onClick={() => setDarkMode(!darkMode)} className='bg-white text-black px-4 py-2 border-2 border-solid border-gray-400 rounded-full hover:bg-gray-300'>Light Mode</button>
                    :
                    <button onClick={() => setDarkMode(!darkMode)} className='bg-slate-950 text-white px-4 py-2 border-2 border-solid border-gray-400 rounded-full hover:bg-gray-300'>Dark Mode</button>
            }
        </div>
    )
}

export default DarkMode