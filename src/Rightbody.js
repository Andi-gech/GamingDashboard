import React, { useState } from 'react'
import { FaBell, FaDoorOpen, FaWrench} from 'react-icons/fa/index.esm';
import { FaUpload ,FaUser} from 'react-icons/fa/index.esm';
import profile from "./assets/gamepic1.jpg";
import Contactlist from './contactlist';
import './App.css';

export default function Rightbody() {
  const[active,setactive]=useState("none")
 
  const changeactiveset=()=>{
    if (active=="none") {
      setactive("block")
      
    }
    else{
      setactive("none")
    }
   
  }
  return (
    <div className='rightbody'>
        <div className='user'>
            <div className='icon'>
        <FaBell size={20} color="gray"/>
        </div>
        <div  className='icon'>
        <FaUpload size={18} color="gray"/>
        </div>
        <div className='userpic' onClick={changeactiveset}>

        <img src={profile}/>
        </div>
        <div className='popup' style={{display:active}}>
          <div className='Iconss'> <FaUser /></div>
          <div className='Iconss'> <FaWrench /></div>
          <div className='Iconss'> <FaDoorOpen /></div>
         
         
        </div>
        </div>
        <Contactlist/>
        
    </div>
  )
}
