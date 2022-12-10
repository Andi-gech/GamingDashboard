import React from 'react';
import Banner from './Banner';
import Chatbox from './Chatbox';
import Contactlist from './contactlist';
import Search from './Search';

function Message(props) {
    return (
        <div className='messagebord'>
            <Search/ >
            <div className='messageContainter'>
                <div className='contacts'>  <Contactlist/></div>
          
                <Chatbox/>
            
         
            </div>
           

        </div>
    );
}

export default Message;