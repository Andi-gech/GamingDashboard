import React from 'react';

import Pagination from './Pagination';
import Search from './Search';
import { getusers } from './User';

import Videocard from './Videocard';

function VIdeolist(props) {
    const users=getusers()
    return (
        <div className='videolist'>
           <Search/>
       <div className='Ytvideo'>
        <div>
            <p>popular Gaming Videos</p>
            <div className='videolists'>
            {users.map((user)=>user.popular &&(<Videocard src={user.youtube} image={user.image} name={user.name}/>))}
              
                
            </div>
            <p>Gaming Videos Feeds</p>
            <div className='videolists'>
            {users.map((user)=>(<Videocard src={user.youtube} image={user.image} name={user.name}/>))}
                </div>
        </div>
       </div>
       <Pagination/>
        </div>
    );
}

export default VIdeolist;