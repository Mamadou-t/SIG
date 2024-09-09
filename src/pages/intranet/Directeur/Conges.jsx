import React from 'react'
import SideBar from './SideBar'
import DataTable from 'react-data-table-component'
import RechercheBar from '../../../composants/RechercheBar/RechercheBar'
const Conges = () => {

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
            name:'FONCTION',
            selector:row=>row.Fonction_agent
        },
        {
            name:'TYPE DE CONGES',
            selector:row=>row.Type_conges
        },
        {
            name:'ANNEES',
            selector:row=>row.Annee_conges
        },
        {
            name:'DATE DE DEBUT',
            selector:row=>row.Date_debut
        },
        {
            name:'DATE DE FIN',
            selector:row=>row.Date_fin
        }
    ]
    const data=[
        {
            id:1,
            Nom_agent:'Doe',
            Fonction_agent:'Agent',
            Type_conges:'Partiel',
            Annee_conges:'2022',
            Date_debut:'14/12/2022',
            Date_fin:'16/12/2022'

        },
        {
            id:2,
            Nom_agent:'Smith',
            Fonction_agent:'Agent',
            Type_conges:'Total',
            Annee_conges:'2022',
            Date_debut:'15/12/2022',
            Date_fin:'17/12/2022'
        },
        {
            id:3,
            Nom_agent:'John',
            Fonction_agent:'Agent',
            Type_conges:'Total',
            Annee_conges:'2022',
            Date_debut:'16/12/2022',
            Date_fin:'18/12/2022'
        },
        {
            id:4,
            Nom_agent:'Williams',
            Fonction_agent:'Agent',
            Type_conges:'Partiel',
            Annee_conges:'2022',
            Date_debut:'17/12/2022',
            Date_fin:'19/12/2022'
        },
        {
            id:5,
            Nom_agent:'Brown',
            Fonction_agent:'Agent',
            Type_conges:'Total',
            Annee_conges:'2022',
            Date_debut:'18/12/2022',
            Date_fin:'20/12/2022'
        },

    ]

    return (

        <main className='relative flex flex-row bg-white-30'>
            <SideBar />
            <div className='flex flex-col w-full'>
                <div className='bg-white flex flex-row w-full h-16 justify-between items-center'>
                    <h1 className='font-semibold text-xl items-center flex mx-7'>{'Dashboard > Demandes de Congés'}</h1>
                    <div className='rounded-full bg-slate-400 flex justify-center  items-center mx-7 w-10 h-10 '>
                        <h1 className='font-semibold text-xl items-center flex mx-7 '>M</h1>
                    </div>
                </div>
                <div className='mt-10 mx-3'>
                    <RechercheBar  text={'Mettre en congés'} isBouton={true}/>
                </div>



                {/* definition du tableau qui contient les personnes */}
                <div className=' flex top-56 mx-3 absolute w-4/5 h-4/6'>
                    <DataTable 
                    columns={colonnes}
                    responsive
                    data={data}
                    className='flex '
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

export default Conges
