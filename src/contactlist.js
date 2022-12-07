import React from 'react'
import { FaAngleDoubleDown} from 'react-icons/fa/index.esm';
import { getchannel } from './channel';
import { getgroups } from './groups';
import Profilecard from './Profilecard';
import { getusers } from './User';

export default function Contactlist() {
    const user=getusers()
    const group=getgroups()
    const channel=getchannel()
  return (
    <div className='contactlist'>
         <div className='cardtop'>
                <p>Social</p>
                <FaAngleDoubleDown/>

            </div>
            <div className='online'>
                <p style={{ fontSize:14,marginLeft:20,marginTop:-3}}>online <span style={{color:"green"}}>&#x25C9;</span>{user.length}</p>
            </div>
            <div className='Contact List'>
            {user.map(user=>(
                <Profilecard name={user.name} image={user.image} messages={user.Message}/> ))}
                
            </div>
            <div className='group'>
                <p style={{ fontSize:14,marginLeft:20,marginTop:13}}>Group &#x25C9;{group.length}</p>
            </div>
            <div className='Contact List'>
            {group.map(group=>(
                <Profilecard name={group.name} image={group.image} messages={group.Message}/> ))}
            </div>
            <div className='channel'>
                <p style={{ fontSize:14,marginLeft:20,marginTop:13}}>channels</p>
            </div>
            <div className='Contact List'>
            <div className='Contact List'>
            {channel.map(channel=>(
                <Profilecard name={channel.name} image={channel.image} messages={channel.Message}/> ))}
            </div>
             
            </div>
    </div>
  )
}
