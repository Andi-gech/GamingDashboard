import React from 'react';
import profile from "./assets/gamepic1.jpg";
function Individualgames({game}) {
    return (
        <div className='individualgamelink'>
            <div className='as'>
            <img src={game.image} alt="gamepic1"/>
            <div className='Text'>
                <h3>{game.name}</h3>
                <p>{game.details}</p> </div>
            </div>
            
        </div>
    );
}

export default Individualgames;