import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

type ChoosedFilterProps = {
    filter: string;
};

const ChoosedFilter: React.FC<ChoosedFilterProps> = ({ filter }) => {
    return <div className="flex justify-center items-center gap-x-2">
        <div className='border-[1px] border-solid border-gray-700 rounded-full p-1'>
            {
                filter === "Designer" && <IoIosSearch className='text-[14px] text-white' />
            }
            {
                filter === "Work Location" && <CiLocationOn className='text-[14px] text-white' />
            }
            {
                filter === "Experience" && <MdOutlineWork className='text-[14px] text-white' />
            }
            {
                filter === "Per Month" && <RiMoneyPoundCircleLine className='text-[14px] text-white' />
            }
        </div>
        <div className='text-sm'>{filter}</div>
        <div className='pl-1'>
            <IoMdArrowDropdown />
        </div>
    </div>;
};

export default ChoosedFilter;