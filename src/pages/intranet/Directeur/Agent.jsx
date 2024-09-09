import React from 'react'
import SideBar from './SideBar'
import DataTable from 'react-data-table-component'
import RechercheBar from '../../../composants/RechercheBar/RechercheBar'
const Agents = () => {

    const colonnes=[
        {
            name:'N°',
            selector:row=>row.N
        },
        {
            name:'Matricule',
            selector:row=>row.Matricule
        },
        {
            name:'Nom',
            selector:row=>row.Nom
        },
        {
            name:'Prenom',
            selector:row=>row.Prenom
        },
        {
            name:'Genre',
            selector:row=>row.Genre
        },
        {
            name:'Service',
            selector:row=>row.Service
        },
        {
            name:'Statut',
            selector:row=>row.Statut
        },
    ]
    const data=[
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
        {
            N:1,
            Matricule:'P001',
            Nom:'John',
            Prenom:'Doe',
            Genre:'Homme',
            Service:'Service 1',
            Statut:'Actif'
        },
    ]
    return (

        <main className='relative flex flex-row bg-white-30'>
            <SideBar />
            <div className='flex flex-col w-full'>
                <div className='bg-white flex flex-row w-full h-16 justify-between items-center'>
                    <h1 className='font-semibold text-xl items-center flex mx-7'>{'Dashboard > Gestion des agents'}</h1>
                    <div className='rounded-full bg-slate-400 flex justify-center  items-center mx-7 w-10 h-10 '>
                        <h1 className='font-semibold text-xl items-center flex mx-7 '>M</h1>
                    </div>
                </div>
                <div className='mt-10 mx-3'>
                    <RechercheBar isBouton={false} />
                </div>



                {/* definition du tableau qui contient les personnes */}
                <div className=' flex top-56 mx-3 absolute w-4/5 h-4/6'>
                    <DataTable 
                    columns={colonnes}
                    data={data}
                    className='flex'
                    fixedHeader={true}
                    >

                    </DataTable>

                </div>

            </div>


        </main>
    )


}

export default Agents
