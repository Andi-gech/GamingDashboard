import React from 'react';
import Reciever from './Reciever';
import Sender from './Sender';
import Sendmessage from './Sendmessage';

function Chatbox(props) {
    return (
        <div className='chatbox'>
            <div>
            <Sender/>
           
           <Reciever/>
           <Sender/>
           <Reciever/>
           <Sender/>
            </div>
           
           <div className='messager'>
           <Sendmessage/>
           </div>
           
        </div>
    );
}

export default Chatbox;