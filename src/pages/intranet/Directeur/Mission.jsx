import React from 'react'
import SideBar from './SideBar'
import DataTable from 'react-data-table-component'
import RechercheBar from '../../../composants/RechercheBar/RechercheBar'
const Missions = () => {

    const colonnes=[
        {
            name:'N°',
            selector:row=>row.id
        },
        {
            name:'AGENT',
            selector:row=>row.Nom_agent
        },
        {
            name:'OBJET DE LA MISSION',
            selector:row=>row.Objet_de_la_mission
        },
        {
            name:'DESTINATION',
            selector:row=>row.Destination
        },
        {
            name:'MOYEN DE TRANSPORT',
            selector:row=>row.Moyen_de_transport
        },
        {
            name:'DATE DE DEPART',
            selector:row=>row.Date_de_depart
        }
    ]
    const data=[
        {
            id:1,
            Nom_agent:'Agent1',
            Objet_de_la_mission:'Mission1',
            Destination:'destination1',
            Moyen_de_transport:'transport1',
            Date_de_depart:'date1'
        },
        {
            id:1,
            Nom_agent:'Agent1',
            Objet_de_la_mission:'Mission1',
            Destination:'destination1',
            Moyen_de_transport:'transport1',
            Date_de_depart:'date1'
        },
        {
            id:1,
            Nom_agent:'Agent1',
            Objet_de_la_mission:'Mission1',
            Destination:'destination1',
            Moyen_de_transport:'transport1',
            Date_de_depart:'date1'
        },
        {
            id:1,
            Nom_agent:'Agent1',
            Objet_de_la_mission:'Mission1',
            Destination:'destination1',
            Moyen_de_transport:'transport1',
            Date_de_depart:'date1'
        },
        {
            id:1,
            Nom_agent:'Agent1',
            Objet_de_la_mission:'Mission1',
            Destination:'destination1',
            Moyen_de_transport:'transport1',
            Date_de_depart:'date1'
        },
        {
            id:1,
            Nom_agent:'Agent1',
            Objet_de_la_mission:'Mission1',
            Destination:'destination1',
            Moyen_de_transport:'transport1',
            Date_de_depart:'date1'
        },
        {
            id:1,
            Nom_agent:'Agent1',
            Objet_de_la_mission:'Mission1',
            Destination:'destination1',
            Moyen_de_transport:'transport1',
            Date_de_depart:'date1'
        },
    ]

    return (

        <main className='relative flex flex-row bg-white-30'>
            <SideBar />
            <div className='flex flex-col w-full'>
                <div className='bg-white flex flex-row w-full h-16 justify-between items-center'>
                    <h1 className='font-semibold text-xl items-center flex mx-7'>{'Dashboard > Missions'}</h1>
                    <div className='rounded-full bg-slate-400 flex justify-center  items-center mx-7 w-10 h-10 '>
                        <h1 className='font-semibold text-xl items-center flex mx-7 '>M</h1>
                    </div>
                </div>
                <div className='mt-10 mx-3'>
                    <RechercheBar text={'Mettre en mission'} isBouton={true} />
                </div>



                {/* definition du tableau qui contient les personnes */}
                <div className=' flex top-56 mx-3 absolute w-4/5 h-4/6'>
                    <DataTable 
                    columns={colonnes}
                    responsive
                    data={data}
                    className='flex'
                    fixedHeader={true}
                    pointerOnHover={true} 
                    highlightOnHover
                    
                    >

                    </DataTable>

                </div>

            </div>


        </main>
    )


}

export default Missions
