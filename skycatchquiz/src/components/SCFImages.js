import '../App.scss';
import React from 'react'
import { photos } from '../pArray.js';
import join from '../assets/images/join.png'


function SCFImages() {


    return (
        <div className='Images' >
            {photos.map(photo => {
                return <img className="Image" src={photo.src} alt={photo.alt}></img>
            })}
            <img className='LastImage' src={join} alt="join the team"></img>
        </div>
    )

}


export default SCFImages;
