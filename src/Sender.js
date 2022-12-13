import React from 'react';
import profile from "./assets/gamepic1.jpg";
function Sender({messages}) {
    return (
        <div className='sender'>
            <img src={profile}/>
            <p>{messages}</p>
        </div>
    );
}

export default Sender;