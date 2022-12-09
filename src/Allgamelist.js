import React from 'react';

import Individualgames from './Individualgames';
import Pagination from './Pagination';
import Search from './Search';

function Allgamelist(props) {
    return (
        <div className='games'>
          <Search/>
        <div>
            <p>Select Catagory</p>
            <div className='catagories'>
            <button>All</button>

                <button>Action</button>
                <button>Horor</button>
                <button>Horor</button>
                <button>Horor</button>
                <button>Horor</button>
                <button>Horor</button>
                <button>Horor</button>
                <button>Horor</button>
                <button>Horor</button>
                <button>Archade</button>
            </div>
            <div className='allgamelist'>
                <Individualgames />
                <Individualgames />
                <Individualgames />
                <Individualgames />
                <Individualgames />
                <Individualgames />
            </div>
            <Pagination/>
        </div>
        </div>
    );
}

export default Allgamelist;