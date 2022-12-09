import React from 'react';
import profile from "./assets/gamepic1.jpg";
function Videocard(props) {
    const src = "https://www.youtube.com/embed/sUKwTVAc0Vo";
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
        <img src={profile} alt='Profile'/>
        <div className='profiletexts'>
        <p>andutii</p>
        </div>
    
    </div>
    
    </div>
    );
}

export default Videocard;