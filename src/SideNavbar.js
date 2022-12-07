import React from 'react';
import './App.css';
import { FaHome,FaGamepad,FaYoutube ,FaUserFriends,FaPhone,FaLock} from 'react-icons/fa/index.esm';
function SideNavbar(props) {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='' alt='Logo'/>
            </div>
            <div className='navbartext'>
                <div className='navbuttona'>
            <FaHome size={25} color='rgb(199, 199, 199)'/>
            </div>
            <div  className='navbutton'>
            <FaGamepad size={25}  color='rgb(199, 199, 199)' />
            </div>
            <div  className='navbutton'>
            <FaYoutube size={25} color='rgb(199, 199, 199)'  />
            </div>
            <div  className='navbutton'>
            <FaUserFriends size={25} color='rgb(199, 199, 199)'  />
            </div>
            <div  className='navbutton'>
            <FaPhone size={25} color='rgb(199, 199, 199)'  />
            </div>
            </div>
            
        </div>
    );
}

export default SideNavbar;