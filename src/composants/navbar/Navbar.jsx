import React from 'react'
import Bouton from '../boutons/Bouton'
import Connexion from '../../pages/internet/connexion/Connexion';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
const navbarItems=[
  {
    id:1,
    name: 'Accueil',
    lien: '/'
  },
  {
    id:2,
    name: 'Presentation',
    lien: '#'
  },
  {
    id:3,
    name: 'Nos projets',
    lien: '#'
  },
  {
    id:4,
    name: 'Carriere',
    lien: '#'
  },
  {
    id:5,
    name: 'Contacts',
    lien: '#'
  },
];

  return (
    <div>
      <header className='fixed z-10 w-full'>
        {/*header */}
        <div className="bg-vert flex  ">
          <h1 className='text-white text-3xl  font-bold mx-10 my-5'>DTSI</h1>
          <div className='flex-1 flex justify-center align-text-bottom items-center '>
            {
              navbarItems.map((item)=>(
                 
                <a key={item.id} href={item.lien} className='list-none p-7 hover:text-white hover:underline hover:decoration-vert hover:text-underline-offset-8'>
                  <ul className=''>
                    <li className='text-1xl font-semibold '>{item.name}</li>  
                 </ul>
                </a>
              ))

            }
          </div>
          <div className="mx-11 self-center ">
            <Bouton link={'/Connexion'} text={'Connexion'} style={'bg-white px-5 py-2 rounded-custom text-orange font-semibold hover:bg-orangePure hover:text-white  '}   />
          </div>

        </div>
      </header>
    </div>
  )
}

export default Navbar
