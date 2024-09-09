import React from 'react'
import SideBar from './SideBar'
import DataTable from 'react-data-table-component'
import RechercheBar from '../../../composants/RechercheBar/RechercheBar'
const Activite = () => {

    const colonnes=[
        {
            name:'N°',
            selector:row=>row.id
        },
        {
            name:'Nom',
            selector:row=>row.Nom
        },
        {
            name:'Description',
            selector:row=>row.Description
        },
        {
            name:'Lieu',
            selector:row=>row.Lieu
        },
        {
            name:'date',
            selector:row=>row.Date
        }
    ]
    const data=[
        {
            id:1,
            Nom:'Activite',
            Description:'activite aura liue djnjcnejznjcnznlzknjenbvnennc,enne j"jjk"ndj"njhbbdhjbcegjebcbjbefhejbjgbhehbcjhebfhbknzj',
            Lieu:'bassam',
            Date:'14/12/23'
        },
        {
            id:1,
            Nom:'Activite',
            Description:'activite aura liue djnjcnejznjcnznlzknjenbvnennc,enne j"jjk"ndj"njhbbdhjbcegjebcbjbefhejbjgbhehbcjhebfhbknzj',
            Lieu:'bassam',
            Date:'14/12/23'
        },
        {
            id:1,
            Nom:'Activite',
            Description:'activite aura liue djnjcnejznjcnznlzknjenbvnennc,enne j"jjk"ndj"njhbbdhjbcegjebcbjbefhejbjgbhehbcjhebfhbknzj',
            Lieu:'bassam',
            Date:'14/12/23'
        },
        {
            id:1,
            Nom:'Activite',
            Description:'activite aura liue djnjcnejznjcnznlzknjenbvnennc,enne j"jjk"ndj"njhbbdhjbcegjebcbjbefhejbjgbhehbcjhebfhbknzj',
            Lieu:'bassam',
            Date:'14/12/23'
        },
        {
            id:1,
            Nom:'Activite',
            Description:'activite aura liue djnjcnejznjcnznlzknjenbvnennc,enne j"jjk"ndj"njhbbdhjbcegjebcbjbefhejbjgbhehbcjhebfhbknzj',
            Lieu:'bassam',
            Date:'14/12/23'
        },
    ]

    return (

        <main className='relative flex flex-row bg-white-30'>
            <SideBar />
            <div className='flex flex-col w-full'>
                <div className='bg-white flex flex-row w-full h-16 justify-between items-center'>
                    <h1 className='font-semibold text-xl items-center flex mx-7'>{'Dashboard > Activités'}</h1>
                    <div className='rounded-full bg-slate-400 flex justify-center  items-center mx-7 w-10 h-10 '>
                        <h1 className='font-semibold text-xl items-center flex mx-7 '>M</h1>
                    </div>
                </div>
                <div className='mt-10 mx-3'>
                    <RechercheBar isBouton={true} text={'Creer un activité'} />
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

export default Activite
