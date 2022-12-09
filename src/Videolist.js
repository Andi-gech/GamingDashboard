import React from 'react';

import Pagination from './Pagination';
import Search from './Search';

import Videocard from './Videocard';

function VIdeolist(props) {
    
    return (
        <div className='videolist'>
           <Search/>
       <div className='Ytvideo'>
        <div>
            <p>popular Gaming Videos</p>
            <div className='videolists'>
                <Videocard/>
                <Videocard/>
                
            </div>
            <p>Gaming Videos Feeds</p>
            <div className='videolists'><Videocard/>
                <Videocard/>
                <Videocard/>
                <Videocard/></div>
        </div>
       </div>
       <Pagination/>
        </div>
    );
}

export default VIdeolist;