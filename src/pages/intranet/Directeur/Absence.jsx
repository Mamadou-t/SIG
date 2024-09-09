import React from 'react'
import SideBar from './SideBar'
import DataTable from 'react-data-table-component'
import RechercheBar from '../../../composants/RechercheBar/RechercheBar'

const Absence = () => {

    return (

        <main className='relative flex flex-row bg-white-30'>
            <SideBar />
            <div className='flex flex-col w-full'>
                <div className='bg-white flex flex-row w-full h-16 justify-between items-center'>
                    <h1 className='font-semibold text-xl items-center flex mx-7'>{'Dashboard > Absences'}</h1>
                    <div className='rounded-full bg-slate-400 flex justify-center  items-center mx-7 w-10 h-10 '>
                        <h1 className='font-semibold text-xl items-center flex mx-7 '>M</h1>
                    </div>
                </div>



                {/* definition du tableau qui contient les personnes */}
                <div className=' flex top-56 mx-3 absolute w-4/5 h-4/6'>

                </div>

            </div>


        </main>
    )


}

export default Absence
