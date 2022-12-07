import React from 'react'
import bannerico from "./assets/gamepic.jpg";

export default function Gamecard({onPress,name,imguri,size}) {
  return (
    <div className='gamecard' onClick={onPress}>
        <img src={imguri} alt='pic'/>
        <p>{name}</p>
        <p style={{fontSize:13,fontWeight:"normal",color:"gray",marginTop:0}}>{size}</p>
    </div>
  )
}
