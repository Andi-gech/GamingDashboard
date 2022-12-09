import React from 'react';
import { FaSearch} from 'react-icons/fa/index.esm';
import Individualgames from './Individualgames';
import Pagination from './Pagination';

function Allgamelist(props) {
    return (
        <div className='games'>
            <div className='Search'>
        <input placeholder='Search'/>
        <FaSearch size={25} color='rgb(199, 199, 199)'/>
        </div>
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