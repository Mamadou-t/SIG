import React from 'react'

const ProjetItem = ({nom,description,dateDebut,dateFin}) => {
  return (
    <div className=' bg-white shadow-xl hover:shadow-2xl ml-3 mr-3 my-2  w-[550px] h-auto rounded-md p-5'>
      <div>
        <h1 className='font-bold text-2xl'>MENA</h1>
      </div>

      <div className='mt-7'>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi voluptatibus eius minus vitae ratione vero magnam. Provident, est cumque architecto facere dolores, aut consequatur corrupti nostrum corporis, minus obcaecati!</p>
      </div>

        <div className='flex items-center mt-5'>
          <h2 className='text-xl'>Du 24/02/24 au 24/02/24 </h2>
        </div>
    
    
    </div>
  )
}

export default ProjetItem
