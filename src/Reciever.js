import React from 'react'
import profile from "./assets/gamepic1.jpg";
import Message from './Message';

export default function Reciever({message}) {
  return (
    <div className='reciever'>
        <p>{message}</p>

    <img src={profile}/>
    </div>
  )
}
