import React from 'react'
import SideBar from './SideBar'
import DataTable from 'react-data-table-component'
import RechercheBar from '../../../composants/RechercheBar/RechercheBar'
import ProjetItem from '../../../composants/Directeur/ProjetItem'
import Bouton from '../../../composants/boutons/Bouton'
const Projet = () => {

    return (

        <main className=' flex flex-row bg-white-30 fixed  '>
            <SideBar />
            <div className='flex flex-col w-full '>
                <div className='bg-white flex flex-row w-full h-16 justify-between items-center'>
                    <h1 className='font-semibold text-xl items-center flex mx-7'>{'Dashboard > Projets'}</h1>
                    <div className='rounded-full bg-slate-400 flex justify-center  items-center mx-7 w-10 h-10 '>
                        <h1 className='font-semibold text-xl items-center flex mx-7 '>M</h1>
                    </div>
                </div>



                {/* definition */}
                <div className='text-end  mt-7 mr-28'>
                <Bouton text={"Ajouter"} style={'w-1/5 text-center font-semibold  px-5 py-3  rounded-custom text-white bg-vert hover:bg-white hover:text-vert hover:border-solid hover:border-vert'} />
                </div>
                <div className='mt-7  flex-wrap  scroll-m-3 overflow-y-scroll items-center flex  w-full h-4/5 max-h-screen '>
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />
                    <ProjetItem />

                   
                </div>

            </div>


        </main>
    )


}

export default Projet
