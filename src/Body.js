import React, { useState } from 'react'
import './App.css';

import Banner from './Banner';
import Gamecard from './gamecard';
import Sellcard from './sellcard';

import Library from './Library';

import { getGames } from './data';
import Gamings from './Gamings';
import Search from './Search';


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
        <Search/>
        {active && <div >
            <Banner/>
            
            <p>Most played games</p>
            <div className='gameList'>
              {games.map(game=>(
                <Gamecard key={game.id}onPress={setcaractive=>setcardactive(game)} value={game} name={game.name} imguri={game.image} size={game.size}/>
                
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
