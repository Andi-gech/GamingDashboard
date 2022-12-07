import React from 'react'
import bannerico from "./assets/gamepic.jpg";
export default function Gamestatus() {
  return (
    <div className='Downloadlist'>
        <div className='profile'>
            <div className='profilepic'>
        <img src={bannerico} alt="ss"/></div>
        <div className='Name'>
            <p>Valorant</p>
            <p>2.5gb</p>
        </div>
        
        </div>
        <div className='date' >
        <p>14nov</p>
            <p>2020</p>

        </div>
        <div  className='downloadbutton'>
            <button>Download</button>
        </div>

    </div>
  )
}
