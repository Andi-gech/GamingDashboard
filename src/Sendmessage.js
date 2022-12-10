import React from 'react';
import { FaPaperPlane, FaPlane, FaPlaneSlash, FaTelegram } from 'react-icons/fa/index.esm';
import profile from "./assets/p1.jpg";

function Sendmessage(props) {
    return (
        <div className='sendmessage'>
            <img src={profile}/>
            <input placeholder='send message' />
            <div className='ics'>
                <FaPaperPlane/>
            </div>
            
        </div>
    );
}

export default Sendmessage;