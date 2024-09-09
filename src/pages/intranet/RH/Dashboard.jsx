import React from 'react'
import SideBar from './SideBar'

const Dashboard = () => {
  return (
    <main className='flex flex-row bg-white-30'>
       <SideBar /> 
       <div className='bg-white flex flex-row w-full h-16 justify-between items-center'>
            <h1 className='font-semibold text-xl items-center flex mx-7'>Dashboard</h1>
            <div className='rounded-full bg-slate-400 flex justify-center  items-center mx-7 w-10 h-10 '>
                <h1 className='font-semibold text-xl items-center flex mx-7 '>M</h1>
            </div>
        </div>

        <div>

        </div>

    </main>
  )
}


export default Dashboard
