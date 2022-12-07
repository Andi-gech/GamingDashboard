import React from 'react'
import bannerico from "./assets/gamepic.jpg";
import './App.css';
export default function Profilecard({name,image,messages}) {
  return (
    <div className='userprofile'>
            <div className='profilepic'>
        <img src={image} alt="ss"/></div>
        <div className='Names'>
            <p style={{fontSize:15,marginLeft:10}}>{name}</p>
            <p style={{fontSize:15,color:'GrayText' ,marginLeft:10,fontWeight:"normal"}}> {messages}</p>
        </div>
        </div>
  )
}
