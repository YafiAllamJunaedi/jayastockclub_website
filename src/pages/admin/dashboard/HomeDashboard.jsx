import React from 'react'
import Sidebar from './Sidebar'
const HomeDashboard = () => {
  return (
    <div className='flex justify-center items-center h-screen text-[#007571]'>
        <div className='w-5/12 md:w-3/12 lg:w-2/12 h-full'><Sidebar/></div>
        <div className='w-7/12 md:w-9/12 lg:w-10/12 h-full flex flex-col bg-slate-200'>

          <div className='pala atas flex justify-center items-center w-full lg:h-[60px] bg-slate-300 bg-graent-to-l from-[#003835]/40 to-[#007471]/40'>
            <div className='w-11/12 text-lg font-semibold'>Home  </div>
          </div>

          <div className='badan utama'></div>
        </div>
    </div>
  )
}

export default HomeDashboard