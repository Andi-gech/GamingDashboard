import React from 'react';
import profile from "./assets/gamepic1.jpg";

function Videocard({src ,name,image}) {
   
    
    return (
        <div className='Videocard'>
        <iframe 
    
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
    <div className='profiletext'>
        <img src={image} alt='Profile'/>
        <div className='profiletexts'>
        <p>{name}</p>
        </div>
    
    </div>
    
    </div>
    );
}

export default Videocard;