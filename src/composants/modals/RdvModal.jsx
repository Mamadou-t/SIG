import React from 'react'

const RdvModal = ({isVisible,onclose}) => {
    if (!isVisible) return null;

    return (
        <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
            <div className=' flex flex-col w-1/3 '>
                <button className='text-white text-xl place-self-end' onClick={() => onclose()}>X</button>
                <div className='bg-white px-7 pt-5 rounded-md h-auto  '>
                    <h1 className='text-center font-semibold text-xl mb-5'>Faire une demande de RDV</h1>
                    <div className='flex flex-col'>
                        <form action="">
                            <div className='mb-3'>
                                <label htmlFor="name" className='block text-sm my-2 font-medium text-gray-700'>Nom et Prénom</label>
                                <input type="text" id="name" name="name" className='block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre nom et prénom' required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="email" className='block text-sm my-2 font-medium text-gray-700'>Email</label>
                                <input type="email" id="email" name="email" className='block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline
                        focus:border-gray-500' placeholder='Votre email' required/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="phone" className='block text-sm my-2 font-medium text-gray-700'>Téléphone</label>
                                <input type="tel" id="phone" name="phone" className='block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre téléphone' required />
                            </div>
                            <div className='mb-3 flex flex-row justify-between '>
                                <div className='flex flex-col w-2/3 mr-2'>
                                    <label htmlFor="subject" className='block text-sm my-2 font-medium text-gray-700'>Date</label>
                                    <input type="date" id="subject" name="subject" className='block w-full px-3 py-2  text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Vvotre sujet' required />
                                </div>
                                <div className='flex flex-col w-1/3'>
                                    <label htmlFor="message" className='block text-sm my-2 font-medium text-gray-700'>Heure</label>
                                    <input type="time" id="message" name="message" className='block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message' required />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="message" className='block text-sm my-2 font-medium text-gray-700'>Objet</label>
                                <input type='text' id="message" name="message" className='block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500' placeholder='Votre message...' required/>
                            </div>
                            <div className='flex justify-end mx-3 mt-7'>
                                <button type="submit" className='bg-vert  text-white px-5 py-2 rounded-md text-sm font-semibold hover:border-solid hover:text-orange hover:border-vert hover:bg-white'>Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RdvModal
