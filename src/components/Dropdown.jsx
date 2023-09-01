import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { dropdownList } from '../data/dummy'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center w-[340px] h-[200px] rounded-lg'>
            <button 
                onClick={() => setIsOpen((prev) => !prev)}
                className='bg-teal-400 p-3 w-full flex item-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
                Dropdown
                {isOpen ? (
                    <AiOutlineCaretDown className='h-8'/>
                )
                    :(
                        <AiOutlineCaretUp className='h-8'/>
                    )
                }
            </button>
            {isOpen && (<div className='bg-slate-400 absolute top-16 flex-col items-start rounded-lg p-2 w-full'>
                {dropdownList.map((item, i) => (
                    <div className='flex w-full justify-start hover:bg-blue-300 cursor-pointer p-1 rounded-r-lg border-l-transparent hover:border-white border-l-4' key={i}>
                        {/* <h3>{item.no}</h3> */}
                        <h3 className='font-bold'>{item.name}</h3>
                    </div>
                ))}
            </div>)}
    </div>
  )
}

export default Dropdown