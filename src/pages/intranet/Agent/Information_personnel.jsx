import React from 'react';
import SideBar from './SideBar';
import RechercheBar from '../../../composants/RechercheBar/RechercheBar';

const InformationPersonnel = () => {
    return (
        <main className="flex flex-row bg-white h-screen">
            <SideBar />
            <div className="flex flex-col w-full">
                <div className="bg-white flex flex-row w-full h-16 shadow-md justify-between items-center">
                    <h1 className="font-semibold text-xl mx-7">{'Dashboard > Gestion du personnel'}</h1>
                    <div className="rounded-full  bg-slate-400 flex justify-center items-center mx-7 w-10 h-10">
                        <h1 className="font-semibold text-xl">M</h1>
                    </div>

                </div>

                <div className=" flex-grow flex justify-between overflow-hidden">
                    <div className="w-1/4  flex items-center justify-center">
                        <div className="bg-white-30 w-3/5 h-2/5">
                            <img src="" alt="" />
                        </div>
                    </div>

                    <div className="w-3/4  flex flex-col justify-center px-4">
                        <form className="p-1  items-start">
                            <div className="w-full grid grid-cols-2 gap-3  flex-wrap flex-col">
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Matricule</label>
                                    <input type='text'  id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Nom</label>
                                    <input type='text' id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Prénom</label>
                                    <input type='text' id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Genre</label>
                                    <select name="" id="" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500'>
                                        <option value="">---</option>
                                        <option value="Homme">Homme</option>
                                        <option value="Femme">Femme</option>
                                    </select>
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Numéro de Téléphone</label>
                                    <input type='tel' id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Adresse E-mail</label>
                                    <input type='email' id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Service</label>
                                    <input type='text' id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Fonction</label>
                                    <input type='text' id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Emploi</label>
                                    <input type='text' id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                <div className='w-full mr-3 my-1'>
                                    <label htmlFor="matricule" className='block text-sm my-2 font-medium text-gray-700'>Photo de profil</label>
                                    <input type='file' id="matricule" name="matricule" className='block w-full  px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required />
                                </div>
                                {/* Add more input fields as needed */}
                            </div>
                            <div className="flex justify-end mt-5">
                                <button type="submit" className="bg-vert hover:bg-white hover:text-vert hover:border-solid hover:border-vert text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Valider</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default InformationPersonnel;
