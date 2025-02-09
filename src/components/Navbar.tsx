"use client"
import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import ChoosedFilter from './ChoosedFilter';
import { useRouter } from 'next/navigation';

const choosedFilter = ["Designer", "Work Location", "Experience", "Per Month"]

type pageNameProps = {
  pageName: string;
};

const Navbar: React.FC<pageNameProps> = ({ pageName }) => {

  console.log("findJob: ", pageName);


  const router = useRouter()

  const [menu, setMenu] = useState<boolean>(false)
  const [sal, setSalVal] = useState<string>("500")

  return (
    <div>
      <div className='flex justify-around bg-[#171923] text-b-white border-b-[1px] border-b-solid border-gray-700 py-2 sm:p-0'>
        <h1 className='text-2xl text-white flex justify-center items-center'>Eclipse</h1>
        <ul className='hidden sm:flex justify-center items-center gap-x-[2vw] md:gap-x-[4vw] lg:gap-x-4rem text-gray-200'>
          <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "findjob" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/")}>Find Job</li>
          <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "applied" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/applied")}>Applied</li>
          <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "hiring" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/hiring")}>Hiring</li>
          <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "community" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/community")}>Community</li>
          <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "faq" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/faq")}>Faq</li>
        </ul>
        <div className='flex justify-center items-center gap-x-1 text-gray-200 text-sm'>
          <CiLocationOn />
          <div>New York, NY</div>
        </div>
        <div className='flex justify-center items-center gap-x-3 text-white'>
          <img className='h-4 w-4 rounded-full' src="https://sonumondal.vercel.app/pp.jpg" alt="img" />
          <div className='border-[1px] border-solid border-gray-700 rounded-full p-1'>
            <IoIosSettings />
          </div>
          <div className='border-[1px] border-solid border-gray-700 rounded-full p-1'>
            <MdOutlineNotificationAdd />
          </div>
        </div>
        {
          !menu && <div onClick={() => setMenu(!menu)} className='sm:hidden flex justify-center items-center'>
            <GiHamburgerMenu className='text-2xl text-white' />
          </div>
        }
        {
          menu && <div onClick={() => setMenu(!menu)} className='sm:hidden flex justify-center items-center'>
            <RxCross2 className='text-2xl text-white' />
          </div>
        }
      </div>
      {
        menu && <div className='bg-[#171923] py-1 sm:hidden border-b-[1px] border-b-solid border-gray-700'>
          <ul className='flex flex-col justify-center items-center text-gray-200'>
            <li className={`py-2 hover:cursor-pointer hover:font-bold ${pageName === "findjob" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/")} >Find Job</li>
            <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "applied" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/applied")}>Applied</li>
            <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "hiring" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/hiring")}>Hiring</li>
            <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "community" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/community")}>Community</li>
            <li className={`py-4 hover:cursor-pointer hover:font-bold ${pageName === "faq" ? "border-b-2 border-solid border-gray-200" : ""}`} onClick={() => router.push("/faq")}>Faq</li>
          </ul>
        </div>
      }
      <div className='flex flex-wrap justify-around py-2 text-sm gap-x-4 gap-y-10 bg-[#171923] text-white'>
        {
          choosedFilter.map((e) => <ChoosedFilter key={e} filter={e} />)
        }
        <div className='flex flex-col gap-y-2'>
          <div className='text-sm'>Salary range</div>
          <input onChange={(e) => setSalVal(e.target.value)}
            min={500} max={1200} type="range" name="" id="" />
          <div className='flex justify-between'>
            <div className='text-sm'>$500</div>
            <div className='text-sm'>${sal}</div></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar