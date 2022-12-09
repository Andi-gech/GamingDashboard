import React from 'react';
import profile from "./assets/gamepic1.jpg";
function Individualgames(props) {
    return (
        <div className='individualgamelink'>
            <div className='as'>
            <img src={profile} alt="gamepic1"/>
            <div className='Text'>
                <h3>Valorant</h3>
                <p>Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Microsoft Windows.</p>
            </div>
            </div>
            
        </div>
    );
}

export default Individualgames;