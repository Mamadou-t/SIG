import React, { useState } from 'react'
import Caroussel from '../../composants/caroussel/Caroussel';
import Footer from '../../composants/footer';
import ProjetItem from '../../composants/ProjetItem';
import ActiviteItem from '../../composants/ActiviteItem';
import Navbar from '../../composants/navbar/Navbar';
import Bouton from '../../composants/boutons/Bouton';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import StageModal from '../../composants/modals/StageModal';
import RdvModal from '../../composants/modals/RdvModal';



const Home = () => {

    const [openMstage,setOpenMstage] =useState(false);
    const [openMrdv,setOpenMrdv] =useState(false);
  return (
    
    <main className='bg-gray-100'>
        
      <Navbar />
      <section className='mx-14 w-1/2'>        
        <Caroussel />
      </section>
      { /* la partie presentation */}
      <div className='mt-5 flex'>
        <div className='bg-white  mx-5 w-auto h-auto p-2 rounded-custom'>
          <h2 className='text-2xl font-bold p-7 '>Présentation</h2>
          <p className='text-gray-500 text-xl sm:text-xl ml-7 '>
            La DTSI est chargée: de développer et de constituer un système d'information et de communication global
            et de piloter son évolution dans le cadre d'un schéma directeur; d'assurer l'accès à l'information et
            aux applications en garantissant la sécurité,l'intégrité, la fiabilité des services et l'interopérabilité des référentiels
          </p>
        </div>
        <div className='mx-2 flex flex-col   w-1/2 text-center '>
          <img className='' src="src/assets/evenement_7.jpg" alt="" />
          <div className='mt-2'>
            <h2 className='font-bold'>M.KONE YETANABAN</h2>
            <h3 className='text-xs'>Direction des Technologies et des Systèmes d'Information</h3>
          </div>
        </div>
      </div>
      { /* la partie Nos projets*/}
      <div className='bg-white  flex-col mt-7 p-3 text-center'>
        <div>
          <h2 className='text-3xl font-bold p-7'>Nos projets</h2>
        </div>
        <div className='bg-white flex-row flex mt-7 p-4'>
          <ProjetItem Nom={'Education Numerique'} description={"Le projet d'éducation numérique en Côte d'Ivoire vise à moderniser l'enseignement en intégrant les technologies digitales dans les salles de classe..."} />
          <ProjetItem Nom={'SIG DTSI'} description={"Explorez l'univers novateur du Système de Gestion (SIG) de la DTSI, fusionnant IA et convivialité. Ce puissant écosystème offre une agilité inégalée, une sécurité robuste et une expérience utilisateur exceptionnell"} />
          <ProjetItem Nom={'Call-Center MENA'} description={"Le Ministère de l'Éducation Nationale et de l'Alphabétisation souhaite établir un Centre d'Appels dédié à améliorer la communication et le support pour les citoyens, les enseignants, les élèves, et les autres parties prenantes..."} />
        </div>
      </div>

      {/* la partie activité */}

      <div className='bg-white text-center pb-7'>
        <div>
          <h2 className='text-3xl font-bold p-7'>Activités</h2>
        </div>
        <ActiviteItem />
      </div>

      {/* la partie carriere */}

      <div className='my-10 py-4  bg-white flex flex-row items-center justify-center'>
        <div>
          <div className='text-2xl font-bold p-7'>
            <h2>Carriere</h2>
          </div>
          <div className='w-auto'>
            <p className='text-gray-500 text-xl sm:text-xl mx-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores at laudantium consequatur fugiat ut sed exercitationem sequi harum qui vero optio, voluptate minus placeat expedita illo tenetur ipsa veniam esse voluptate minus placeat expedita illo tenetur ipsa veniam esse voluptate minus placeat expedita illo tenetur ipsa veniam esse voluptate minus placeat expedita illo tenetur ipsa veniam esse voluptate minus placeat expedita illo tenetur ipsa veniam esse.</p>
          </div>
          <div className='mt-5 mx-7'>
            <Bouton onclick={()=>setOpenMstage(true)} text={'Faire une demande de stage'} style={'bg-orange px-5 py-2 rounded-custom text-white font-semibold hover:bg-white hover:text-orange hover:border-solid hover:border-orange'} />
          </div>
        </div>
        <div className='w-full text-center  '>
          <img src="src/assets/evenement_7.jpg" alt="" />
        </div>
      </div>

      {/* la partie contact */}

      <div className='bg-white flex flex-row justify-between '>
        <div className='w-1/2'>
          <div className='text-2xl font-bold p-7'>
            <h2 >Nous contacter</h2>
          </div>
          <div className='flex flex-row'>
                <div className='flex-row flex items-center mx-5 '>
                  <CiLocationOn size={50} color='orange' />
                  <div className='flex flex-col mx-5'>                   
                    <h5 className='text-2xl font-semibold'>Notre Localisation</h5>
                    <p className='text-xl'>DTSI-MENA,Grand-Bassam, Côte d'Ivoire</p>
                  </div>
                </div>

                <div className='flex-row flex items-center mx-5 w-auto '>
                  <CiMail size={50} color='orange'/> 
                  <div className='flex flex-col mx-5'>                   
                    <h5 className='text-2xl font-semibold'>Comment pouvons nous bous aider ?</h5>
                    <p className='text-xl'>dtsi@gmail.com</p>
                  </div>
                </div>

          </div>
          <div className='p-7 mt-3'>
              <Bouton onclick={()=>setOpenMrdv(true)} text={'Faire une demande de Rendez-vous'} style={'bg-orange px-5 py-2 rounded-custom text-white font-semibold hover:bg-white hover:text-orange hover:border-solid hover:border-orange'} />
          </div>
        </div>
        <div className='w-1/4'>
          <form  className='shadow-2xl rounded-custom p-5 m-8 w-auto '>
            <div className='text-center py-4'>
              <h1 className='font-semibold text-2xl'>Envoyer un message</h1>
            </div>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" className='w-full px-3 py-2 rounded-custom  focus:outline-none  border-2 border-gray-300' />

            <label htmlFor="prenom">Prenom</label>
            <input type="text" id="prenom" name="prenom" className='w-full px-3 py-2 rounded-custom  focus:outline-none  border-2 border-gray-300' />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className='w-full px-3 py-2 rounded-custom  focus:outline-none  border-2 border-gray-300' />

            <label htmlFor="telephone">Telephone</label>
            <input type="tel" id="telephone" name="telephone" className='w-full px-3 py-2 rounded-custom  focus:outline-none  border-2 border-gray-300' />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className='w-full px-3 py-2 rounded-custom  focus:outline-none  border-2 border-gray-300' rows='5'></textarea>
            
            <button className='bg-orange px-5 py-2 rounded-custom text-white font-semibold hover:bg-white hover:text-orange hover:border-solid hover:border-orange'>Envoyer</button>
          </form>
        </div>
      </div>

      {/*la partie footer */}

      <div>
        <Footer />
      </div>
      <StageModal isVisible={openMstage} onclose={()=>setOpenMstage(false)} />
      <RdvModal isVisible={openMrdv} onclose={()=>setOpenMrdv(false)} />

    </main>
    

  )
}

export default Home
