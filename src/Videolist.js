import React from 'react';
import { FaSearch} from 'react-icons/fa/index.esm';
import Pagination from './Pagination';

import Videocard from './Videocard';

function VIdeolist(props) {
    
    return (
        <div className='videolist'>
            <div className='Search'>
        <input placeholder='Search'/>
        <FaSearch size={25} color='rgb(199, 199, 199)'/>
        </div>
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