import React, { useState } from 'react'
import './App.css';
import { FaSearch,FaAngleDoubleLeft} from 'react-icons/fa/index.esm';
import Banner from './Banner';
import Gamecard from './gamecard';
import Sellcard from './sellcard';

import Library from './Library';
import GameBanner from './gamebanner';
import { getGames } from './data';
import Gamings from './Gamings';


export default function Mbody
() {
  const [active,setactive]=useState(true)
  const [activearray,setactivearray]=useState([])
  const setcardactive=(game)=>{
    setactive(!active)
   setactivearray(game)
   
  }
  const games=getGames()
  return (
    <div className='Mbody'>
        <div className='Search'>
        <input placeholder='Search'/>
        <FaSearch size={25} color='rgb(199, 199, 199)'/>
        </div>
        {active && <div >
            <Banner/>
            
            <p>Most played games</p>
            <div className='gameList'>
              {games.map(game=>(
                <Gamecard onPress={setcaractive=>setcardactive(game)} value={game} name={game.name} imguri={game.image} size={game.size}/>
                
              ))}
              </div>
            <div className='lastBody'>
                <Sellcard/>
                <Library/>
                

            </div>
           
        </div>}
        {!active && <Gamings setactive={setcardactive} game={activearray} />}


    </div>
  )
}
