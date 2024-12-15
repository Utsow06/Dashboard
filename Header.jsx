import React from 'react';
import { IoReorderThree } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";

const Header = () => {
  return (
    
    <div className='ml-1 overflow-clip w-screen bg-slate-50 p-4 text-2xl font-bold flex flex-row justify-between'>
      <div>
      <button>
      <IoReorderThree />
      </button>
    </div>
    <div className='flex flex-row'>
    <div className='mr-60 hover:bg-violet-500 rounded inline-block'>
      <button >
      <FaRegBell />
      </button>
      </div>
      <div className='inline-block'>
      <button className='rounded hover:bg-white text-xl ml-1 mr-20'>
        Admin
      </button>
      </div>
    </div>
    </div>
    
  )
}

export default Header
