import React from 'react'


export default function Gamecard({name,imguri,size}) {
  return (
    <div className='gamecard'>
        <img src={imguri} alt='pic'/>
        <p>{name}</p>
        <p style={{fontSize:13,fontWeight:"normal",color:"gray",marginTop:0}}>{size}</p>
    </div>
  )
}
