import React, { useState } from 'react';
import { FaAngleDoubleRight,FaAngleDoubleLeft} from 'react-icons/fa/index.esm';
import joystick from "./assets/joystick.png";
import './App.css';



function Sellcard(props) {
    const[active,setactive]=useState(true)
    const[visible,setvisible]=useState('none')
    const[length,setlength]=useState(290)
    const onpress=()=>{
        setactive(!active)
        setvisible('block')
        if (length==500) {
            setlength(290)
        }
        else{
            setlength(500)
        }
       
    }



    return (
        <div className='sellcard' style={{width:length}}>
           
            <div className='cardtop'>
                <p>Accessories</p>
                <div className='iconsright' onClick={onpress}>
               {active && <FaAngleDoubleRight/>}
               {!active && <FaAngleDoubleLeft/>}
                </div>
                

            </div>
            <div className='all'>
            <div className='sellcardimg'>
                <div className='sellcardimgbackground'>
                   


                </div>
                <div className='image'>
                <img src={joystick}/>
                
                </div>
                
                

            </div>
            <div className='texts'  style={{marginTop:30 ,display:visible}}>
            <p style={{marginBottom:0,fontSize:18 ,marginLeft:0}}>Head set</p>
            <p style={{color :"orange",marginTop:0,marginBottom:0,marginLeft:10}}>40% off</p>
            <button style={{color :"black",fontWeight:"bold",marginTop:0,marginLeft:0,width:80,height:30,backgroundColor:"orange",borderRadius:10,border:"none"}}>buy now</button>
            </div>
        </div>
       
            
        
        </div>
    );
}

export default Sellcard;