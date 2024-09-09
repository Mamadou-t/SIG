import React from 'react'
import Bouton from '../boutons/Bouton'

const RechercheBar = ({text, isBouton}) => {
 if (isBouton==true) {
    return (
        <div className='bg-white flex flex-row p-5 rounded-custom shadow-md '>
          <div className='flex flex-row w-full' >
            <input type='text' placeholder='Rechercher...' className=' rounded-tl-md rounded-bl-md border-2 border-r-0 p-2 w-1/2' />   
            <button className=' bg-vert px-5 py-2 rounded-r-md rounded-br-md text-white font-semibold hover:bg-white hover:text-vert hover:border-solid hover:border-vert'>Rechercher</button>
          </div>
    
            <Bouton text={text} style={'w-1/5 text-center font-semibold  px-3 py-2 mx-7 rounded-custom text-white bg-vert hover:bg-white hover:text-vert hover:border-solid hover:border-vert'} />
        </div>
    )
 } else{
    return (
        <div className='bg-white flex flex-row p-5 rounded-custom shadow-md '>
          <div className='flex flex-row w-full' >
            <input type='text' placeholder='Rechercher...' className=' rounded-tl-md rounded-bl-md border-2 border-r-0 p-2 w-1/2' />   
            <button className=' bg-vert px-5 py-2 rounded-r-md rounded-br-md text-white font-semibold hover:bg-white hover:text-vert hover:border-solid hover:border-vert'>Rechercher</button>
          </div>
    
        </div>
    )
 }
  
}

export default RechercheBar
