import React from 'react'

import Gamestatus from './gamestatus';

export default function Library() {
  return (
    <div className='Librarycard'>
            <div className='cardtop'>
                <p>Library</p>
                

            </div>
            <div>
                <Gamestatus/>
                <Gamestatus/>
                <Gamestatus/>
            </div>

            
        </div>
  )
}
