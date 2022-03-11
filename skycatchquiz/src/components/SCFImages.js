import '../App.scss';
import React from 'react'
import { photos } from '../pArray.js';
import join from '../assets/images/join.png'
import mv from '../assets/images/MV-LOGO.png'


function SCFImages() {


    function imageMouseMove(e) {
        const imgWidth = e.target.offsetWidth;
        const imgHeight = e.target.offsetHeight;
        const centerX = e.target.offsetLeft + imgWidth / 2;
        const centerY = e.target.offsetTop + imgHeight / 2;
        const mouseX = (e.clientX - centerX);
        const mouseY = (e.pageY - centerY); // imgHeight;
        const rotateX = 15 * mouseY / (imgHeight / 2); // 15 is in degrees, *-1 if you want to reverse
        const rotateY = (-1) * 15 * mouseX / (imgWidth / 2)

        e.target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(.95, .95, .95)`

    }

    function imageMouseLeave(e) {
        e.target.style.transform = `perspective(1000px) rotateX(${0}deg) rotateY(${0}deg) scale3d(1, 1, 1)`
    }


    return (
        <div className='Images' >
            {photos.map(photo => {
                return <img className="Image" key={photo.id} src={photo.src} alt={photo.alt} onMouseMove={(e) => imageMouseMove(e)} onMouseLeave={(e) => imageMouseLeave(e)}></img>
            })}
            <img className='LastImage' key={10} src={join} alt="join the team" onMouseMove={(e) => imageMouseMove(e)} onMouseLeave={(e) => imageMouseLeave(e)}></img>
            <img src={mv} className='mvLogo' alt="martha's vineyard stamp"></img>
        </div>
    )

}


export default SCFImages;
