import React from 'react';
import { getmessage } from './messsagedata';
import Reciever from './Reciever';
import Sender from './Sender';
import Sendmessage from './Sendmessage';

function Chatbox(props) {
    const request=1
    const message=getmessage()
    return (
        <div className='chatbox'>
            <div>
                {message.map((message)=>{if (message.from_id==request && message.to_id==2) {
                    return (<Sender messages={message.Message}/>)
                } else if(message.from_id==2 && message.to_id==request){
                    return (<Reciever message={message.Message} />)
                } })}
               
            </div>
           
           <div className='messager'>
           <Sendmessage/>
           </div>
           
        </div>
    );
}

export default Chatbox;