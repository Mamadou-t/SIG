import React from 'react'

const FormationItem = ({nom,description,dateDebut,dateFin,lieu}) => {
  return (
    <div className='  bg-white shadow-xl hover:shadow-2xl ml-3 mr-3 my-2  w-[550px] h-auto rounded-md p-5'>
      <div>
        <h1 className='font-bold text-2xl'>Avantage de l'IA</h1>
      </div>

      <div className='mt-7'>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi voluptatibus eius minus vitae ratione vero magnam. Provident, est cumque architecto facere dolores, aut consequatur corrupti nostrum corporis, minus obcaecati!</p>
      </div>

        <div className='flex flex-col  mt-5'>
          <p className='text-2xl mb-3'>Lieu : France</p>
          <h2 className='text-xl'>Du 24/02/24 au 24/02/24 </h2>
        </div>
    
    
    </div>
  )
}

export default FormationItem
