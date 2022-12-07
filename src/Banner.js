import React from 'react'
import bannerico from "./assets/spider.png";

export default function Banner() {
  return (
    <div className='Banners'>
        <div className='Text'>
        <p style={{ marginLeft:5,marginBottom:0,fontWeight:"bold"}}>Enjoy Every moment</p>
        <p style={{color:"orange" , marginLeft:15,marginTop:0,fontWeight:"bold"}}>best Games</p>
       <div className='Sign' > <button >Sign-up</button></div>
        </div>
        <div className='bannerimage'>
        <img src={bannerico} alt='sp'/>
        </div>
        
    </div>
  )
}
