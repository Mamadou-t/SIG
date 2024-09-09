import React from 'react'

const Connexion = () => {
  return (
  <main className=''>
  <div className='flex  justify-center top- '>

        <div className='flex-col flex shadow-2xl rounded-custom p-5 m-8 w-1/3 ' >
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Connexion</h1>
          </div>

            <form action="" >
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className='w-full px-3 py-2 rounded-custom  focus:outline-none  border-2 border-gray-300' required />

                <label htmlFor="password" className=''>Password</label>
                <input type="password" id="password" name="password"  className='w-full px-3 py-2 rounded-custom  focus:outline-none  border-2 border-gray-300' required />

                <button type="submit"  className='w-full px-3 py-2 my-5 rounded-custom text-white bg-vert hover:bg-white hover:text-orange hover:border-solid hover:border-vert'>Se connecter</button>
            </form>
        </div>
      </div>

  </main>
  )
}

export default Connexion
