import React, { useState } from 'react';
import './App.css';
import { FaHome,FaGamepad,FaYoutube ,FaUserFriends,FaPhone} from 'react-icons/fa/index.esm';
import { Link } from 'react-router-dom';
function SideNavbar(props) {
    const [active,setactive]=useState("")
    const updateactive=(name)=>{setactive(name)}

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='' alt='Logo'/>
            </div>
            <div className='navbartext'>
                <div className={active === "home" ? "navbuttona" : "navbutton"} onClick={()=>updateactive("home")}>
           <Link to="/"> <FaHome size={25} color='rgb(199, 199, 199)'/></Link>
            </div>
            <div   className={active === "gamepad" ? "navbuttona" : "navbutton"} onClick={()=>updateactive("gamepad")}>
            <Link to="gamepad" ><FaGamepad size={25}  color='rgb(199, 199, 199)' /></Link>
            </div>
            <div   className={active === "Youtube" ? "navbuttona" : "navbutton"} onClick={()=>updateactive("Youtube")}>
            <Link to="Youtube"><FaYoutube size={25} color='rgb(199, 199, 199)'  /></Link>
            </div>
            <div  className={active === "Friends" ? "navbuttona" : "navbutton"} onClick={()=>updateactive("Friends")}>
            <Link to="Friends"><FaUserFriends size={25} color='rgb(199, 199, 199)'  /></Link>
            </div>
            <div   className={active === "phone" ? "navbuttona" : "navbutton"} onClick={()=>updateactive("phone")}>
            <Link to="phone"><FaPhone size={25} color='rgb(199, 199, 199)'  /></Link>
            </div>
            </div>
            
        </div>
    );
}

export default SideNavbar;