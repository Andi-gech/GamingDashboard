import React from 'react';
import { FaSearch} from 'react-icons/fa/index.esm';
function Search(props) {
    return (
        <div className='Search'>
        <input placeholder='Search'/>
        <FaSearch size={25} color='rgb(199, 199, 199)'/>
        </div>
    );
}

export default Search;