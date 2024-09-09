import React from 'react'
import Bouton from './boutons/Bouton'

const ProjetItem = ({ Nom, description }) => {
    return (
        <div className="bg-orange rounded-custom flex flex-col py-4 items-center w-full h-auto space-y-reverse mx-3 text-center justify-between">
            <div className="text-center mt-7 bg-white rounded-3xl w-1/2">
                <h2 className="text-xl font-semibold">{Nom}</h2>
            </div>
            <div className=" text-center text-xl mt-7">
                <p>{description}</p>
            </div>
            <div className="text-center mt-7">
                <Bouton text={'En savoir plus'} style={'text-orange bg-white px-5 py-2 rounded-custom text-orange font-semibold hover:bg-vert hover:text-white'} />
            </div>
        </div>

    )
}

export default ProjetItem
