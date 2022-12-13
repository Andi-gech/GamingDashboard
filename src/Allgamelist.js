import React from 'react';
import { Link, parsePath, useParams } from 'react-router-dom';

import { getallGames } from './AllGameData';
import Individualgames from './Individualgames';
import Pagination from './Pagination';
import Search from './Search';

function Allgamelist(props) {
    const gamedatas=getallGames()
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
                {gamedatas.map((games)=>(<Link to={`/gamepad/${games.id}` } state={games}>
                   <Individualgames game={games}  /></Link>))}
            </div>
            <Pagination/>
        </div>
        </div>
    );
}

export default Allgamelist;