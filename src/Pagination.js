import React from 'react';

function Pagination(props) {
    return (
        <div className='Pagination'>
            <div className='Pre'><button>Prev</button></div>
            <div className='num'><button>1</button>
            <button>2</button>
            <button>3</button></div>
            
            <div className='Pre'><button>Next</button></div>
            
        </div>
    );
}

export default Pagination;